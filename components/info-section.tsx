'use client';

import { Gift, Info, Shirt } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function InfoSection() {
  const t = useTranslations('InfoSection');

  const infoItems = [
    {
      icon: Shirt,
      title: t('dressCode.title'),
      description: t('dressCode.description'),
    },
    {
      icon: Gift,
      title: t('gifts.title'),
      description: t('gifts.description'),
    },
    {
      icon: Info,
      title: t('additionalInfo.title'),
      description: t('additionalInfo.description'),
    },
  ];

  return (
    <section id='info'>
      <span>{t('headerSubtitle')}</span>
      <h2>{t('headerTitle')}</h2>

      <ul>
        {infoItems.map((item) => (
          <li key={item.title}>
            <item.icon size={32} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
