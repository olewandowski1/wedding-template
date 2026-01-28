'use client';

import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useTranslations } from 'next-intl';
import {
  Field,
  FieldLabel,
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
    <section id='rsvp'>
      <div>
        <span>{t('headerSubtitle')}</span>
        <h2>{t('headerTitle')}</h2>
        <p>{t('deadline')}</p>

        {isSubmitted ? (
          <div>
            <h3>{t('success.title')}</h3>
            <p>
              {t('success.message1')}
              <br />
              {t('success.message2')}
            </p>
            <Button onClick={() => setIsSubmitted(false)}>
              {t('success.resetButton')}
            </Button>
          </div>
        ) : (
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <Controller
                control={form.control}
                name='fullName'
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>{t('form.fullNameLabel')}</FieldLabel>
                    <Input
                      placeholder={t('form.fullNamePlaceholder')}
                      {...field}
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
                    <FieldLabel>{t('form.emailLabel')}</FieldLabel>
                    <Input
                      type='email'
                      placeholder={t('form.emailPlaceholder')}
                      {...field}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                control={form.control}
                name='attendance'
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>{t('form.attendanceLabel')}</FieldLabel>
                    <div>
                      <button
                        type='button'
                        onClick={() => field.onChange('yes')}
                      >
                        {t('form.attendanceYes')}
                      </button>
                      <button
                        type='button'
                        onClick={() => field.onChange('no')}
                      >
                        {t('form.attendanceNo')}
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
                    <FieldLabel>{t('form.plusOneLabel')}</FieldLabel>
                    <Input
                      placeholder={t('form.plusOnePlaceholder')}
                      {...field}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                control={form.control}
                name='message'
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>{t('form.messageLabel')}</FieldLabel>
                    <Textarea
                      placeholder={t('form.messagePlaceholder')}
                      {...field}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>

            <Button type='submit'>{t('form.submitButton')}</Button>
          </form>
        )}

        <p>{t('footerText')}</p>
      </div>
    </section>
  );
}
