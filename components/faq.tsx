'use client';

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
    <section id='faq'>
      <div>
        <span>{t('headerSubtitle')}</span>
        <h2>{t('headerTitle')}</h2>
      </div>

      <div>
        <Accordion type='single' collapsible>
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger>
                <span>{faq.q}</span>
              </AccordionTrigger>
              <AccordionContent>
                <p>{faq.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
