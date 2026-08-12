# Palette Refresh Design Spec (Premium Amber)

Date: 2026-08-12
Status: Approved

## Goal

Change the site-wide accent color from mint green to a premium amber/gold,
keeping the dark theme and all neutral colors unchanged. Direction chosen:
**A — Premium Amber** (user delegated final hex choice).

## New colors

| Token            | Old       | New       |
|------------------|-----------|-----------|
| `--accent`       | `#28e98c` | `#F5A524` |
| `--accent-hover` | `#1cc97a` | `#D97706` |
| Particle RGB     | `40,233,140` | `245,165,36` |

Contrast: `text-accent` on `#1f1f1f` ≈ 8.1:1 (AA/AAA ✓); black on
`bg-accent` ≈ 10:1 ✓. Hover darkens (matches existing convention).

## Scope

Only accent-colored surfaces change. All other usage flows through
`var(--accent)` / Tailwind `accent` theme mapping (`@theme inline` in
`globals.css`) and updates automatically.

Files edited:
1. `src/app/globals.css` — the two accent tokens.
2. `src/components/three/ParticleSphere.tsx` — hardcoded particle RGB (lines 53, 73).
3. `src/lib/colors.ts` — `/colors` page data hexes + refreshed usage counts.

Untouched: neutrals, layout, sections, images. Logo is white (verified via
ffmpeg sample) and round-text.png is an unused orphan asset.

## Verification

- `npm run lint` (0 errors), `npm run build` passes.
- Dev check `/colors`: amber accent, amber particles, amber buttons/hover/
  selection; contrast readable. Tune tone if `#F5A524` reads too "taxi yellow".
