'use client';

import type { ReactNode } from 'react';
import { useTranslations } from 'next-intl';

type HeroProps = {
  locked?: boolean;
  cta?: ReactNode;
};

export function Hero({ locked = false, cta }: HeroProps) {
  const t = useTranslations('Hero');

  return (
    <section id='hero' className='min-h-screen flex flex-col items-center justify-center p-8 text-center'>
      <h1 className='text-4xl font-bold mb-4'>{t('names')}</h1>
      <p className='text-xl mb-8'>{t('date')}</p>
      {cta}
    </section>
  );
}
