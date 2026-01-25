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
        background: 'transparent',
      }}
    >
      <svg width='32' height='32' viewBox='0 0 100 100' fill='none'>
        <path d='M50 50C50 35 35 25 25 35C15 45 25 60 50 50Z' fill='#166534' />
        <path d='M50 50C65 50 75 35 65 25C55 15 40 25 50 50Z' fill='#166534' />
        <path d='M50 50C50 65 65 75 75 65C85 55 75 40 50 50Z' fill='#166534' />
        <path d='M50 50C35 50 25 65 35 75C45 85 60 75 50 50Z' fill='#15803d' />
        <path
          d='M50 55C50 55 50 85 40 95'
          stroke='#166534'
          strokeWidth='6'
          strokeLinecap='round'
        />
      </svg>
    </div>,
    {
      ...size,
    },
  );
}
