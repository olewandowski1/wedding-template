'use client';

import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className='py-12 border-t text-center space-y-2'>
      <p className='font-bold text-xl'>{t('names')}</p>
      <p className='text-gray-500'>{t('location')}</p>
    </footer>
  );
}
