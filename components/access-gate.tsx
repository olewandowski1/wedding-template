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
        <Button variant='outline'>{t('trigger')}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <form action={formAction} className='space-y-4'>
          <AlertDialogHeader>
            <AlertDialogTitle>{t('title')}</AlertDialogTitle>
            <AlertDialogDescription>
              {t('description')} {t('passwordInfo')}
            </AlertDialogDescription>
          </AlertDialogHeader>

          <div className='space-y-2'>
            <Label htmlFor='access-key'>{t('passwordLabel')}</Label>
            <Input
              id='access-key'
              name='accessKey'
              type='password'
              required
            />
            {state.status === 'error' && (
              <Alert variant='error'>
                <CircleAlertIcon className='h-4 w-4' />
                <AlertTitle>{state.message?.title}</AlertTitle>
                <AlertDescription>{state.message?.detail}</AlertDescription>
              </Alert>
            )}
          </div>

          <AlertDialogFooter>
            <AlertDialogCancel disabled={isPending}>{t('cancel')}</AlertDialogCancel>
            <Button type='submit' disabled={isPending}>
              {isPending ? t('checking') : t('unlock')}
            </Button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
