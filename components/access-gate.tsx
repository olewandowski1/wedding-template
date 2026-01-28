'use client';

import { useRouter } from 'next/navigation';
import { useActionState, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CircleAlertIcon } from 'lucide-react';

type UnlockState = {
  status: 'idle' | 'error' | 'success';
  message?: {
    title: string;
    detail: string;
  };
};

type UnlockAction = (
  prevState: UnlockState,
  formData: FormData,
) => UnlockState | Promise<UnlockState>;

type AccessGateProps = {
  unlockAction: UnlockAction;
};

export function AccessGate({ unlockAction }: AccessGateProps) {
  const t = useTranslations('AccessGate');
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(unlockAction, {
    status: 'idle',
  });

  useEffect(() => {
    if (state.status === 'error') {
      setOpen(true);
    }
    if (state.status === 'success') {
      setOpen(false);
      router.refresh();
    }
  }, [state.status, router]);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant='outline'
          size='lg'
          className='bg-transparent text-white border-white hover:bg-white hover:text-black rounded-none px-8 py-4 text-xs tracking-widest uppercase transition-all duration-500 md:px-12 md:py-6 md:text-sm'
        >
          {t('trigger')}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className='bg-background/95 border-border/60 ring-1 ring-black/5 shadow-2xl p-6 sm:p-8 max-w-md gap-6'>
        <form action={formAction} className='grid gap-6'>
          <AlertDialogHeader className='gap-3'>
            <AlertDialogTitle className='flex flex-col items-start gap-2 text-left'>
              <p className='font-handwritten text-3xl sm:text-4xl text-foreground/90'>
                {t('title')}
              </p>
              <div className='h-px w-24 bg-foreground/20' />
            </AlertDialogTitle>
            <AlertDialogDescription className='text-sm text-foreground/70 text-left'>
              {t('description')}{' '}
              <span className='font-semibold'>{t('passwordInfo')}</span>
            </AlertDialogDescription>
          </AlertDialogHeader>

          <div className='grid gap-3'>
            <Label htmlFor='access-key' className='text-sm font-medium'>
              {t('passwordLabel')}
            </Label>
            <Input
              id='access-key'
              name='accessKey'
              type='password'
              autoComplete='current-password'
              required
            />
            {state.status === 'error' ? (
              <Alert variant='error'>
                <CircleAlertIcon />
                <AlertTitle>{state.message?.title}</AlertTitle>
                <AlertDescription>{state.message?.detail}</AlertDescription>
              </Alert>
            ) : null}
          </div>

          <AlertDialogFooter className='gap-3'>
            <AlertDialogCancel size='lg' disabled={isPending}>
              {t('cancel')}
            </AlertDialogCancel>
            <Button type='submit' size='lg' disabled={isPending}>
              {isPending ? t('checking') : t('unlock')}
            </Button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
