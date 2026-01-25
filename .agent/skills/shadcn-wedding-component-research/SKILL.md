---
name: shadcn-wedding-component-research
description: Maps approved wedding website requirements to shadcn/ui components and external block registries, producing a concrete, privacy-aware, performance-safe implementation plan.
---

# Shadcn Wedding Page Component Research Skill

This skill translates an approved **`REQUIREMENTS.md`** document for a **wedding
website** into a concrete, implementation-ready **implementation plan**.

Wedding websites are **personal, invitational, and privacy-first**.  
This skill respects those constraints and does **not** optimize for marketing or SEO.

This is a **planning-only skill**.

---

## Invocation Rule (MANDATORY)

- This skill MUST be invoked only after **`shadcn-wedding-requirements`**
- The **only input** to this skill MUST be: `REQUIREMENTS.md`
- No assumptions, reinterpretations, or new requirements may be introduced
- Any ambiguity found in `REQUIREMENTS.md` MUST be surfaced, not guessed

---

## Output Contract (MANDATORY)

- The output of this skill MUST be a file named: `IMPLEMENTATION-PLAN.md`
- `IMPLEMENTATION-PLAN.md` is the **single source of truth** for:
  - Section structure and composition
  - Component and block selection
  - Asset requirements (images, icons, media)
  - Motion and interaction intent
  - Privacy and access considerations

- This skill MUST stop after producing `IMPLEMENTATION-PLAN.md`
- No UI implementation may begin until this file exists

---

## When to Use This Skill

- `REQUIREMENTS.md` has been completed and approved
- Proven, calm, content-first UI patterns are preferred
- Privacy, accessibility, and performance must be preserved

---

## Assumed Tech Stack

- Next.js (App Router)
- TypeScript
- shadcn/ui
- Tailwind CSS
- Motion

---

## Component Sources

The researcher MAY use:

- shadcn/ui components
- External UI / layout block registries (e.g. Tailark)

External blocks may be installed and adapted as needed, provided they:

- Respect performance constraints
- Do not assume public or marketing usage
- Can be adapted to a wedding context

---

## Hero Section Rule (MANDATORY)

The Hero section MUST:

- Be the first visible section
- Occupy full viewport height (100vh)
- Contain the primary H1 defined in `REQUIREMENTS.md`
- Clearly communicate:
  - Who is getting married
  - When the wedding takes place
  - Where it takes place
- Avoid heavy background media
- Render immediately without blocking content

---

## Performance Considerations (MANDATORY)

- Prefer lightweight, content-first blocks
- Avoid autoplay video or heavy background imagery
- Avoid excessive DOM depth
- Above-the-fold content must render immediately
- Images must not block initial rendering
- Visual elegance must not compromise reliability

---

## Theme & Vibe Alignment

- All selected blocks must align with:
  - The selected **vibe variant**
  - The defined **theme strategy**
- Blocks must not rely on:
  - Automatic theme switching
  - System theme detection
- Any block assumptions that conflict with requirements MUST be flagged

---

## Privacy & Access Awareness

- Selected components must respect the chosen **privacy variant**
- Avoid patterns that imply public sharing or discoverability
- RSVP and guest-related components must be treated as **sensitive**
- Any component that may expose guest data MUST be flagged as a risk

---

## IMPLEMENTATION-PLAN.md Structure

The `IMPLEMENTATION-PLAN.md` file MUST include the following sections:

---

### 1. Global Architecture Notes

- Semantic HTML structure (`header`, `main`, `section`, `footer`)
- Privacy and access considerations
- Theme and vibe alignment
- Motion usage strategy (restraint encouraged)

---

### 2. Global Asset Overview

- Total number of images
- Image types:
  - Photography
  - Illustration
  - Decorative
- Aspect ratio guidance
- Priority assets (above-the-fold)
- Notes on asset sensitivity (e.g. personal photos)

---

### 3. Section-by-Section Plan

For EACH section defined in `REQUIREMENTS.md`, include:

---

#### Section: `<Section Name>`

**Purpose**

- What this section communicates to wedding guests

**Chosen Source**

- shadcn/ui
- External registry (name)

**Components / Blocks**

- Component or block names
- Installation or adaptation notes (if applicable)

**Layout & Composition**

- Grid or flex strategy
- Content alignment and spacing
- Responsive behavior (mobile-first)

**Assets Required**

- Number of images
- Image type (photo / illustration / decorative)
- Placement (e.g. “centered portrait”, “background accent”)
- Content guidance (e.g. “soft couple photography”, “venue exterior”)

**Motion & Interaction**

- Motion usage
- Scope and restraint of animations
- Interaction intent (subtle, calm, optional)

**Accessibility Notes**

- Heading structure for readability
- Text contrast and size considerations
- Interaction accessibility (keyboard, touch)

---

### 4. Open Questions & Risks

- Missing or unconfirmed assets
- Unclear copy or content ownership
- Privacy or access risks
- Performance concerns
- Accessibility concerns

---

## Rules & Constraints

- Do NOT write production UI code
- Do NOT reference internal file paths
- Do NOT assume implementation details
- Do NOT introduce new requirements
- All recommendations must respect:
  - Privacy-first intent
  - Performance constraints
  - Accessibility expectations

---

## Handoff Rule

- `IMPLEMENTATION-PLAN.md` is the **only valid input** for the next implementation skill
- Builders MUST follow the plan exactly
- Any deviation MUST be explicitly justified and approved
