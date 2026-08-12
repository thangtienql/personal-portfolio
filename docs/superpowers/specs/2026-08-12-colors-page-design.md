# Colors Page Design Spec

Date: 2026-08-12
Status: Approved

## Goal

A standalone `/colors` route that showcases every color used in this portfolio,
with a professional, polished layout. The page itself is a live demonstration of
the palette — it is styled using the very tokens it displays.

## Decisions (from brainstorming)

- **Layout**: standalone page with a slim top bar (logo + "Back to Home"), no
  sidebar or right nav. No navigation entry points yet — reached by direct URL.
- **Scope**: full set of 12 colors (design tokens + inline utilities), each with
  swatch, role name, CSS variable (if any), HEX code, usage count, copy button.
- **Grouping**: colors grouped by role, each group with its own header and grid.
- **Features**: copy HEX to clipboard with feedback. No RGB/HSL toggles.

## Color Data

| Group               | Hex       | Role               | Variable         | Usage |
|---------------------|-----------|--------------------|------------------|-------|
| Background & Surface| `#1f1f1f` | Primary Background | `--bg-primary`   | 1     |
|                     | `#252525` | Surface / Card     | `--surface`      | 12    |
|                     | `#191919` | Mobile Menu Surface| (inline)         | 1     |
| Text                | `#ffffff` | Primary Text       | `--text-primary` | 1     |
|                     | `#999999` | Secondary Text     | `--text-secondary`| 22   |
|                     | `#777777` | Muted Text         | `--text-muted`   | 6     |
|                     | `#555555` | Faint / Footer Text| (inline)         | 9     |
| Accent              | `#28e98c` | Accent             | `--accent`       | 1     |
|                     | `#1cc97a` | Accent Hover       | `--accent-hover` | 1     |
| Border              | `#565656` | Border             | `--border-color` | 5     |
|                     | `#333333` | Light Border       | `--border-light` | 14    |
| Utilities           | `#000000` | Pure Black         | (inline)         | 1     |

Usage = count of literal hex occurrences in `src/` (components + globals.css).

## Architecture

```
src/app/colors/page.tsx            # Server component, exports metadata, renders page
src/lib/colors.ts                  # ColorToken / ColorGroup types + COLOR_GROUPS data
src/components/colors/ColorCard.tsx  # Client component (clipboard copy)
```

Reuses existing conventions: Tailwind utility classes, CSS vars, SectionHeader
pattern, `ScrollAnimation`, `lucide-react` icons, Inter font, 20–30px radii,
dark theme `#1f1f1f`. No new dependencies. No changes to `layout.tsx`,
home `page.tsx`, sidebar, or nav.

## Page Layout

1. **Top bar**: logo (right) + pill button "← Back to Home" (`Link href="/"`,
   `ArrowLeft` icon, accent on hover). Not sticky.
2. **Hero**: subtitle pill "Design Tokens" → title "Color **System**" (accent
   span) → one-line description → summary badge ("12 colors · 5 groups").
3. **5 group sections**: small index number (`01`), group title, thin accent
   divider, then grid `grid-cols-2 sm:grid-cols-3 lg:grid-cols-4`.

## Color Card

- **Swatch**: `h-28 sm:h-36`, 20px radius, background = actual color (inline
  style), thin `#333` border so dark colors stay visible on the dark page;
  usage count pill in the top-right corner.
- **Info**: role name (white), CSS variable (mono, `text-[#999]`), then a row
  with HEX code (mono) and a copy button.
- **Copy**: click → `navigator.clipboard.writeText(hex)` → icon swaps
  `Copy` → `Check` with "Copied!" state for ~1.5s. Wrapped in try/catch;
  degrades gracefully outside secure contexts.
- **Hover**: swatch scales slightly (`1.02`), border shifts to accent; copy
  button hovers accent.

## Animation & Responsive

- `ScrollAnimation` (`fade_from_bottom`, staggered delays) for groups/cards.
- Grid 2 → 3 → 4 columns; mobile is full-width (no shell).
- Metadata: title "Color System", short description.

## Verification

- `npm run lint` and `npm run build` pass.
- Dev server: `/colors` shows 5 groups / 12 cards with correct colors, copy
  works (localhost = secure context), responsive, no CLS from animations.
