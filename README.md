# bewithmary

Landing page for **Мария Ильиных** — psychotherapist (CBT & ACT). Single
adaptive screen in Russian: hero, approach (with an ACT hexaflex diagram),
what-she-helps-with, process, outcomes, about (video card + collapsible
bio/education), pricing, FAQ, and contacts.

Built with Next.js 16 (App Router) and Tailwind CSS v4.

## Stack
- **Next.js 16** App Router, React 19, TypeScript
- **Tailwind CSS v4** — design tokens live in `@theme` in `app/globals.css`
- **next/font** — self-hosted Manrope / Inter / Cormorant Garamond (Cyrillic)

## Getting started
```bash
npm install
npm run dev      # http://localhost:3000
```
Other scripts: `npm run build`, `npm start`, `npm run lint`.

## Structure
```
app/
  page.tsx         # the whole landing page (server component)
  site-scripts.tsx # "use client" — sticky header, mobile menu, accordions,
                   #   intro video, scroll-reveal, back-to-top
  globals.css      # Tailwind import + @theme tokens + JS-state chrome CSS
  layout.tsx       # fonts + metadata (lang="ru")
  icon.svg         # favicon (brand monogram)
public/assets/     # portrait, cabinet photo, intro video/poster
public/assets/icons/  # messenger brand logos (Telegram, MAX, Instagram, VK)
DESIGN.md          # design system: tokens, type scale, breakpoints, copy
```

## Design system
Tokens, typography, spacing, the responsive breakpoint matrix, and the
verbatim brand/legal copy are documented in [`DESIGN.md`](./DESIGN.md). Change
visual tokens in the `@theme` block of `app/globals.css`.

## Known TODOs
- The "informed consent" link points at `#consent-doc`, which has no target yet.
