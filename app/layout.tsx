import { ThemeProvider } from '@/components/theme-provider';
import { siteConfig } from '@/config/site';
import { createMetadata } from '@/lib/metadata';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages, getTranslations } from 'next-intl/server';
import { Geist, Great_Vibes, Inter } from 'next/font/google';

const cormorant = Geist({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
});

const handwritten = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-handwritten',
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata');

  return createMetadata({
    title: t('title'),
    description: t('description'),
  });
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          'bg-background font-sans antialiased selection:bg-primary/30 selection:text-primary-foreground',
          inter.variable,
          cormorant.variable,
          handwritten.variable,
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme={
            siteConfig.FIXED_THEME ? siteConfig.FIXED_THEME : 'system'
          }
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
