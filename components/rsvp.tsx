'use client';

import { useTranslations } from 'next-intl';

export function RSVP() {
  const t = useTranslations('RSVP');

  return (
    <section id='rsvp' className='py-16 px-8 max-w-lg mx-auto text-center border rounded-xl my-16'>
      <h2 className='text-3xl font-bold mb-4'>{t('headerTitle')}</h2>
      <p className='mb-8'>{t('headerSubtitle')}</p>
      <form className='space-y-4 text-left'>
        <div>
          <label className='block font-semibold mb-1'>{t('form.name')}</label>
          <input type='text' className='w-full border p-2 rounded' />
        </div>
        <div>
          <label className='block font-semibold mb-1'>{t('form.presence')}</label>
          <select className='w-full border p-2 rounded'>
            <option>{t('form.yes')}</option>
            <option>{t('form.no')}</option>
          </select>
        </div>
        <button type='button' className='w-full bg-black text-white p-3 rounded font-bold'>
          {t('form.submit')}
        </button>
      </form>
    </section>
  );
}
