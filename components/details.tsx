'use client';

import { useTranslations } from 'next-intl';

export function Details() {
  const t = useTranslations('Details');

  return (
    <section id='details' className='py-16 px-8 max-w-4xl mx-auto'>
      <h2 className='text-3xl font-bold mb-8 text-center'>{t('headerTitle')}</h2>
      <div className='grid md:grid-cols-2 gap-12'>
        <div>
          <h3 className='text-2xl font-semibold mb-4'>{t('ceremony.title')}</h3>
          <p className='font-bold'>{t('ceremony.location')}</p>
          <p>{t('ceremony.description')}</p>
        </div>
        <div>
          <h3 className='text-2xl font-semibold mb-4'>{t('reception.title')}</h3>
          <p className='font-bold'>{t('reception.location')}</p>
          <p>{t('reception.description')}</p>
        </div>
      </div>
    </section>
  );
}
