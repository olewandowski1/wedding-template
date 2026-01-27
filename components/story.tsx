'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export function Story() {
  return (
    <section
      id='story'
      className='relative overflow-hidden bg-background pt-20 md:pt-32'
    >
      {/* Background Decor - Subtle texture or shapes if needed, but keeping it clean for premium feel */}
      <div className='absolute left-0 top-0 h-full w-full opacity-[0.03] pointer-events-none'>
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

      <div className='container mx-auto px-4'>
        {/* Section Header */}
        <div className='relative mb-16 text-center md:mb-24'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className='mb-2 block font-handwritten text-3xl text-foreground/50 md:mb-4 md:text-4xl'>
              Nasza Wspólna Droga
            </span>
            <h2 className='font-serif text-3xl font-light uppercase tracking-[0.2em] text-foreground md:text-7xl'>
              Nasza Historia
            </h2>
            <div className='mt-8 flex justify-center'>
              <div className='h-[1px] w-24 bg-foreground/20' />
            </div>
          </motion.div>
        </div>

        {/* Main Content - Asymmetrical Layout */}
        <div className='grid gap-24 lg:grid-cols-12 lg:items-center'>
          {/* Left Column - Image with Frame */}
          <div className='lg:col-span-6'>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className='group relative mx-auto'
            >
              <div className='relative aspect-[16/10] overflow-hidden rounded-sm bg-secondary/10'>
                <motion.div
                  initial={{ scale: 1.2 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                  className='h-full w-full'
                >
                  <Image
                    src='/images/6.jpg'
                    alt='Marzena & Wojciech nad Motławą'
                    fill
                    className='object-cover transition-transform duration-[2s] group-hover:scale-110'
                  />
                </motion.div>
                <div className='absolute inset-0 bg-black/5 transition-opacity group-hover:opacity-0' />
              </div>
            </motion.div>
          </div>

          {/* Right Column - Quote and Text */}
          <div className='lg:col-span-6'>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
              className='relative space-y-10 text-center lg:text-left'
            >
              <div className='relative'>
                <p className='font-serif text-3xl italic leading-relaxed text-foreground/90 md:text-4xl'>
                  "Od pierwszego spotkania nad brzegiem Motławy, po wspólną
                  drogę pełną pasji i marzeń..."
                </p>
                <div className='absolute -left-8 top-0 hidden font-serif text-8xl text-foreground/5 lg:block'>
                  &ldquo;
                </div>
              </div>

              <div className='space-y-6 font-serif text-lg leading-relaxed text-foreground/70'>
                <p>
                  Wszystko zaczęło się od przypadkowego spotkania, które z
                  czasem przerodziło się w najpiękniejszą przygodę naszego
                  życia. Gdańsk, z jego historycznym urokiem i morską bryzą,
                  stał się tłem dla naszych najważniejszych chwil.
                </p>
                <p>
                  Dziś, bogatsi o setki wspólnych zachodów słońca i tysiące
                  przegadanych godzin, stajemy u progu nowej drogi.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Second Row - Reversed */}
        <div className='mt-16 md:mt-24 grid gap-24 lg:grid-cols-12 lg:items-center'>
          <div className='order-2 lg:col-span-6 lg:order-1'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
              className='space-y-8 text-center lg:text-left'
            >
              <h3 className='font-serif text-3xl font-light uppercase tracking-widest text-foreground'>
                Wspólna Przyszłość
              </h3>
              <div className='mx-auto h-[1px] w-12 bg-foreground/30 lg:mx-0' />
              <div className='space-y-6 font-serif text-lg leading-relaxed text-foreground/70'>
                <p>
                  Zapraszamy Was do wspólnego świętowania dnia, w którym
                  wypowiemy sakramentalne "TAK". To dla nas ogromny zaszczyt, że
                  możemy dzielić tę radość właśnie z Wami — naszą rodziną i
                  przyjaciółmi.
                </p>
                <p>
                  To tutaj, w sercu pięknego Gdańska, chcemy rozpocząć kolejny
                  rozdział naszej historii.
                </p>
              </div>
            </motion.div>
          </div>

          <div className='order-1 lg:col-span-6 lg:order-2'>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className='group relative'
            >
              <div className='relative mx-auto aspect-[16/10] overflow-hidden rounded-sm bg-secondary/10'>
                <motion.div
                  initial={{ scale: 1.2 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                  className='h-full w-full'
                >
                  <Image
                    src='/images/1.jpg'
                    alt='Wspólne chwile'
                    fill
                    className='object-cover transition-transform duration-[2s] group-hover:scale-110'
                  />
                </motion.div>
                <div className='absolute inset-0 bg-black/5 transition-opacity group-hover:opacity-0' />
              </div>
              {/* Decorative Frame */}
              <div className='absolute -right-6 -bottom-6 -z-10 h-full w-full border-[0.5px] border-foreground/10 transition-transform duration-700 group-hover:translate-x-[-8px] group-hover:translate-y-[-8px]' />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Side Label Decor */}
      <div className='absolute right-0 top-1/2 -translate-y-1/2 rotate-90 translate-x-[calc(50%-2rem)] hidden lg:block'>
        <span className='text-[10px] font-sans uppercase tracking-[1em] text-foreground/10 whitespace-nowrap'>
          Gdańsk • 20 Czerwca 2028
        </span>
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
