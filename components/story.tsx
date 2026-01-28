'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export function Story() {
  const t = useTranslations('Story');

  return (
    <section
      id='story'
      className='relative overflow-x-hidden bg-background pt-20 md:pt-32'
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
              {t('headerSubtitle')}
            </span>
            <h2 className='font-serif text-3xl font-light uppercase tracking-[0.2em] text-foreground md:text-7xl'>
              {t('headerTitle')}
            </h2>
            <div className='mt-8 flex justify-center'>
              <div className='h-[1px] w-24 bg-foreground/20' />
            </div>
          </motion.div>
        </div>

        {/* Main Content - Asymmetrical Layout */}
        <div className='grid gap-16 lg:grid-cols-12 lg:items-center lg:gap-24'>
          {/* Left Column - Image with Frame */}
          <div className='lg:col-span-6'>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className='group relative z-10 mx-auto max-w-2xl lg:max-w-none'
            >
              <div className='relative aspect-[4/3] overflow-hidden rounded-sm bg-secondary/10 md:aspect-[16/10]'>
                <motion.div
                  initial={{ scale: 1.2 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                  className='relative h-full w-full'
                >
                  <Image
                    src='/images/6.jpg'
                    alt={t('imageAlt1')}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    className='object-cover transition-transform duration-[2s] group-hover:scale-110'
                  />
                </motion.div>
                <div className='absolute inset-0 bg-black/5 transition-opacity group-hover:opacity-0' />
              </div>
              {/* Decorative Frame */}
              <div className='absolute -left-4 -top-4 -z-10 h-full w-full border-[0.5px] border-foreground/20 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2 md:-left-8 md:-top-8' />
            </motion.div>
          </div>

          {/* Right Column - Quote and Text */}
          <div className='lg:col-span-6'>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
              className='relative space-y-8 text-center lg:pl-12 lg:text-left xl:pl-20'
            >
              <div className='relative'>
                <p className='font-serif text-2xl italic leading-relaxed text-foreground/90 md:text-3xl lg:text-4xl'>
                  &ldquo;{t('quote')}&rdquo;
                </p>
                <div className='absolute -left-12 -top-6 hidden font-serif text-[120px] leading-none text-foreground/[0.03] lg:block xl:-left-16'>
                  &ldquo;
                </div>
              </div>

              <div className='space-y-6 font-serif text-base leading-relaxed text-foreground/70 md:text-lg'>
                <p>{t('historyParagraph1')}</p>
                <p>{t('historyParagraph2')}</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Second Row - Reversed */}
        <div className='mt-24 grid gap-16 lg:grid-cols-12 lg:items-center lg:gap-24 xl:mt-32'>
          <div className='order-2 lg:col-span-5 lg:order-1 xl:col-span-6'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
              className='space-y-8 text-center lg:pr-12 lg:text-left xl:pr-20'
            >
              <div className='space-y-4'>
                <h3 className='font-serif text-2xl font-light uppercase tracking-widest text-foreground md:text-3xl'>
                  {t('futureTitle')}
                </h3>
                <div className='mx-auto h-[1px] w-12 bg-foreground/30 lg:mx-0' />
              </div>
              <div className='space-y-6 font-serif text-base leading-relaxed text-foreground/70 md:text-lg'>
                <p>{t('futureParagraph1')}</p>
                <p>{t('futureParagraph2')}</p>
              </div>
            </motion.div>
          </div>

          <div className='order-1 lg:col-span-7 lg:order-2 xl:col-span-6'>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className='group relative z-10 mx-auto max-w-2xl lg:max-w-none'
            >
              <div className='relative z-10 aspect-[4/3] overflow-hidden rounded-sm bg-secondary/10 md:aspect-[16/10]'>
                <motion.div
                  initial={{ scale: 1.2 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                  className='relative h-full w-full'
                >
                  <Image
                    src='/images/1.jpg'
                    alt={t('imageAlt2')}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    className='object-cover transition-transform duration-[2s] group-hover:scale-110'
                  />
                </motion.div>
                <div className='absolute inset-0 bg-black/5 transition-opacity group-hover:opacity-0' />
              </div>
              {/* Decorative Frame */}
              <div className='absolute -bottom-4 -right-4 -z-10 h-full w-full border-[0.5px] border-foreground/20 transition-transform duration-700 group-hover:-translate-x-2 group-hover:-translate-y-2 md:-bottom-8 md:-right-8' />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Side Label Decor */}
      <div className='absolute right-0 top-1/2 -translate-y-1/2 rotate-90 translate-x-[calc(50%-2rem)] hidden lg:block'>
        <span className='text-[10px] font-sans uppercase tracking-[1em] text-foreground/10 whitespace-nowrap'>
          {t('sideLabel')}
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
