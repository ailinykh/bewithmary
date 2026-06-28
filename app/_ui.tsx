// Shared class constants + presentational primitives reused across sections.

export const wrap = 'mx-auto w-full max-w-[1280px] px-[clamp(20px,4vw,48px)]';
export const section =
  'relative border-t border-border py-[clamp(80px,12vw,144px)]';
export const h2 =
  'font-display font-semibold text-fg text-[clamp(32px,4.5vw,64px)] leading-[1.04] tracking-[-0.022em]';
export const sectionTitle = `${h2} mb-[clamp(40px,5vw,64px)] max-w-[22ch]`;
export const accentBtn =
  'transition-[background,border-color,transform] duration-200 hover:bg-accent-hover hover:border-accent-hover hover:-translate-y-px active:translate-y-0';

// Summary row for a leaf <details> accordion (Education groups, FAQ items).
export const accordionSummary =
  'grid w-full cursor-pointer list-none grid-cols-[1fr_24px] items-center gap-6 py-6 text-left font-display text-[clamp(17px,1.1vw+0.4rem,20px)] font-medium tracking-[-0.01em] text-fg transition-colors duration-150 outline-none hover:text-accent focus-visible:text-accent [&::-webkit-details-marker]:hidden';

export const Arrow = ({ cls = 'h-4 w-4' }: { cls?: string }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className={`${cls} transition-transform duration-300 ease-[cubic-bezier(.22,.6,.36,1)] group-hover:translate-x-1.25`}
  >
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

// Diagonal tick marker, drawn from two borders.
export const Check = ({ cls = '' }: { cls?: string }) => (
  <span
    aria-hidden
    className={`block h-1.5 w-2.75 -rotate-45 border-b-[1.5px] border-l-[1.5px] border-fg ${cls}`}
  />
);

// + / − toggle for <details> accordions. `group` selects which parent group an
// open state reacts to: "sec" for section-level <details> that wrap nested
// accordions, "acc" for the leaf ones — so an open outer doesn't flip its inner
// toggles. Both class variants are spelled out literally for Tailwind to detect.
export const Toggle = ({
  big = false,
  group = 'acc',
}: {
  big?: boolean;
  group?: 'acc' | 'sec';
}) => (
  <span
    aria-hidden
    className={[
      'relative inline-block shrink-0',
      big ? 'h-8 w-8' : 'h-5.5 w-5.5',
      "before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-fg before:transition-transform before:content-['']",
      "after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-fg after:transition-[transform,opacity] after:content-['']",
      big
        ? 'before:h-[1.5px] before:w-5 after:h-5 after:w-[1.5px]'
        : 'before:h-[1.5px] before:w-3.5 after:h-3.5 after:w-[1.5px]',
      group === 'sec'
        ? 'group-open/sec:after:rotate-90 group-open/sec:after:opacity-0'
        : 'group-open/acc:after:rotate-90 group-open/acc:after:opacity-0',
    ].join(' ')}
  />
);
