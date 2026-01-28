'use client';

import { useTranslations } from 'next-intl';
import { Clock } from 'lucide-react';

export function Timeline() {
  const t = useTranslations('Timeline');

  const items = [
    {
      time: t('items.ceremony.time'),
      title: t('items.ceremony.title'),
      description: t('items.ceremony.description'),
    },
    {
      time: t('items.reception.time'),
      title: t('items.reception.title'),
      description: t('items.reception.description'),
    },
    {
      time: t('items.dinner.time'),
      title: t('items.dinner.title'),
      description: t('items.dinner.description'),
    },
    {
      time: t('items.party.time'),
      title: t('items.party.title'),
      description: t('items.party.description'),
    },
    {
      time: t('items.cake.time'),
      title: t('items.cake.title'),
      description: t('items.cake.description'),
    },
    {
      time: t('items.midnight.time'),
      title: t('items.midnight.title'),
      description: t('items.midnight.description'),
    },
  ];

  return (
    <section id='timeline'>
      <span>{t('headerSubtitle')}</span>
      <h2>{t('headerTitle')}</h2>

      <ul>
        {items.map((item) => (
          <li key={item.title}>
            <Clock size={14} />
            <span>{item.time}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
