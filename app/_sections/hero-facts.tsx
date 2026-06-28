import type { ReactNode } from 'react';

const heroFacts: { icon: ReactNode; label: ReactNode }[] = [
  {
    icon: (
      <>
        <rect x="3.5" y="5.5" width="17" height="15" rx="1.5" />
        <path d="M3.5 10h17" />
        <path d="M8 3.5v4M16 3.5v4" />
        <circle cx="8" cy="14.5" r="0.7" fill="currentColor" stroke="none" />
        <circle cx="12" cy="14.5" r="0.7" fill="currentColor" stroke="none" />
        <circle cx="16" cy="14.5" r="0.7" fill="currentColor" stroke="none" />
      </>
    ),
    label: <>9 лет практики</>,
  },
  {
    icon: (
      <>
        <path d="M12 5.5c-1.2-1.4-3.7-1.4-4.7.4-1.5 0-2.5 1.4-2 2.9-1 .9-1 2.8 0 3.7-.1 1.4 1.1 2.8 2.5 2.8.3 1 1.4 1.7 2.5 1.7H12" />
        <path d="M12 5.5c1.2-1.4 3.7-1.4 4.7.4 1.5 0 2.5 1.4 2 2.9 1 .9 1 2.8 0 3.7.1 1.4-1.1 2.8-2.5 2.8-.3 1-1.4 1.7-2.5 1.7H12" />
        <path d="M12 5.5v15" />
        <path d="M9 11c.6.4 1.2.6 1.7.6M15 11c-.6.4-1.2.6-1.7.6" />
      </>
    ),
    label: <>КПТ и АСТ</>,
  },
  {
    icon: (
      <>
        <circle cx="9" cy="8.5" r="2.6" />
        <circle cx="16.5" cy="9.5" r="2.1" />
        <path d="M3.5 19c0-2.8 2.5-4.8 5.5-4.8s5.5 2 5.5 4.8" />
        <path d="M14 17.5c.2-1.8 1.6-3.1 3.3-3.1 1.6 0 2.9 1.2 3.2 2.8" />
      </>
    ),
    label: (
      <>
        Подростки 15+
        <br />и взрослые
      </>
    ),
  },
  {
    icon: (
      <>
        <path d="M12 21c-4-4.4-6.5-7.8-6.5-11C5.5 6.4 8.4 4 12 4s6.5 2.4 6.5 6c0 3.2-2.5 6.6-6.5 11z" />
        <circle cx="12" cy="9.5" r="2.3" />
      </>
    ),
    label: (
      <>
        Онлайн и очно
        <br />в Москве
      </>
    ),
  },
];

export function HeroFacts() {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-7 border-t border-border pt-7 fold:grid-cols-[repeat(4,auto)] fold:gap-x-9">
      {heroFacts.map((fact, i) => (
        <div key={i} className="flex flex-col items-center gap-3 text-center">
          <span
            className="grid h-7 w-7 flex-[0_0_28px] place-items-center text-fg"
            aria-hidden
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="block h-6.5 w-6.5"
            >
              {fact.icon}
            </svg>
          </span>
          <span className="text-xs leading-[1.4] -tracking-snug text-fg">
            {fact.label}
          </span>
        </div>
      ))}
    </div>
  );
}
