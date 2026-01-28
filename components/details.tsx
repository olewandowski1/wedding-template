'use client';

import Image from 'next/image';
import { Church, Wine, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Details() {
  const t = useTranslations('Details');

  const events = [
    {
      title: t('ceremony.title'),
      time: '00:00',
      location: t('ceremony.location'),
      address: 'Nazwa Miejsca, Adres',
      description: t('ceremony.description'),
      image: '/images/4.jpg',
      icon: Church,
    },
    {
      title: t('reception.title'),
      time: '00:00',
      location: t('reception.location'),
      address: 'Nazwa Miejsca, Adres',
      description: t('reception.description'),
      image: '/images/5.jpg',
      icon: Wine,
    },
  ];

  return (
    <section id='details'>
      <span>{t('headerSubtitle')}</span>
      <h2>{t('headerTitle')}</h2>

      <ul>
        {events.map((event) => (
          <li key={event.title}>
            <Image
              src={event.image}
              alt={event.location}
              width={800}
              height={500}
            />
            <event.icon size={24} />
            <h3>{event.title}</h3>
            <span>{event.time}</span>
            <MapPin size={18} />
            <span>{event.location}</span>
            <p>{event.address}</p>
            <p>{event.description}</p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.address)}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              {t('getDirections')}
              <MapPin size={12} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
