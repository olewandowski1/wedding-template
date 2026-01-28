# Wedding Template Style Guide

This template uses **Tailwind CSS v4** and **shadcn/ui** with **OKLCH** color tokens.
To change the style of the wedding website (e.g., from Elegant to Boho or Modern), follow this guide.

## 1. Typography

Fonts are defined in `app/layout.tsx`. To change them:

1. Import a new font from `next/font/google`.
2. Assign it to one of the CSS variables:
   - `--font-sans`: Primary UI font (Inter).
   - `--font-serif`: Heading/Elegant font (Cormorant Garamond).
   - `--font-handwritten`: Decorative font (Great Vibes).

```tsx
// app/layout.tsx
const serif = Playfair_Display({
  variable: '--font-serif',
  subsets: ['latin'],
});
```

## 2. Color Palette (OKLCH)

Colors are defined in `styles/globals.css`. We use semantic tokens.

| Token          | Description       | Elegant (Default) | Boho Example |
| -------------- | ----------------- | ----------------- | ------------ |
| `--primary`    | Main accent color | Deep Blue/Black   | Terracotta   |
| `--gold`       | Decorative accent | Classic Gold      | Sage Green   |
| `--background` | Main background   | White             | Warm Cream   |

To generate OKLCH values, use a tool like [oklch.com](https://oklch.com).

## 3. Component Variants

Most components use `motion` (Framer Motion) for entrance animations.

- **Elegant**: Slow, smooth fades, subtle Y-axis translations.
- **Modern**: Snappy transitions, larger scale changes.
- **Boho**: Soft blurs, organic easing.

## 4. Theme Locking

In `config/site.ts`, you can lock the theme:

```typescript
FIXED_THEME: 'light', // or 'dark', or null for system
```
