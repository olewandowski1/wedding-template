'use client';

import { siteConfig } from '@/config/site';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className='relative overflow-hidden bg-background pt-32 md:pt-48'>
      {/* Subtle Background Decor */}
      <div className='absolute bottom-0 left-1/2 h-[500px] w-full -translate-x-1/2 opacity-[0.02] pointer-events-none'>
        <svg
          viewBox='0 0 1000 1000'
          xmlns='http://www.w3.org/2000/svg'
          className='h-full w-full'
        >
          <path
            d='M0,1000 C300,800 400,900 700,700 C900,500 1000,600 1000,0 L1000,1000 Z'
            fill='currentColor'
          />
        </svg>
      </div>

      <div className='container relative mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className='flex flex-col items-center text-center'
        >
          {/* Logo / Signature */}
          <div className='mb-16'>
            <span className='mb-[-0.6em] block font-handwritten text-7xl text-foreground/15 md:text-8xl'>
              M&W
            </span>
            <h2 className='font-serif text-3xl font-light uppercase tracking-[0.4em] text-foreground md:text-4xl'>
              Marzena <span className='text-foreground/50 italic'>&</span>{' '}
              Wojciech
            </h2>
          </div>

          {/* Date & Location */}
          <div className='mb-8 space-y-4'>
            <div className='flex items-center justify-center space-x-6'>
              <div className='h-[1px] w-12 bg-foreground/20' />
              <p className='text-[10px] font-bold uppercase tracking-[0.5em] text-foreground/60'>
                Gdańsk, Polska
              </p>
              <div className='h-[0.5px] w-12 bg-foreground/20' />
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
