'use client';

import { useTranslations } from 'next-intl';

export function Navigation() {
  const t = useTranslations('Navigation');

  return (
    <nav className='sticky top-0 z-50 bg-white/80 backdrop-blur border-b py-4 px-8 flex justify-between items-center'>
      <div className='font-bold text-xl'>Wedding</div>
      <div className='flex gap-6 text-sm font-medium'>
        <a href='#story'>{t('story')}</a>
        <a href='#details'>{t('details')}</a>
        <a href='#timeline'>{t('timeline')}</a>
        <a href='#rsvp'>{t('rsvp')}</a>
      </div>
    </nav>
  );
}
