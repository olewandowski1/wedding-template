'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslations } from 'next-intl';
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
} from '@/components/ui/field';

export function RSVP() {
  const t = useTranslations('RSVP');

  const formSchema = React.useMemo(
    () =>
      z.object({
        fullName: z.string().min(2, {
          message: t('form.fullNameError'),
        }),
        email: z.string().email({
          message: t('form.emailError'),
        }),
        plusOne: z.string().optional(),
        attendance: z.enum(['yes', 'no']),
        message: z.string().optional(),
      }),
    [t],
  );

  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      plusOne: '',
      attendance: 'yes',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsSubmitted(true);
  }

  return (
    <section
      id='rsvp'
      className='relative overflow-hidden bg-secondary/10 pt-20 md:pt-32'
    >
      {/* Background Decor */}
      <div className='absolute left-0 top-0 h-full w-full opacity-[0.03] pointer-events-none'>
        <svg
          className='h-full w-full'
          viewBox='0 0 100 100'
          preserveAspectRatio='none'
        >
          <path
            d='M0 0 C 20 100 80 100 100 0'
            fill='none'
            stroke='currentColor'
            strokeWidth='0.1'
          />
        </svg>
      </div>

      <div className='container relative mx-auto max-w-4xl px-4'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className='mb-12 text-center md:mb-20'
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
          <p className='mt-12 font-serif text-lg italic text-foreground/70 md:text-xl'>
            {t('deadline')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <Card className='overflow-hidden border-[0.5px] border-foreground/15 bg-background shadow-none rounded-none'>
            <CardContent className='p-8 md:p-16'>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className='space-y-10 py-12 text-center'
                >
                  <div className='flex justify-center'>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 200,
                        damping: 20,
                      }}
                      className='flex h-24 w-24 items-center justify-center border-[0.5px] border-foreground/20 text-foreground'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1}
                        stroke='currentColor'
                        className='h-12 w-12'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                    </motion.div>
                  </div>
                  <div className='space-y-4'>
                    <h3 className='font-serif text-4xl font-light tracking-widest text-foreground'>
                      {t('success.title')}
                    </h3>
                    <p className='font-serif text-xl italic text-foreground/70'>
                      {t('success.message1')}
                      <br />
                      {t('success.message2')}
                    </p>
                  </div>
                  <Button
                    variant='outline'
                    onClick={() => setIsSubmitted(false)}
                    className='rounded-none border-foreground/20 font-serif text-xs uppercase tracking-[0.3em] hover:bg-foreground hover:text-background transition-all duration-500'
                  >
                    {t('success.resetButton')}
                  </Button>
                </motion.div>
              ) : (
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className='space-y-12'
                >
                  <FieldGroup className='space-y-10'>
                    <div className='grid gap-10 md:grid-cols-2'>
                      <Controller
                        control={form.control}
                        name='fullName'
                        render={({ field, fieldState }) => (
                          <Field data-invalid={fieldState.invalid}>
                            <FieldLabel className='text-left text-[10px] uppercase tracking-[0.3em] text-foreground/40 font-bold'>
                              {t('form.fullNameLabel')}
                            </FieldLabel>
                            <Input
                              placeholder={t('form.fullNamePlaceholder')}
                              {...field}
                              className='text-left rounded-none border-0 border-b border-foreground/10 bg-transparent px-0 focus-visible:border-foreground focus-visible:ring-0 transition-colors h-12 text-lg font-serif shadow-none'
                            />
                            {fieldState.invalid && (
                              <FieldError errors={[fieldState.error]} />
                            )}
                          </Field>
                        )}
                      />

                      <Controller
                        control={form.control}
                        name='email'
                        render={({ field, fieldState }) => (
                          <Field data-invalid={fieldState.invalid}>
                            <FieldLabel className='text-left text-[10px] uppercase tracking-[0.3em] text-foreground/40 font-bold'>
                              {t('form.emailLabel')}
                            </FieldLabel>
                            <Input
                              type='email'
                              placeholder={t('form.emailPlaceholder')}
                              {...field}
                              className='text-left rounded-none border-0 border-b border-foreground/10 bg-transparent px-0 focus-visible:border-foreground focus-visible:ring-0 transition-colors h-12 text-lg font-serif shadow-none'
                            />
                            {fieldState.invalid && (
                              <FieldError errors={[fieldState.error]} />
                            )}
                          </Field>
                        )}
                      />
                    </div>

                    <div className='grid gap-10 md:grid-cols-2'>
                      <Controller
                        control={form.control}
                        name='attendance'
                        render={({ field, fieldState }) => (
                          <Field data-invalid={fieldState.invalid}>
                            <FieldLabel className='text-left text-[10px] uppercase tracking-[0.3em] text-foreground/40 font-bold'>
                              {t('form.attendanceLabel')}
                            </FieldLabel>
                            <div className='flex flex-col items-start space-y-4 pt-4'>
                              <button
                                type='button'
                                onClick={() => field.onChange('yes')}
                                className='group flex items-center space-x-4 text-left'
                              >
                                <div
                                  className={cn(
                                    'flex h-6 w-6 items-center justify-center border-[0.5px] transition-all duration-300',
                                    {
                                      'bg-foreground border-foreground text-background':
                                        field.value === 'yes',
                                      'border-foreground/20 bg-transparent':
                                        field.value !== 'yes',
                                    },
                                  )}
                                >
                                  {field.value === 'yes' && (
                                    <svg
                                      className='h-4 w-4'
                                      fill='none'
                                      viewBox='0 0 24 24'
                                      stroke='currentColor'
                                      strokeWidth='2'
                                    >
                                      <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M5 13l4 4L19 7'
                                      />
                                    </svg>
                                  )}
                                </div>
                                <span
                                  className={cn(
                                    'font-serif text-lg transition-colors',
                                    {
                                      'text-foreground': field.value === 'yes',
                                      'text-muted-foreground group-hover:text-foreground/60':
                                        field.value !== 'yes',
                                    },
                                  )}
                                >
                                  {t('form.attendanceYes')}
                                </span>
                              </button>

                              <button
                                type='button'
                                onClick={() => field.onChange('no')}
                                className='group flex items-center space-x-4 text-left'
                              >
                                <div
                                  className={cn(
                                    'flex h-6 w-6 items-center justify-center border-[0.5px] transition-all duration-300',
                                    {
                                      'bg-foreground border-foreground text-background':
                                        field.value === 'no',
                                      'border-foreground/20 bg-transparent':
                                        field.value !== 'no',
                                    },
                                  )}
                                >
                                  {field.value === 'no' && (
                                    <svg
                                      className='h-4 w-4'
                                      fill='none'
                                      viewBox='0 0 24 24'
                                      stroke='currentColor'
                                      strokeWidth='2'
                                    >
                                      <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M5 13l4 4L19 7'
                                      />
                                    </svg>
                                  )}
                                </div>
                                <span
                                  className={cn(
                                    'font-serif text-lg transition-colors',
                                    {
                                      'text-foreground': field.value === 'no',
                                      'text-muted-foreground group-hover:text-foreground/60':
                                        field.value !== 'no',
                                    },
                                  )}
                                >
                                  {t('form.attendanceNo')}
                                </span>
                              </button>
                            </div>
                            {fieldState.invalid && (
                              <FieldError errors={[fieldState.error]} />
                            )}
                          </Field>
                        )}
                      />

                      <Controller
                        control={form.control}
                        name='plusOne'
                        render={({ field, fieldState }) => (
                          <Field data-invalid={fieldState.invalid}>
                            <FieldLabel className='text-left text-[10px] uppercase tracking-[0.3em] text-foreground/40 font-bold'>
                              {t('form.plusOneLabel')}
                            </FieldLabel>
                            <Input
                              placeholder={t('form.plusOnePlaceholder')}
                              {...field}
                              className='h-12 text-left rounded-none border-0 border-b border-foreground/10 bg-transparent px-0 font-serif text-lg shadow-none transition-colors focus-visible:border-foreground focus-visible:ring-0 md:mt-11'
                            />
                            {fieldState.invalid && (
                              <FieldError errors={[fieldState.error]} />
                            )}
                          </Field>
                        )}
                      />
                    </div>

                    <Controller
                      control={form.control}
                      name='message'
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel className='text-left text-[10px] uppercase tracking-[0.3em] text-foreground/40 font-bold'>
                            {t('form.messageLabel')}
                          </FieldLabel>
                          <Textarea
                            placeholder={t('form.messagePlaceholder')}
                            className='text-left min-h-[100px] rounded-none border-0 border-b border-foreground/10 bg-transparent px-0 focus-visible:border-foreground focus-visible:ring-0 transition-colors text-lg font-serif resize-none shadow-none'
                            {...field}
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                  </FieldGroup>

                  <div className='flex justify-center pt-6'>
                    <Button
                      type='submit'
                      className='group relative overflow-hidden rounded-none border border-foreground bg-foreground px-8 py-6 text-[10px] font-bold uppercase tracking-[0.2em] text-background transition-all hover:bg-transparent hover:text-foreground md:px-12 md:py-8 md:text-xs'
                    >
                      {t('form.submitButton')}
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Closing Label Decor */}
        <div className='mt-20 text-center'>
          <p className='font-handwritten text-4xl text-foreground/20'>
            {t('footerText')}
          </p>
        </div>
      </div>
    </section>
  );
}
