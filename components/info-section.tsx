'use client';

import { useTranslations } from 'next-intl';

export function InfoSection() {
  const t = useTranslations('InfoSection');
  const items = ['dressCode', 'gifts', 'additionalInfo'];

  return (
    <section id='info' className='py-16 px-8 max-w-4xl mx-auto text-center'>
      <h2 className='text-3xl font-bold mb-8'>{t('headerTitle')}</h2>
      <div className='grid md:grid-cols-3 gap-8'>
        {items.map((item) => (
          <div key={item}>
            <h3 className='text-xl font-semibold mb-2'>{t(`${item}.title`)}</h3>
            <p>{t(`${item}.description`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
