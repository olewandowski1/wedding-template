# Wedding Template Components

This template provides a set of pre-built components for wedding websites.
All components are localized using `next-intl`.

## Core Components

### 1. `Hero`

- **Purpose**: First section of the site. Displays names, date, and main visual.
- **Features**: Supports a `locked` mode (used for the password gate).
- **Styling**: Large typography, fullscreen or hero-height.

### 2. `Story`

- **Purpose**: Narrative about the couple.
- **Structure**: Alternating image/text blocks or a single evocative section.

### 3. `Details`

- **Purpose**: Venue and Time information.
- **Features**: Split view for Ceremony and Reception. Includes Google Maps links.

### 4. `Timeline`

- **Purpose**: Event schedule.
- **Structure**: Vertical or horizontal list of events with times.

### 5. `InfoSection`

- **Purpose**: Practical info for guests (Dress Code, Gifts, Accommodations).
- **Structure**: Grid of cards or icon-labeled blocks.

### 6. `FAQ`

- **Purpose**: Addressing common guest questions.
- **Structure**: Accordion-based layout.

### 7. `Gallery`

- **Purpose**: Displaying photos of the couple or the venue.
- **Features**: Grid with masonry or carousel capabilities.

### 8. `RSVP`

- **Purpose**: Attendance confirmation.
- **Structure**: A form collecting names, food preferences, and presence.

### 9. `AccessGate`

- **Purpose**: Password protection UI.
- **Interactions**: Triggers a server action to set a secure cookie.

## Utility Components

- `Navigation`: Sticky header with anchor links and language switcher.
- `Footer`: Simple brand/names and location info.
- `ThemeProvider`: Handles light/dark mode.
- `LanguageSwitcher`: Switches between `en` and `pl`.
