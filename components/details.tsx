'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { Church, Wine, MapPin, Clock } from 'lucide-react';

const events = [
  {
    title: 'Ceremonia Zaślubin',
    time: '16:00',
    location: 'Bazylika Mariacka',
    address: 'Podkramarska 5, 80-834 Gdańsk',
    description:
      'Najstarsza i najpiękniejsza świątynia w Gdańsku, gdzie złożymy naszą przysięgę.',
    image: '/images/4.jpg',
    icon: Church,
  },
  {
    title: 'Przyjęcie Weselne',
    time: '18:00',
    location: 'Dwór Artusa',
    address: 'Długi Targ 43-44, 80-831 Gdańsk',
    description:
      'Zapraszamy na wspólną celebrację pełną muzyki, tańca i radości.',
    image: '/images/5.jpg',
    icon: Wine,
  },
];

export function Details() {
  return (
    <section
      id='details'
      className='relative overflow-hidden bg-secondary/10 pt-20 md:pt-32'
    >
      {/* Delicate background accent */}
      <div className='absolute right-0 top-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/5 blur-3xl' />

      <div className='container mx-auto px-4'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className='mb-16 text-center md:mb-24'
        >
          <span className='mb-2 block font-handwritten text-3xl text-foreground/50 md:mb-4 md:text-4xl'>
            Miejsce i Czas
          </span>
          <h2 className='font-serif text-3xl font-light uppercase tracking-[0.2em] text-foreground md:text-7xl'>
            Uroczystość
          </h2>
          <div className='mt-8 flex justify-center'>
            <div className='h-[1px] w-24 bg-foreground/20' />
          </div>
        </motion.div>

        <div className='mx-auto grid max-w-6xl gap-24 lg:gap-32'>
          {events.map((event, index) => (
            <div
              key={event.title}
              className='grid gap-12 lg:grid-cols-12 lg:items-center'
            >
              {/* Image Column */}
              <div
                className={cn(
                  'lg:col-span-7',
                  index % 2 === 0 ? 'lg:order-1' : 'lg:order-2',
                )}
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className='group relative'
                >
                  <div className='relative aspect-[16/10] overflow-hidden rounded-sm bg-background'>
                    <motion.div
                      initial={{ scale: 1.2 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                      className='h-full w-full'
                    >
                      <Image
                        src={event.image}
                        alt={event.location}
                        fill
                        className='object-cover transition-transform duration-[2s] group-hover:scale-110'
                      />
                    </motion.div>
                    <div className='absolute inset-0 bg-black/5 transition-opacity group-hover:opacity-0' />
                  </div>
                  {/* Decorative Frame */}
                  <div
                    className={cn(
                      'absolute -z-10 h-full w-full border-[0.5px] border-foreground/20 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2',
                      index % 2 === 0 ? '-left-6 -top-6' : '-right-6 -bottom-6',
                    )}
                  />
                </motion.div>
              </div>

              {/* Content Column */}
              <div
                className={cn(
                  'lg:col-span-5',
                  index % 2 === 0
                    ? 'lg:order-2 lg:pl-12'
                    : 'lg:order-1 lg:pr-12',
                )}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 1 }}
                  className='space-y-8 text-center lg:text-left'
                >
                  <div className='space-y-4'>
                    <div className='flex items-center space-x-4 text-foreground/50'>
                      <event.icon size={24} strokeWidth={1} />
                      <div className='h-[1px] flex-1 bg-foreground/20 lg:block' />
                    </div>
                    <h3 className='font-serif text-3xl font-light uppercase tracking-widest text-foreground md:text-5xl'>
                      {event.title}
                    </h3>
                    <div className='flex items-center justify-center space-x-3 lg:justify-start'>
                      <div className='h-[1px] w-8 bg-foreground/30' />
                      <span className='font-serif text-3xl italic text-foreground/80 md:text-4xl'>
                        {event.time}
                      </span>
                    </div>
                  </div>

                  <div className='space-y-6'>
                    <div className='space-y-2'>
                      <div className='flex items-center justify-center space-x-2 text-foreground/90 lg:justify-start'>
                        <MapPin
                          size={18}
                          strokeWidth={1.5}
                          className='text-foreground/50'
                        />
                        <span className='font-serif text-2xl italic'>
                          {event.location}
                        </span>
                      </div>
                      <p className='text-[11px] uppercase tracking-[0.3em] text-foreground/60'>
                        {event.address}
                      </p>
                    </div>

                    <p className='font-serif text-lg leading-relaxed text-foreground/70 md:text-xl'>
                      {event.description}
                    </p>
                  </div>

                  <div className='flex justify-center pt-4 lg:justify-start'>
                    <motion.a
                      whileHover={{ x: 10 }}
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.address)}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='group flex items-center space-x-4 text-[10px] font-bold uppercase tracking-[0.4em] text-foreground transition-colors hover:text-foreground/60'
                    >
                      <span className='border-b border-foreground/20 pb-1'>
                        Dojazd na miejsce
                      </span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <MapPin size={12} />
                      </motion.div>
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decor - consistent with Story */}
      <div className='absolute bottom-0 left-0 h-full w-full opacity-[0.02] pointer-events-none rotate-180'>
        <svg
          className='h-full w-full'
          viewBox='0 0 100 100'
          preserveAspectRatio='none'
        >
          <path
            d='M0 100 C 20 0 50 0 100 100'
            fill='none'
            stroke='currentColor'
            strokeWidth='0.1'
          />
        </svg>
      </div>

      {/* Closing decorative line */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1.5 }}
        className='mt-32 h-[1px] w-full bg-gradient-to-r from-transparent via-foreground/5 to-transparent'
      />
    </section>
  );
}
