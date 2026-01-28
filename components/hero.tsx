'use client';

import type { ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from './language-switcher';

type HeroProps = {
  locked?: boolean;
  cta?: ReactNode;
};

export function Hero({ locked = false, cta }: HeroProps) {
  const t = useTranslations('Hero');

  return (
    <section id='hero'>
      {!locked && <p>{t('invitation')}</p>}
      <h1>{t('names')}</h1>

      <div>
        <p>{t('date')}</p>
      </div>

      <div>
        {cta ? (
          cta
        ) : (
          <Button
            onClick={() =>
              document
                .getElementById('rsvp')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            {t('rsvp')}
          </Button>
        )}

        <LanguageSwitcher />
      </div>
    </section>
  );
}
