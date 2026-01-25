---
name: shadcn-wedding-requirements
description: Transforms high-level wedding website ideas into a structured, emotionally intentional, privacy-first, performance-conscious requirements document for wedding pages.
---

# Shadcn Wedding Page Requirements Skill

This skill converts loosely defined **wedding website ideas** into a structured,
production-oriented **requirements document** optimized for emotional clarity,
privacy, accessibility, and guest experience.

Wedding websites are **not marketing assets**.  
They are **personal, time-bound invitations**.

This is a **planning-only skill**.

---

## Output Contract

- The output of this skill MUST be a file named: `REQUIREMENTS.md`
- `REQUIREMENTS.md` is the **single source of truth** for:
  - Visual and emotional identity
  - Content hierarchy and narrative flow
  - Multilanguage intent (Polish / English)
  - Privacy and access decisions
  - Performance and accessibility constraints

- **No further skills may proceed**
  until `REQUIREMENTS.md` is completed and approved.

- This skill MUST stop after producing `REQUIREMENTS.md`.

---

## When to Use This Skill

- The user requests a **wedding website**
- Event details, privacy expectations, or visual tone are unclear
- Alignment is required before copywriting, design, or implementation

---

## Assumed Tech Stack

- Next.js (App Router)
- TypeScript
- shadcn/ui
- Tailwind CSS
- Framer Motion

---

## REQUIREMENTS.md Structure

The `REQUIREMENTS.md` file MUST include the following sections:

---

### 1. Project Context

- Page type: Wedding event website
- Event type: Wedding (ceremony and optional reception)
- Event format: In-person (default unless stated otherwise)
- Wedding date(s)
- Location(s)
- Target audience:
  - Primary: Invited guests
  - Secondary: International guests
- Primary goal:
  - Communicate wedding details clearly
  - Collect RSVPs safely and reliably

---

### 2. Website Vibe & Visual Identity

The wedding page MUST follow **one clearly defined vibe variant**.  
This choice informs all emotional, visual, and tonal decisions.

#### Supported Vibe Variants

- **Classic & Elegant**  
  Timeless, formal, refined

- **Romantic & Soft**  
  Warm, intimate, emotional

- **Modern & Minimal**  
  Clean, contemporary, understated

- **Natural & Rustic**  
  Organic, relaxed, earthy

- **Playful & Personal**  
  Joyful, expressive, non-traditional

#### Required Decisions

- Primary vibe
- Optional secondary influence (subtle only)
- 3–5 descriptive adjectives
- First 5‑second emotional impression

---

### 3. Color System

- Primary color aligned with the selected vibe
- Secondary or accent colors used sparingly
- Neutral and background strategy
- Contrast considerations:
  - Outdoor viewing
  - Older guests
  - Accessibility readability

---

### 4. Typography

- Heading tone and personality
- Body text readability for longer informational content
- Emphasis rules for:
  - Names
  - Dates
  - Locations
  - Section separation

---

### 5. Theme Strategy

- Preferred theme: **Light**
- Theme switching: Disabled
- Justification:
  - Emotional clarity
  - Accessibility
  - Simplicity for a one-time event

---

### 6. Page Structure & Narrative Flow

The page should follow an **invitation-driven journey**:

1. Announcement
2. Core wedding details
3. Personal story or context
4. Practical information
5. RSVP action

Persistent elements (if access allows):

- Language switcher (PL / EN)
- Clear RSVP access

---

### 7. Hero Section

- First section on the page
- Full viewport height (100vh)
- Primary H1 includes:
  - Names of the couple
  - Wedding date (year included)
- Immediate clarity:
  - What the event is
  - When it takes place
  - Where it takes place
- Emotional focus over promotional language
- Avoid heavy or autoplay media

---

### 8. Content & Data

- **Static content:**
  - Couple story
  - Ceremony and reception details
  - Venue information
  - Dress code
  - Gifts or “no gifts” preferences
- **Dynamic content:**
  - RSVP responses
  - Guest-specific inputs (plus-one, dietary needs)
- **Forms:**
  - RSVP is mandatory
  - Friendly but strict validation
  - Clear confirmation after submission
- **Data sensitivity:** High

---

### 9. Multilanguage Strategy

- Supported languages:
  - Polish (PL)
  - English (EN)
- Full content parity required
- Tone:
  - Culturally appropriate
  - Meaning-equivalent
- Privacy and access rules apply equally to all languages

---

### 10. Privacy & Access Strategy

Privacy is a **first-class design decision**, not an implementation detail.

#### Supported Privacy Variants

- **Public (Link‑Only)**
  - Accessible via shared link
  - Not intended for public discovery
- **Private (Restricted Access)**
  - Intended only for invited guests
  - Access intent may include:
    - Password
    - Invitation-specific link
    - QR code distribution
- **Hybrid**
  - Public announcement
  - Restricted access to sensitive details

#### Assumptions

- Guest information is private
- RSVP data is confidential
- Privacy variant must be explicitly confirmed

---

### 11. Visibility & Indexing Strategy

Wedding websites are **invitational by nature**.

- Default assumption:
  - Not intended for search engine discovery
- Visibility intent must be explicitly confirmed:
  - Public
  - Private
  - Hybrid
- Indexing:
  - Disabled by default
  - Enabled only by explicit request

Content structure exists for:

- Human clarity
- Accessibility
- Logical reading order

Not for search engine optimization.

---

### 12. Performance & Constraints

- Performance is a first-class feature
- Avoid:
  - Autoplay video
  - Heavy hero media
- Priorities:
  - Fast loading on mobile networks
  - Stable layout with no content shift
- Visual elegance must not compromise reliability

---

### 13. Responsiveness & Accessibility

- Mobile-first design
- Large touch targets
- Simple navigation paths
- Keyboard navigation support
- WCAG 2.1 AA contrast baseline
- Text scaling without layout breakage
- Readability for older guests

---

### 14. Assumptions & Open Questions

- Final wedding date and venue confirmation
- Selected vibe variant
- Selected privacy variant
- RSVP deadline and rules
- Availability of photos or assets
- Gift or registry preferences

---

## Rules & Constraints

- Do NOT reference specific UI components
- Do NOT write code
- Do NOT assume implementation details
- Focus on intent, emotion, hierarchy, and constraints
- Resolve ambiguity at this stage

---

## Handoff Rule

- `REQUIREMENTS.md` is the **only valid input** for `shadcn-component-research`
- Any ambiguity must be resolved at this stage
- Later skills MUST NOT reinterpret intent
