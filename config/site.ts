export const siteConfig = {
  NAME: 'Panna Młoda & Pan Młody',
  SLUG: 'boiler-plate-wedding',
  FIXED_THEME: 'light' as 'light' | 'dark' | null,

  URL: 'https://wedding-template.vercel.app/',

  DESCRIPTION:
    'Bądźcie z nami, gdy powiemy sobie "Tak"! Zapraszamy na naszą stronę ślubną.',
  SHORT_DESCRIPTION: 'Strona Ślubna',
} as const;

export type SiteConfig = typeof siteConfig;
