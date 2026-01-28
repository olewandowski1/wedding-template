'use client';

import { useTranslations } from 'next-intl';

export function Story() {
  const t = useTranslations('Story');

  return (
    <section id='story' className='py-16 px-8 max-w-4xl mx-auto'>
      <h2 className='text-3xl font-bold mb-8 text-center'>{t('headerTitle')}</h2>
      <div className='space-y-8'>
        <p className='italic mb-8 text-xl text-center'>&ldquo;{t('quote')}&rdquo;</p>
        <p>{t('historyParagraph1')}</p>
        <p>{t('historyParagraph2')}</p>
        <p>{t('futureParagraph1')}</p>
        <p>{t('futureParagraph2')}</p>
      </div>
    </section>
  );
}
