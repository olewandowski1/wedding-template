import { createHash, createHmac, timingSafeEqual } from 'crypto';
import { cookies, headers } from 'next/headers';
import { getTranslations } from 'next-intl/server';

export type UnlockState = {
  status: 'idle' | 'error' | 'success';
  message?: {
    title: string;
    detail: string;
  };
};

const RATE_LIMIT_MAX_ATTEMPTS = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_ENTRIES = 10_000;
const rateLimitStore = new Map<
  string,
  {
    count: number;
    resetAt: number;
  }
>();

async function getClientIdentifier(): Promise<string> {
  const requestHeaders = await headers();
  const forwardedFor = requestHeaders.get('x-forwarded-for');
  const realIp = requestHeaders.get('x-real-ip');
  const rawIp = forwardedFor?.split(',')[0]?.trim() || realIp || 'unknown';
  return rawIp;
}

async function isRateLimited(): Promise<boolean> {
  const now = Date.now();
  for (const [key, entry] of rateLimitStore.entries()) {
    if (entry.resetAt <= now) {
      rateLimitStore.delete(key);
    }
  }

  if (rateLimitStore.size > RATE_LIMIT_MAX_ENTRIES) {
    const entries = Array.from(rateLimitStore.entries()).sort(
      (a, b) => a[1].resetAt - b[1].resetAt,
    );
    for (const [key] of entries.slice(
      0,
      Math.max(1, rateLimitStore.size - RATE_LIMIT_MAX_ENTRIES),
    )) {
      rateLimitStore.delete(key);
    }
  }

  const identifier = await getClientIdentifier();
  const existing = rateLimitStore.get(identifier);

  if (!existing || existing.resetAt <= now) {
    rateLimitStore.set(identifier, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  if (existing.count >= RATE_LIMIT_MAX_ATTEMPTS) {
    return true;
  }

  existing.count += 1;
  rateLimitStore.set(identifier, existing);
  return false;
}

export async function unlockAccess(
  _prevState: UnlockState,
  formData: FormData,
): Promise<UnlockState> {
  'use server';
  const t = await getTranslations('Errors');

  const isLimited = await isRateLimited();

  if (isLimited) {
    return {
      status: 'error',
      message: {
        title: t('rateLimit.title'),
        detail: t('rateLimit.detail'),
      },
    };
  }

  const accessKey = process.env.WEDDING_ACCESS_PASSWORD;
  const accessSecret = process.env.WEDDING_ACCESS_SECRET;
  const submittedKey = formData.get('accessKey');
  const normalizedKey =
    typeof submittedKey === 'string' ? submittedKey.trim() : '';

  if (!accessKey) {
    return {
      status: 'error',
      message: {
        title: t('missingPassword.title'),
        detail: t('missingPassword.detail'),
      },
    };
  }

  if (!accessSecret) {
    return {
      status: 'error',
      message: {
        title: t('missingSecret.title'),
        detail: t('missingSecret.detail'),
      },
    };
  }

  if (!normalizedKey) {
    return {
      status: 'error',
      message: {
        title: t('passwordRequired.title'),
        detail: t('passwordRequired.detail'),
      },
    };
  }

  const storedHash = createHash('sha256').update(accessKey).digest();
  const submittedHash = createHash('sha256').update(normalizedKey).digest();
  const matches = timingSafeEqual(storedHash, submittedHash);

  if (!matches) {
    return {
      status: 'error',
      message: {
        title: t('invalidPassword.title'),
        detail: t('invalidPassword.detail'),
      },
    };
  }

  const cookieValue = createHmac('sha256', accessSecret)
    .update('wedding-access')
    .digest('base64url');

  const cookieStore = await cookies();
  const cookieName =
    process.env.NODE_ENV === 'production'
      ? '__Host-wedding_access'
      : 'wedding_access';

  cookieStore.set(cookieName, cookieValue, {
    httpOnly: true,
    sameSite: 'strict',
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 30,
  });

  return { status: 'success' };
}

export async function checkAccessUnlocked(): Promise<boolean> {
  const cookieStore = await cookies();
  const accessSecret = process.env.WEDDING_ACCESS_SECRET;
  const cookieName =
    process.env.NODE_ENV === 'production'
      ? '__Host-wedding_access'
      : 'wedding_access';
  const cookieValue = cookieStore.get(cookieName)?.value;
  const expectedValue = accessSecret
    ? createHmac('sha256', accessSecret)
        .update('wedding-access')
        .digest('base64url')
    : null;

  if (!cookieValue || !expectedValue) return false;

  return (
    cookieValue.length === expectedValue.length &&
    timingSafeEqual(Buffer.from(cookieValue), Buffer.from(expectedValue))
  );
}
