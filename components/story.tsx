'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export function Story() {
  const t = useTranslations('Story');

  return (
    <section id='story'>
      <div>
        <span>{t('headerSubtitle')}</span>
        <h2>{t('headerTitle')}</h2>
      </div>

      <div>
        <Image
          src='/images/6.jpg'
          alt={t('imageAlt1')}
          width={800}
          height={600}
        />
        <p>&ldquo;{t('quote')}&rdquo;</p>
        <p>{t('historyParagraph1')}</p>
        <p>{t('historyParagraph2')}</p>
      </div>

      <div>
        <h3>{t('futureTitle')}</h3>
        <p>{t('futureParagraph1')}</p>
        <p>{t('futureParagraph2')}</p>
        <Image
          src='/images/1.jpg'
          alt={t('imageAlt2')}
          width={800}
          height={600}
        />
      </div>
    </section>
  );
}
