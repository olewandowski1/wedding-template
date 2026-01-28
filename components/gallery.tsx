'use client';

import { useTranslations } from 'next-intl';

export function Gallery() {
  const t = useTranslations('Gallery');

  return (
    <section id='gallery' className='py-16 px-8 max-w-4xl mx-auto text-center'>
      <h2 className='text-3xl font-bold mb-8'>{t('headerTitle')}</h2>
      <p>Gallery Placeholder</p>
    </section>
  );
}
