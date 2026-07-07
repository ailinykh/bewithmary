# Design system — Мария Ильиных (psychotherapist landing)

Single-page Russian landing site. This file is the design source of truth for
future changes, not a frozen export spec. **Implemented in `app/`**:

- `app/globals.css` owns Tailwind v4 `@theme` tokens and JS-driven global
  chrome styles.
- `app/_ui.tsx` owns shared class constants and tiny presentational primitives.
- `app/_sections/` owns section-level Server Components.
- `app/_content/home.ts` owns typed static home-page content.
- `app/_components/mobile-nav.tsx` owns mobile menu interactivity.
- `app/_components/scroll-effects.tsx` owns sticky header, active nav,
  reveal, and back-to-top behavior.

Do not collapse the site back into a single `page.tsx` or a broad client
script.

## Tonality

Warm, restrained, evidence-based. No promises of results, no triggering
phrasing. Editorial minimalism: whitespace, large sans display, one quiet
accent. The site should feel like a professional psychology practice, not a
SaaS landing page or agency template.

## Tokens (source of truth → `app/globals.css` `@theme`)

Colors in OKLch. Pixel split: neutrals 88–92%, accent ≤6%, no showy gradients.

| Token                   | Value                   | Use                                  |
| ----------------------- | ----------------------- | ------------------------------------ |
| `--color-bg`            | `oklch(97.5% 0.006 85)` | paper-cream page bg, near-white      |
| `--color-surface`       | `oklch(99.5% 0.003 85)` | cards / sheet surface                |
| `--color-fg`            | `oklch(20% 0.012 60)`   | warm graphite text (not black)       |
| `--color-muted`         | `oklch(46% 0.010 60)`   | captions, meta                       |
| `--color-border`        | `oklch(88% 0.008 80)`   | hairline 1px                         |
| `--color-border-strong` | `oklch(78% 0.010 70)`   | hover hairline                       |
| `--color-accent`        | `oklch(43% 0.045 310)`  | the single accent (muted violet)     |
| `--color-accent-soft`   | `oklch(94% 0.015 310)`  | accent-tinted fill (hexaflex center) |
| `--color-accent-hover`  | `oklch(36% 0.05 310)`   | accent button hover                  |

> Note: the original `brand-spec.md` specified a moss-green accent
> (`oklch(40% 0.055 145)`). The final exported design shipped the violet
> `310` hue above — that is what the code uses.

## Typography (self-hosted via `next/font` in `app/layout.tsx`)

- **Display** — Manrope (500/600/700), tracking −0.02em. Headings, buttons,
  nav, prices. `--font-display`.
- **Body** — Inter (400/500). Running text. `--font-body`.
- **Serif accent** — Cormorant Garamond italic (400/500). Pull-quote moments
  only (hero mission, section closers). `--font-serif`.
- **Mono** — system mono (`ui-monospace`, IBM Plex Mono…). Uppercase eyebrow
  labels / kickers, tracking 0.14em. `--font-mono`.

Cyrillic subsets are required (content is Russian).

### Type scale

Use the shared text patterns in `app/_ui.tsx` first:

- `h2` for section headings.
- `sectionTitle` for standard section-title spacing.
- `accordionSummary` for leaf accordion summaries.

For one-off text sizes, prefer Tailwind scale values when they fit. Use
`clamp(...)` only when it protects a specific responsive rhythm already present
in the design. Do not add arbitrary type values just to make a local element
look slightly different.

Current anchors:

- Hero H1: large Manrope display, line-height 1, tight tracking, single line on
  desktop.
- Section H2: Manrope semibold, line-height 1.04, `tracking-heading`.
- Body: Inter, line-height 1.6.
- Lead text: slightly larger than body, normal line-height.
- Pull quotes / reflective closers: Cormorant italic only.
- Narrow text column: `max-width: 62–70ch`.

Use existing tracking tokens: `tracking-snug`, `tracking-display`,
`tracking-heading`, `tracking-eyebrow`. Do not repeat arbitrary tracking values
unless preserving a specific existing hero treatment.

## Posture

- Radii: 0 on frames/buttons, full only on the play-button circle. No 16px
  card rounding in the shipped build (frames are square).
- Borders: 1px hairline. No shadows except the intro play button.
- Accent is used sparingly: primary CTA, active/hover states, small highlights.
- Grid: 12-col feel on desktop, single column on mobile.

## Spacing

- Standard section wrapper: use `section` from `app/_ui.tsx`.
- Standard page wrapper: use `wrap` from `app/_ui.tsx`; max content width
  `1280px`.
- Within a block: 24–48px between groups.

`clamp(...)` is allowed for the main page rhythm where existing shared helpers
already use it. Do not spread new local clamps through components unless fixed
Tailwind spacing breaks the layout across the validation widths.

## Responsive contract

Custom breakpoints (min-width) → Tailwind `@theme`:
`fold` 600 · `tab` 720 · `desk` 960 · `wide` 1280.

Validate with **no horizontal overflow** across:
360×800, 390×844, 430×932, 600×960, 820×1180, 1024×768, 1366×768,
1440×900, 1920×1080.

Use the custom breakpoints and existing shared helpers before adding local
responsive exceptions. Fluid values are acceptable when they remove breakpoint
noise; they are not the default answer for every size.

## Sections (order on the single page)

hero → approach (incl. ACT hexaflex diagram) → help ("я могу помочь, если") →
process (0–4 steps) → outcomes → about (video card + collapsible bio +
education accordion) → pricing (4 cards) → faq accordion → book (contacts,
messenger channels, cabinet photo, legal) → footer.

## Interactions

- Sticky header, hairline border appears on scroll.
- Mobile hamburger → X sheet menu.
- Active-nav highlight via IntersectionObserver.
- Native `<details>` accordions (about, education, faq) with +/− toggle.
- Intro video: custom poster + play, native controls after first click.
- Scroll-reveal fade-up (respects `prefers-reduced-motion`).
- Back-to-top FAB after 600px scroll.

Mobile menu state lives in `app/_components/mobile-nav.tsx`. Viewport/page
chrome lives in `app/_components/scroll-effects.tsx`, which has an explicit
selector contract. The rest should stay server-rendered unless it needs browser
APIs, state, effects, or event handlers.

## Assets

Assets in `public/assets/`: `portrait-hero.jpg`, `cabinet.jpg`, `intro.mp4`,
`intro-poster.jpg`. Meaningful local content images should use `next/image`.

## Brand copy / legal (must stay verbatim)

- Phone: `+7 920 287 61 81`
- ИП Ильиных Мария Владимировна · ОГРНИП 320774600431123 · ИНН 575306963172
- Instagram/Meta extremist-org disclaimer must accompany the Instagram link
  and the intro video footnote.
- Prices: individual 6 000 ₽ online / 7 000 ₽ offline (м. Белорусская);
  5-session pack 25 000 ₽; 1-month support 25 000 ₽; "10 шагов" group — preorder.
