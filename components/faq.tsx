'use client';

import { useTranslations } from 'next-intl';

export function FAQ() {
  const t = useTranslations('FAQ');
  const items = ['accommodation', 'transport', 'children', 'parking'];

  return (
    <section id='faq' className='py-16 px-8 max-w-4xl mx-auto'>
      <h2 className='text-3xl font-bold mb-8 text-center'>{t('headerTitle')}</h2>
      <div className='space-y-4'>
        {items.map((item) => (
          <details key={item} className='border rounded-lg p-4'>
            <summary className='font-bold cursor-pointer'>{t(`items.${item}.question`)}</summary>
            <p className='mt-2'>{t(`items.${item}.answer`)}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
