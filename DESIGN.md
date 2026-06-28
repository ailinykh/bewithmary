# Design system — Мария Ильиных (psychotherapist landing)

Single-screen Russian landing page. The design was handed off as a
self-contained `design/index.html`; this file is the distilled source of
truth after that folder was removed. **Implemented in `app/`** — change tokens
in `app/globals.css` (`@theme`) and markup in `app/page.tsx`.

## Tonality

Warm, restrained, evidence-based. No promises of results, no triggering
phrasing. Editorial minimalism: whitespace, large sans display, one quiet
accent (used at most twice per screen — a thin kicker and the active CTA).

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

### Type scale (fluid `clamp()`)

- `h1` hero: `clamp(36px,5.4vw+0.4rem,64px)`, line-height 1, tracking −0.028em
- `h2` section: `clamp(32px,4.5vw,64px)`, line-height 1.04, tracking −0.022em
- `h3`: `clamp(20px,1.4vw+0.4rem,26px)`
- body: `clamp(15px,1vw+0.4rem,17px)`, line-height 1.6
- lead: `clamp(17px,1.2vw+0.4rem,21px)`
- Narrow text column: `max-width: 62–70ch`.

## Posture

- Radii: 0 on frames/buttons, full only on the play-button circle. No 16px
  card rounding in the shipped build (frames are square).
- Borders: 1px hairline. No shadows except the intro play button.
- Accent appears at most twice per screen.
- Grid: 12-col feel on desktop, single column on mobile.

## Spacing

- Between sections: `--gap-sec` = `clamp(80px,12vw,144px)` (`.section` padding-block).
- Page gutter: `clamp(20px,4vw,48px)`; max content width `1280px`.
- Within a block: 24–48px between groups.

## Responsive contract

Custom breakpoints (min-width) → Tailwind `@theme`:
`fold` 600 · `tab` 720 · `desk` 960 · `wide` 1280.

Validate with **no horizontal overflow** across:
360×800, 390×844, 430×932, 600×960, 820×1180, 1024×768, 1366×768,
1440×900, 1920×1080. Use fluid `clamp()` type/spacing, not fixed screens.

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

JS for the above lives in `app/site-scripts.tsx`; the rest is server-rendered.

## Assets

Assets in `public/assets/`: `portrait-hero.jpg`, `cabinet.jpg`, `intro.mp4`,
`intro-poster.jpg` — all referenced by `app/page.tsx`.

## Brand copy / legal (must stay verbatim)

- Phone: `+7 920 287 61 81`
- ИП Ильиных Мария Владимировна · ОГРНИП 320774600431123 · ИНН 575306963172
- Instagram/Meta extremist-org disclaimer must accompany the Instagram link
  and the intro video footnote.
- Prices: individual 6 000 ₽ online / 7 000 ₽ offline (м. Белорусская);
  5-session pack 25 000 ₽; 1-month support 25 000 ₽; "10 шагов" group — preorder.
