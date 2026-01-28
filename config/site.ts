export const siteConfig = {
  // --- Site Metadata ---
  NAME: 'Couple Names',
  SLUG: 'couple-names-wedding',
  URL: 'https://your-wedding-site.vercel.app/',
  DESCRIPTION:
    'Welcome to our wedding website! Here you will find all the details about our celebration.',
  SHORT_DESCRIPTION: 'Couple Names - Wedding Website',

  // --- Visual Configuration ---
  FIXED_THEME: 'light' as 'light' | 'dark' | null, // null for system preference

  // --- Wedding Event Data ---
  wedding: {
    date: 'YYYY-MM-DD',
    location: 'City, Country',
    ceremonyTime: '00:00',
    receptionTime: '00:00',
  },

  // --- Navigation Configuration ---
  NAV_ROUTES: [
    { name: 'Start', href: '#hero' },
    { name: 'Story', href: '#story' },
    { name: 'Details', href: '#details' },
    { name: 'Schedule', href: '#timeline' },
    { name: 'Info', href: '#info' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'RSVP', href: '#rsvp' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
