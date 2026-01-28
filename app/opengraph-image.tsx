import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { siteConfig } from '@/config/site';
import { getTranslations } from 'next-intl/server';

export const alt = `${siteConfig.NAME} — ${siteConfig.SHORT_DESCRIPTION}`;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

function WeddingLogo() {
  return (
    <div
      style={{
        width: 120,
        height: 120,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        zIndex: 2,
      }}
    >
      <svg
        viewBox='0 0 100 100'
        xmlns='http://www.w3.org/2000/svg'
        style={{ width: '100%', height: '100%' }}
      >
        <path
          d='M50 30 C 50 20, 15 20, 15 45 C 15 70, 50 85, 50 85 C 50 85, 85 70, 85 45 C 85 20, 50 20, 50 30'
          fill='#18181b'
          stroke='#18181b'
          strokeWidth='2'
        />
        <path
          d='M50 35 C 50 28, 25 28, 25 45 C 25 65, 50 78, 50 78 C 50 78, 75 65, 75 45 C 75 28, 50 28, 50 35'
          fill='white'
          opacity='0.4'
        />
      </svg>
    </div>
  );
}

export default async function OpenGraphImage() {
  const t = await getTranslations('Metadata');
  let fontData: Buffer | ArrayBuffer;

  try {
    fontData = await readFile(
      join(process.cwd(), 'assets/PlayfairDisplay-Regular.ttf'),
    );
  } catch {
    fontData = new ArrayBuffer(0);
  }

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 80,
        position: 'relative',
        backgroundColor: '#f4f4f5',
        color: '#18181b',
      }}
    >
      {/* Background Gradient */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            'radial-gradient(circle at center, #ffffff 0%, #f4f4f5 100%)',
        }}
      />

      {/* Decorative Border */}
      <div
        style={{
          position: 'absolute',
          top: 40,
          left: 40,
          right: 40,
          bottom: 40,
          border: '1px solid rgba(24, 24, 27, 0.3)',
          display: 'flex',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 50,
          left: 50,
          right: 50,
          bottom: 50,
          border: '2px solid #18181b',
          display: 'flex',
        }}
      />

      {/* Corner Accents */}
      <div
        style={{
          position: 'absolute',
          top: 35,
          left: 35,
          width: 60,
          height: 60,
          borderTop: '4px solid #18181b',
          borderLeft: '4px solid #18181b',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 35,
          right: 35,
          width: 60,
          height: 60,
          borderTop: '4px solid #18181b',
          borderRight: '4px solid #18181b',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 35,
          left: 35,
          width: 60,
          height: 60,
          borderBottom: '4px solid #18181b',
          borderLeft: '4px solid #18181b',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 35,
          right: 35,
          width: 60,
          height: 60,
          borderBottom: '4px solid #18181b',
          borderRight: '4px solid #18181b',
        }}
      />

      <WeddingLogo />

      <div
        style={{
          fontSize: 32,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: 20,
          color: '#18181b',
          fontFamily: 'Playfair Display',
          zIndex: 2,
        }}
      >
        {t('invitation')}
      </div>

      <div
        style={{
          fontSize: 84,
          fontFamily: 'Playfair Display',
          marginBottom: 24,
          textAlign: 'center',
          lineHeight: 1.1,
          zIndex: 2,
          color: '#18181b',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {siteConfig.NAME}
      </div>

      <div
        style={{
          width: 100,
          height: 2,
          background: '#18181b',
          marginBottom: 30,
          zIndex: 2,
        }}
      />

      <div
        style={{
          fontSize: 22,
          maxWidth: 900,
          textAlign: 'center',
          lineHeight: 1.6,
          zIndex: 2,
          fontFamily: 'Playfair Display',
          fontStyle: 'italic',
          color: '#52525b',
        }}
      >
        {t('description')}
      </div>
    </div>,
    {
      ...size,
      fonts:
        fontData.byteLength > 0
          ? [
              {
                name: 'Playfair Display',
                data: fontData,
                style: 'normal',
                weight: 400,
              },
            ]
          : [],
    },
  );
}
