'use client';

import { useTranslations } from 'next-intl';

export function Timeline() {
  const t = useTranslations('Timeline');
  const items = ['ceremony', 'reception', 'dinner', 'party', 'cake', 'midnight'];

  return (
    <section id='timeline' className='py-16 px-8 max-w-4xl mx-auto'>
      <h2 className='text-3xl font-bold mb-8 text-center'>{t('headerTitle')}</h2>
      <div className='space-y-6'>
        {items.map((item) => (
          <div key={item} className='flex gap-8 border-b pb-4'>
            <span className='font-bold w-20'>{t(`items.${item}.time`)}</span>
            <div>
              <h3 className='font-semibold'>{t(`items.${item}.title`)}</h3>
              <p>{t(`items.${item}.description`)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
