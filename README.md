# Wedding Foundation Starter

A production-ready foundation for building high-quality, private, and localized wedding websites.
This is **not** a theme you toggle at runtime; it is a **Project Skeleton** designed to be copied and customized for each specific wedding.

## Workflow

1. **Bootstrap**: Copy this repository to a new project folder.
2. **Configure**: Update `config/site.ts` with names, dates, and locations.
3. **Style**: Define your fonts and OKLCH color palette in `styles/globals.css` (see `docs/STYLE_GUIDE.md`).
4. **Build**: Use the integrated **Wedding Skills** to research and build the specific UI (Boho, Modern, etc.).

## Core Features

- **Next.js 15 (App Router)** & **Tailwind CSS v4**.
- **Privacy First**: Integrated `AccessGate` for password-protected private invitations.
- **Multilingual**: Pre-configured `next-intl` (English & Polish).
- **Smooth UX**: Native smooth scrolling and Framer Motion animations.
- **Ready-to-use Components**: High-quality base blocks for `Hero`, `Story`, `Timeline`, etc.
- **AI-Native**: Structured docs for AI agents to understand and build within the system.

## Quick start

### Prerequisites

- Node.js (LTS recommended)
- pnpm

### Install & run

```bash
pnpm install
pnpm dev
```

Then open `http://localhost:3000`.

## Event Page Setup

### 1) Personalize your Event Sections

The default entry page is `app/(main)/page.tsx`. Customize it with typical event sections:

- **Hero:** Big announcement (e.g., "Save the Date" or names).
- **Our Story:** Timeline or description of the hosts/celebrants.
- **Event Detail:** Date, time, and precise venue locations (Google Maps links).
- **RSVP:** A form or clear instructions for guests to confirm attendance.
- **Schedule:** Day-of-event timeline (Agendas).
- **Registry/Gifts:** Links to preferred stores or donation funds.
- **Photo Gallery:** Memories of the celebrants.

### 2) Configure Event Identity

Edit `config/site.ts` to set global event details:

- `NAME`: Event title (e.g., "Anna & John's Wedding").
- `DESCRIPTION`: A short welcome message or detail for SEO.
- `URL`: The domain where your event site will live.
- `SOCIALS`: Links to social profiles if applicable.

### 3) Visual Assets & OG Images

- Replace `public/og-image.svg` with a beautiful photo or branded graphic for social shares.
- Update `config/site.ts` `OG_IMAGE_URL` if necessary.
- Update `app/icon.tsx` with a custom event icon/logo.

### 4) Theming & Mood

Set `FIXED_THEME` in `config/site.ts` to `'light'` or `'dark'` to lock the vibe, or leave as `null` for system-aware themes.

---

## Project structure

- `app/` – Next.js routes/layouts
  - `app/(main)/page.tsx` – current entry page (renders the wedding sections)
  - `app/layout.tsx` – global layout, fonts, metadata, theme provider
- `components/` – app components and UI blocks
  - `components/ui/` – shared UI components (shadcn)
- `config/site.ts` – global event details and configuration
- `docs/` - documentation for the foundation and its components
  - `docs/STYLE_GUIDE.md` - how to theme the template (Elegant, Boho, Modern)
  - `docs/COMPONENTS.md` - directory of available wedding components
- `lib/` - utility functions and business logic (access control, etc.)
- `styles/globals.css` – Tailwind v4 entry + design tokens (OKLCH)
- `types/` - global TypeScript definitions
- `.agent/skills/` - AI agent skills for bootstrapping and building

## Agent Skills

This template is designed to be used with AI agent skills:

1. **shadcn-wedding-requirements**: Define the core details of the wedding.
2. **shadcn-wedding-component-research**: Map requirements to template components.
3. **shadcn-wedding-ui-builder**: Implement the visual style and content.

### Commands

```bash
pnpm dev      # run local dev server
pnpm build    # create production build
pnpm start    # run production server
pnpm lint     # run eslint
pnpm format   # prettier (ts/tsx/mdx)
```

### Adding UI components (shadcn)

This repo is already configured with `components.json`.

```bash
pnpm shadcn add button
```

### Deployment

Deploy as a standard Next.js app.

- Build command: `pnpm build`
- Start command: `pnpm start`

## Notes

- The example page includes an external image URL (Unsplash). Replace it for production usage if needed.
- No environment variables are required by default.
