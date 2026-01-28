'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ExternalLink, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Gallery() {
  const t = useTranslations('Gallery');

  return (
    <section id='gallery'>
      <span>{t('headerSubtitle')}</span>
      <h2>{t('headerTitle')}</h2>

      <Image
        src='/images/1.jpg'
        alt='Gallery Preview'
        width={400}
        height={500}
      />

      <ImageIcon size={24} />
      <p>{t('description')}</p>
      <p>{t('descriptionExtra')}</p>

      <Button asChild>
        <a
          href='https://drive.google.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span>{t('cta')}</span>
          <ExternalLink size={16} />
        </a>
      </Button>
    </section>
  );
}
