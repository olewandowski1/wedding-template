export const siteConfig = {
  NAME: 'Marzena & Wojciech',
  SLUG: 'marzena-wojciech-wedding',
  LOCALE: 'pl',
  FIXED_THEME: 'light' as 'light' | 'dark' | null,

  URL: 'https://wedding-elegant-template.vercel.app/',

  DESCRIPTION:
    'Bądźcie z nami, gdy powiemy sobie "Tak"! Serdecznie zapraszamy na ślub i wesele Marzeny i Wojciecha w malowniczym Gdańsku. Na tej stronie znajdziecie wszystkie szczegóły uroczystości, naszą wspólną historię oraz formularz potwierdzenia przybycia. Do zobaczenia!',
  SHORT_DESCRIPTION: 'Marzena & Wojciech - Strona Ślubna',

  NAV_ROUTES: [
    { name: 'Start', href: '#hero' },
    { name: 'Nasza Historia', href: '#story' },
    { name: 'Szczegóły', href: '#details' },
    { name: 'Harmonogram', href: '#timeline' },
    { name: 'Informacje', href: '#info' },
    { name: 'Galeria', href: '#gallery' },
    { name: 'RSVP', href: '#rsvp' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
