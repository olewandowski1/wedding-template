import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'white',
        borderRadius: '20%',
        border: '1px solid #18181b',
      }}
    >
      <svg width='24' height='24' viewBox='0 0 100 100' fill='none'>
        <path
          d='M50 30 C 50 20, 15 20, 15 45 C 15 70, 50 85, 50 85 C 50 85, 85 70, 85 45 C 85 20, 50 20, 50 30'
          fill='#18181b'
          stroke='#18181b'
          strokeWidth='6'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>,
    {
      ...size,
    },
  );
}
