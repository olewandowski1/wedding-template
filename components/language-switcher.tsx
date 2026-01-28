'use client';

import { useTransition } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

export function LanguageSwitcher({ scrolled }: { scrolled?: boolean }) {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations('LanguageSwitcher');

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === locale || isPending) return;

    startTransition(() => {
      document.cookie = `locale=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
      router.refresh();
    });
  };

  const languages = [
    { code: 'pl', label: 'POLSKI' },
    { code: 'en', label: 'ENGLISH' },
  ];

  return (
    <div
      className='flex items-center gap-4'
      role='navigation'
      aria-label={t('label')}
    >
      {languages.map((lang, index) => (
        <div key={lang.code} className='flex items-center gap-4'>
          <button
            onClick={() => handleLocaleChange(lang.code)}
            disabled={isPending}
            className={cn('transition-opacity', {
              'font-bold underline': locale === lang.code,
              'opacity-50 hover:opacity-100': locale !== lang.code,
            })}
            title={t(lang.code as any)}
          >
            {lang.label}
          </button>
          {index < languages.length - 1 && <span>|</span>}
        </div>
      ))}
    </div>
  );
}
