'use client';

import { Gift, Info, Shirt } from 'lucide-react';
import { motion } from 'motion/react';

const infoItems = [
  {
    icon: Shirt,
    title: 'Dress Code',
    description:
      'Będzie nam miło, jeśli tego dnia wybierzecie stroje eleganckie i formalne (Black Tie Optional).',
  },
  {
    icon: Gift,
    title: 'Prezenty',
    description:
      'Zamiast kwiatów, prosimy o wsparcie wybranej przez nas fundacji lub wino do naszej wspólnej piwniczki.',
  },
  {
    icon: Info,
    title: 'Dodatkowe Informacje',
    description:
      'Dla gości spoza Trójmiasta przygotowaliśmy listę polecanych hoteli w pobliżu Dworca Artusa.',
  },
];

export function InfoSection() {
  return (
    <section
      id='info'
      className='relative overflow-hidden bg-background pt-20 md:pt-32'
    >
      {/* Background Decor - matching Story and Details */}
      <div className='absolute left-0 top-0 h-full w-full opacity-[0.03] pointer-events-none'>
        <svg
          className='h-full w-full'
          viewBox='0 0 100 100'
          preserveAspectRatio='none'
        >
          <path
            d='M100 0 C 80 100 50 100 0 0'
            fill='none'
            stroke='currentColor'
            strokeWidth='0.1'
          />
        </svg>
      </div>

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
            Ważne Wskazówki
          </span>
          <h2 className='font-serif text-3xl font-light uppercase tracking-[0.2em] text-foreground md:text-7xl'>
            Dla Gości
          </h2>
          <div className='mt-8 flex justify-center'>
            <div className='h-[1px] w-24 bg-foreground/20' />
          </div>
        </motion.div>

        <div className='mx-auto grid max-w-6xl gap-12 md:grid-cols-3'>
          {infoItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className='group relative flex flex-col items-center bg-secondary/10 px-8 py-16 text-center transition-all duration-500 hover:bg-secondary/15 hover:shadow-2xl hover:shadow-foreground/[0.02]'
            >
              {/* Decorative Frame for each item */}
              <div className='absolute inset-4 border-[0.5px] border-foreground/10 transition-colors duration-500 group-hover:border-foreground/20' />

              <div className='relative mb-10'>
                <div className='flex h-16 w-16 items-center justify-center text-foreground/60 transition-all duration-700 group-hover:scale-110 group-hover:text-foreground'>
                  <item.icon size={32} strokeWidth={1} />
                </div>
                {/* Subtle underline for icon */}
                <div className='absolute -bottom-2 left-1/2 h-[1px] w-4 -translate-x-1/2 bg-foreground/20 transition-all duration-500 group-hover:w-12' />
              </div>

              <h3 className='relative mb-6 font-serif text-2xl uppercase tracking-widest text-foreground'>
                {item.title}
              </h3>

              <p className='relative font-serif text-lg leading-relaxed text-foreground/70 lg:text-xl'>
                {item.description}
              </p>

              {/* Bottom corner accents */}
              <div className='absolute bottom-4 right-4 h-4 w-4 border-b-[0.5px] border-r-[0.5px] border-foreground/20 transition-colors duration-500 group-hover:border-foreground/40' />
            </motion.div>
          ))}
        </div>

        {/* Closing decorative line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className='mt-20 h-[1px] w-full bg-gradient-to-r from-transparent via-foreground/5 to-transparent md:mt-32'
        />
      </div>
    </section>
  );
}
