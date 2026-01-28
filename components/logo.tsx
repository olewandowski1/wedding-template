import { siteConfig } from '@/config/site';

export function Logo() {
  const names = siteConfig.NAME.split('&').map((s) => s.trim());
  const initial1 = names[0]?.[0] || 'M';
  const initial2 = names[1]?.[0] || 'W';

  return (
    <div>
      <span>{initial1}</span>
      <span>&</span>
      <span>{initial2}</span>
    </div>
  );
}
