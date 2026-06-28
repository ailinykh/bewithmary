# Project rules

## Project context

This is a **Next.js 16 App Router** project for a Russian-language landing site
for psychologist / psychotherapist **Мария Ильиных**.

The site is not a generic marketing template. It represents a professional
psychology practice, so the UI should stay calm, trustworthy, accessible, and
content-first. Avoid flashy SaaS/agency patterns, excessive animation, generic
hero gimmicks, and decorative refactors that do not serve the client journey.

Use [`DESIGN.md`](./DESIGN.md) as the source of truth for brand tokens,
typography, spacing, breakpoints, section intent, copy, and legal constraints.
Do not change visual direction or copy without checking it.

## Goal

Keep this codebase feeling like a natural hand-maintained Next.js App Router site, not generated JSX cleaned up after the fact.

Prefer small, obvious changes. Do not refactor for aesthetics alone.

## Current architecture

- `app/page.tsx` is a composition file. Keep it small.
- `app/_sections/` contains section-level Server Components.
- `app/_content/home.ts` contains typed static page content.
- `app/_ui.tsx` contains shared class constants and tiny presentational primitives.
- `app/_components/mobile-nav.tsx` owns mobile menu interactivity.
- `app/_components/scroll-effects.tsx` owns viewport-driven behavior: sticky header, active nav, reveal animation, and back-to-top.
- `app/globals.css` contains Tailwind v4 `@theme`, base styles, and CSS for JS-driven chrome.

Do not collapse these back into a single `page.tsx` or a single client script.

## Next.js practices

- Read the relevant local Next.js docs in `node_modules/next/dist/docs/` before changing framework APIs.
- Keep components as Server Components by default.
- Add `"use client"` only for real browser APIs, state, effects, or event handlers.
- Use `next/image` for meaningful local content images.
- Raw `<img>` is acceptable only for tiny decorative icon assets when the exception is documented and accessible (`alt=""`, hidden from assistive tech if decorative).
- Keep static `metadata` in `app/layout.tsx` unless metadata becomes route-specific.

## Interactivity

- Do not reintroduce a broad DOM-script monolith.
- Mobile menu state belongs in `MobileNav`.
- `ScrollEffects` may use selectors because it manages viewport/page chrome. Keep its selector contract explicit.
- Do not rewrite `ScrollEffects` into React state unless there is a concrete behavior bug.
- If adding new interactive UI, prefer a small client island close to the feature.

## Tailwind and styling

- Tailwind v4 tokens live in `app/globals.css` under `@theme`.
- Use existing tokens like `tracking-snug`, `tracking-display`, and `tracking-heading` instead of repeating arbitrary tracking values.
- Avoid adding new arbitrary values unless they preserve a specific design requirement.
- Do not remove all `clamp(...)` values blindly; many encode the responsive rhythm.
- Do not move all Tailwind classes into CSS. Use CSS only for global state, pseudo-elements, theme tokens, and behavior that utilities cannot express cleanly.
- Keep exact values for SVG geometry, custom toggles, and small drawn markers when needed.

## Refactoring discipline

- Do not add a component for every paragraph, div, or list item.
- Extract only when it removes real duplication or gives a useful domain name.
- Do not split files further just to reduce line count.
- Do not introduce broad helper libraries or class composition frameworks for this small site.
- Preserve copy, layout, and behavior unless the task explicitly asks to change them.
- If changing visual classes, verify mobile and desktop layouts.

## Verification

Before finishing code changes, run:

```bash
npm run lint
npm run build
```
