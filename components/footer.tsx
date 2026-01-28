'use client';

import { siteConfig } from '@/config/site';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('Footer');

  const names = siteConfig.NAME.split('&').map((s) => s.trim());
  const initial1 = names[0]?.[0] || 'M';
  const initial2 = names[1]?.[0] || 'W';

  return (
    <footer>
      <div>
        <div>
          <span>
            {initial1}&{initial2}
          </span>
          <h2>{t('names')}</h2>
        </div>

        <div>
          <p>{t('location')}</p>
        </div>
      </div>
    </footer>
  );
}
