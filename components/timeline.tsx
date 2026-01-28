'use client';

import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

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
    <section
      id='timeline'
      className='relative overflow-hidden bg-secondary/5 pt-20 md:pt-32'
    >
      <div className='container mx-auto px-4 pb-20 md:pb-32'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className='mb-16 text-center md:mb-24'
        >
          <span className='mb-2 block font-handwritten text-3xl text-foreground/50 md:mb-4 md:text-4xl'>
            {t('headerSubtitle')}
          </span>
          <h2 className='font-serif text-3xl font-light uppercase tracking-[0.2em] text-foreground md:text-7xl'>
            {t('headerTitle')}
          </h2>
          <div className='mt-8 flex justify-center'>
            <div className='h-[1px] w-24 bg-foreground/20' />
          </div>
        </motion.div>

        {/* Timeline Desktop */}
        <div className='relative mx-auto max-w-4xl'>
          {/* Vertical Line */}
          <div className='absolute left-1/2 hidden h-full w-[0.5px] -translate-x-1/2 bg-foreground/10 md:block' />

          <div className='space-y-12 md:space-y-24'>
            {items.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={cn(
                  'relative flex flex-col items-center md:flex-row',
                  {
                    'md:flex-row-reverse': index % 2 === 0,
                  },
                )}
              >
                {/* Dot */}
                <div className='absolute left-1/2 top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 bg-foreground md:block' />

                {/* Time */}
                <div className='mb-2 w-full md:mb-0 md:w-1/2 md:px-12 md:text-right'>
                  <div
                    className={cn(
                      'flex items-center justify-center gap-2 text-foreground/40',
                      {
                        'md:justify-start': index % 2 === 0,
                        'md:justify-end': index % 2 !== 0,
                      },
                    )}
                  >
                    <Clock size={14} strokeWidth={1.5} />
                    <span className='font-serif text-lg tracking-widest'>
                      {item.time}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={cn('w-full text-center md:w-1/2 md:px-12', {
                    'md:text-right': index % 2 === 0,
                    'md:text-left': index % 2 !== 0,
                  })}
                >
                  <h3 className='mb-2 font-serif text-xl uppercase tracking-widest text-foreground md:text-2xl'>
                    {item.title}
                  </h3>
                  <p className='font-serif text-base leading-relaxed text-foreground/60 md:text-lg'>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
