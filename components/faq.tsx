'use client';

import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQ() {
  const t = useTranslations('FAQ');

  const faqs = [
    {
      id: 'accommodation',
      q: t('questions.accommodation.q'),
      a: t('questions.accommodation.a'),
    },
    {
      id: 'transport',
      q: t('questions.transport.q'),
      a: t('questions.transport.a'),
    },
    {
      id: 'children',
      q: t('questions.children.q'),
      a: t('questions.children.a'),
    },
    {
      id: 'parking',
      q: t('questions.parking.q'),
      a: t('questions.parking.a'),
    },
  ];

  return (
    <section
      id='faq'
      className='relative overflow-hidden bg-background pt-20 pb-20 md:pt-32 md:pb-32'
    >
      {/* Delicate background accents */}
      <div className='absolute right-0 top-0 -z-10 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/5 blur-3xl lg:h-96 lg:w-96' />
      <div className='absolute bottom-0 left-0 -z-10 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-foreground/5 blur-3xl lg:h-96 lg:w-96' />

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
            {t('headerSubtitle')}
          </span>
          <h2 className='font-serif text-3xl font-light uppercase tracking-[0.2em] text-foreground md:text-7xl'>
            {t('headerTitle')}
          </h2>
          <div className='mt-8 flex justify-center'>
            <div className='h-[1px] w-24 bg-foreground/20' />
          </div>
        </motion.div>

        <div className='mx-auto max-w-3xl'>
          <Accordion type='single' collapsible className='w-full'>
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className='border-b border-foreground/10 last:border-0'
              >
                <AccordionItem value={faq.id} className='border-none px-0'>
                  <AccordionTrigger className='hover:after:bg-transparent [&[data-state=open]>span]:text-foreground rounded-none border-none py-6 text-left hover:no-underline md:py-8'>
                    <span className='font-serif text-lg uppercase tracking-widest text-foreground/60 transition-colors duration-300 md:text-2xl'>
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className='pb-8 md:pb-12'>
                    <div className='max-w-2xl'>
                      <p className='font-serif text-base leading-relaxed text-foreground/70 md:text-lg lg:text-xl'>
                        {faq.a}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
