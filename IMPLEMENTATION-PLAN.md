# Implementation Plan: Marzena & Wojciech Wedding Website

## 1. Global Architecture Notes

- **Semantic structure:**
  - `<header>`: Mobile-friendly navigation (scroll-to-section).
  - `<main>`: Contains all content sections in the journey order defined in requirements.
  - `<footer>`: Simple contact info and closing message.
- **Privacy Awareness:** No guest data or internal lists will be exposed. RSVP form will be a simple frontend-to-email or frontend-to-db submission without public feedback.
- **Theme/Vibe Alignment:**
  - Strictly **Light Theme**.
  - Focus on refined whitespace and gold accents (#D4AF37).
- **Motion Strategy:** Subtle Framer Motion usage (fade-ins, soft shifts). Calm over energetic.

## 2. Global Asset Overview

- **Total Images:** ~5-6 high-quality assets.
- **Image Types:**
  - 1 Hero Background (Decorative/Atmospheric).
  - 2 Couple Photos (Personal).
  - 2 Venue Images (Ceremony/Reception).
- **Aspect Ratios:** Hero (16:9 or full-bleed), Content (4:5 or 1:1 for elegance).
- **Priority:** Hero asset must be optimized (WebP) and prioritized for LCP.

---

## 3. Section-by-Section Plan

### Section: Hero Section

**Purpose:** Immediate emotional impact and clear event info.
**Chosen Source:** shadcn/ui + custom adaptation.
**Components / Blocks:**

- Custom Hero with `tracking-tighter` serif H1.
- `shadcn/ui button` for primary RSVP CTA.
  **Layout:** 100vh, center-aligned flex/grid.
  **Assets Required:** 1 high-res atmospheric image (Elegant interior or gold texture).
  **Motion:** Slow opacity fade-in on text elements.

### Section: Invitation & Our Story

**Purpose:** Welcome guests and provide personal context.
**Chosen Source:** shadcn/ui `card`.
**Components / Blocks:**

- `shadcn/ui card` (border-none, shadow-none) for clean text presentation.
- `separator` for elegant section breaks.
  **Layout:** Max-width container (approx 800px) with generous vertical padding.
  **Assets Required:** 1-2 personal photos of the couple.
  **Motion:** Slide-up transition on scroll.

### Section: Event Details (Ceremony & Reception)

**Purpose:** Precise locations and times.
**Chosen Source:** shadcn/ui `card` + `badge`.
**Components / Blocks:**

- `card` for each sub-event.
- `badge` (custom gold variant) for the time stamps (16:00, 18:00).
- `lucide-react` icons (Church, Wine) in gold.
  **Layout:** 2-column grid on desktop, stacked on mobile.
  **Assets Required:** 2 Venue photos (Bazylika Mariacka, Dwór Artusa).
  **Motion:** Staggered entrance for the cards.

### Section: Practical Information

**Purpose:** Guidelines for guests (Dress code, Gifts, Accommodation).
**Chosen Source:** shadcn/ui `accordion` (optional) or simple `grid`.
**Components / Blocks:**

- Simple 3-column `grid` with central alignment.
- Custom stylized list items for gift info.
  **Layout:** Icon-top layout with descriptive text below.
  **Assets Required:** None (Icon-driven).
  **Motion:** Static or very subtle hover effects on icons.

### Section: RSVP

**Purpose:** Collection of guest responses.
**Chosen Source:** shadcn/ui `form` + `input` + `select` + `textarea`.
**Components / Blocks:**

- `Form`, `FormField` for validation.
- `Input` (Name), `Select` (Dietary), `RadioGroup` (Transport).
  **Layout:** Centered single-column form with clear labels and a "Submit" button in Navy/Gold.
  **Assets Required:** None.
  **Motion:** Scale-up on the success state/confirmation.

---

## 4. Open Questions & Risks

1. **Assets:** Actual photos of the couple and venues are currently placeholders. I will use high-quality Unsplash placeholders for now.
2. **Copy:** Narrative text in "Our Story" is just a hook; might need expansion later.
3. **Accessibility:** Contrast between Gold (#D4AF37) and White (#FAFAFA) needs careful handling (use gold for non-text accents or darker gold variants for text).
4. **Data Handling:** No backend yet specified for RSVP submission. Will implement as a mock or simple form state for now.
