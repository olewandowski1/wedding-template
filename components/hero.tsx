'use client';

import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from './language-switcher';

type HeroProps = {
  locked?: boolean;
  cta?: ReactNode;
};

export function Hero({ locked = false, cta }: HeroProps) {
  const t = useTranslations('Hero');

  return (
    <section
      id='hero'
      className='relative flex min-h-screen items-center justify-center overflow-hidden bg-background'
    >
      {/* Background Image - Styled as a framed artwork for premium feel */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: 'easeOut' }}
        className='absolute overflow-hidden inset-0 w-full h-full'
      >
        <div className='absolute inset-0 z-10 bg-black/20' />{' '}
        {/* Dark overlay for contrast */}
        <Image
          src='/images/9.jpg'
          alt='Wedding Background'
          fill
          sizes='100vw'
          className='object-cover object-center transition-transform duration-[10s] hover:scale-110'
          priority
        />
        {/* White delicate frame around the internal image */}
        <div className='absolute inset-3 sm:inset-6 md:inset-10 border-[0.5px] border-white/30 z-20 pointer-events-none' />
      </motion.div>

      <div className='container relative z-20 mx-auto px-4 sm:px-8 md:px-12 flex flex-col justify-center h-full w-full'>
        <div className='max-w-6xl mx-auto text-center'>
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.5, ease: 'easeOut' }}
            className='flex flex-col items-center'
          >
            {!locked ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className='mb-4 sm:mb-8'
              >
                <p className='font-serif text-sm sm:text-lg md:text-xl tracking-[0.4em] sm:tracking-[0.5em] text-white uppercase'>
                  {t('invitation')}
                </p>
              </motion.div>
            ) : null}

            <h1 className='select-none font-handwritten relative'>
              <span className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-[0.8] text-white block drop-shadow-md'>
                {t('names')}
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className='mt-8 sm:mt-12 flex flex-col items-center gap-4'
            >
              <div className='h-px w-16 sm:w-24 bg-white/60' />
              <p className='font-serif text-xl sm:text-3xl md:text-5xl tracking-[0.2em] text-white italic'>
                {t('date')}
              </p>
              <div className='h-px w-16 sm:w-24 bg-white/60' />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className='mt-16 flex flex-col items-center gap-4 xl:gap-8'
            >
              {cta ? (
                cta
              ) : (
                <Button
                  variant='outline'
                  size='lg'
                  className='bg-transparent text-white border-white hover:bg-white hover:text-black rounded-none px-8 py-4 text-xs tracking-widest uppercase transition-all duration-500 md:px-12 md:py-6 md:text-sm'
                  onClick={() =>
                    document
                      .getElementById('rsvp')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  {t('rsvp')}
                </Button>
              )}

              <div className='justify-center hidden lg:flex'>
                <LanguageSwitcher scrolled={false} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Pulsing scroll indicator */}
      {!locked ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className='absolute bottom-12 left-1/2 -translate-x-1/2'
        >
          <div className='flex flex-col items-center gap-4'>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className='w-px h-12 bg-linear-to-b from-white via-white/50 to-transparent'
            />
          </div>
        </motion.div>
      ) : null}
    </section>
  );
}
