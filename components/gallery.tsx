'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ExternalLink, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Gallery() {
  const t = useTranslations('Gallery');

  return (
    <section
      id='gallery'
      className='relative overflow-hidden bg-background pt-24 pb-24 md:pt-40 md:pb-40'
    >
      {/* Premium Background Ambiance */}
      <div className='absolute inset-0 z-0 pointer-events-none'>
        <div className='absolute -left-[10%] top-0 h-[600px] w-[600px] rounded-full bg-secondary/15 blur-[120px] opacity-60' />
        <div className='absolute -right-[10%] bottom-0 h-[600px] w-[600px] rounded-full bg-secondary/10 blur-[120px] opacity-40' />
      </div>

      <div className='container relative z-10 mx-auto px-4'>
        <div className='mx-auto max-w-5xl'>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className='mb-12 text-center md:mb-24'
          >
            <span className='mb-2 block font-handwritten text-3xl text-foreground/40 md:mb-3 md:text-5xl'>
              {t('headerSubtitle')}
            </span>
            <h2 className='font-serif text-3xl font-light uppercase tracking-[0.2em] text-foreground sm:text-4xl md:text-8xl md:tracking-[0.4em]'>
              {t('headerTitle')}
            </h2>
            <div className='mt-6 flex items-center justify-center gap-4 md:mt-10'>
              <div className='h-[1px] w-24 bg-foreground/20' />
            </div>
          </motion.div>

          <div className='grid gap-12 lg:grid-cols-12 lg:items-center'>
            {/* Visual Teaser Column */}
            <div className='lg:col-span-5 order-2 lg:order-1 px-4 md:px-0'>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className='relative scale-90 md:scale-100'
              >
                {/* Layered "Photo" Frames - Purely aesthetic to signal "Gallery" */}
                <div className='relative z-20 aspect-[4/5] w-full overflow-hidden border-[8px] border-white bg-background shadow-xl rotate-[-2deg]'>
                  <Image
                    src='/images/1.jpg'
                    alt='Gallery Preview'
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    className='object-cover grayscale opacity-80'
                  />
                </div>
                <div className='absolute -left-4 top-4 -z-10 aspect-[4/5] w-full border border-foreground/5 bg-secondary/5 rotate-[4deg] transition-transform duration-700' />
                <div className='absolute -right-2 -bottom-2 -z-20 aspect-[4/5] w-full border border-foreground/10 bg-background/50 rotate-[-8deg]' />
              </motion.div>
            </div>

            {/* Content Column */}
            <div className='lg:col-span-7 order-1 lg:order-2 lg:pl-12'>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className='relative flex flex-col items-center lg:items-start space-y-8 rounded-sm bg-background/40 p-6 backdrop-blur-sm md:space-y-10 lg:p-0 lg:bg-transparent'
              >
                <div className='flex h-12 w-12 items-center justify-center rounded-full border border-foreground/5 bg-background text-foreground/30 shadow-sm md:h-16 md:w-16'>
                  <ImageIcon className='size-6 md:size-8' strokeWidth={0.75} />
                </div>

                <div className='space-y-4 text-center lg:text-left md:space-y-6'>
                  <p className='font-serif text-xl leading-relaxed text-foreground/80 md:text-3xl italic'>
                    {t('description')}
                  </p>
                  <p className='font-serif text-sm leading-relaxed text-foreground/50 md:text-lg max-w-lg'>
                    {t('descriptionExtra')}
                  </p>
                </div>

                <Button
                  asChild
                  variant='outline'
                  size='lg'
                  className='group relative h-auto overflow-hidden border-foreground/20 bg-transparent px-8 py-4 font-serif text-[11px] uppercase tracking-[0.4em] text-foreground transition-all hover:border-foreground md:px-12 md:py-5 md:text-xs'
                >
                  <a
                    href='https://drive.google.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center justify-center gap-3 md:gap-4'
                  >
                    <span className='relative z-10'>{t('cta')}</span>
                    <ExternalLink
                      strokeWidth={1.5}
                      className='relative z-10 size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1'
                    />
                    <div className='absolute inset-0 -z-0 translate-y-full bg-foreground transition-transform duration-500 ease-out group-hover:translate-y-0' />
                    {/* Hover text color flip hack */}
                    <span className='absolute inset-0 z-20 flex items-center justify-center gap-3 px-8 py-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-background pointer-events-none md:gap-4 md:px-12 md:py-5'>
                      <span>{t('cta')}</span>
                      <ExternalLink className='size-4' />
                    </span>
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Side Brand Decor */}
      <div className='absolute left-10 top-1/2 -translate-y-1/2 -rotate-90 hidden xl:block'>
        <span className='text-[10px] uppercase tracking-[1.5em] text-foreground/5 whitespace-nowrap font-medium'>
          {t('sideLabel')}
        </span>
      </div>
    </section>
  );
}
