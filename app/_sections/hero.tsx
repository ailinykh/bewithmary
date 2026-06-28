import type { ReactNode } from 'react';
import Image from 'next/image';
import portrait from '@/public/assets/portrait-hero.jpg';
import { accentBtn, Arrow, wrap } from '../_ui';

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

function HeroFacts() {
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
          <span className="text-[13px] leading-[1.4] -tracking-snug text-fg">
            {fact.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative pt-[clamp(40px,7vw,88px)] pb-[clamp(60px,10vw,120px)]">
      <div
        className={`${wrap} grid items-end gap-[clamp(32px,5vw,64px)] desk:grid-cols-[1.15fr_0.85fr] desk:items-stretch`}
      >
        <div className="grid max-w-180 gap-7">
          <h1 className="font-display text-[clamp(36px,5.4vw+0.4rem,64px)] leading-none font-semibold tracking-[-0.028em] whitespace-nowrap text-fg">
            Мария Ильиных
          </h1>
          <p className="-mt-2.5 max-w-[60ch] text-[clamp(15px,1vw+0.3rem,17px)] leading-[1.55] text-muted">
            Магистр психологии, КПТ и ACT-терапевт, аддиктолог, специалист по
            коррекции пищевого поведения и избыточной массы тела, член
            Ассоциации когнитивно-поведенческой психотерапии
          </p>
          <p className="max-w-[60ch] text-[clamp(17px,1.2vw+0.4rem,21px)] leading-normal text-fg">
            Помогаю справиться с перееданием, расстройствами пищевого поведения,
            тревогой, депрессией и зависимостями с помощью доказательных методов
          </p>
          <p className="max-w-[56ch] border-t border-border pt-6 font-serif text-[clamp(20px,1.4vw+0.4rem,26px)] leading-[1.4] text-fg italic">
            Моя задача — помочь вам лучше понимать себя, преодолевать внутренние
            трудности и выстраивать жизнь в соответствии с тем, что для вас
            действительно важно
          </p>
          <HeroFacts />
          <div className="mt-1 flex flex-wrap items-center gap-3.5">
            <a
              href="#book"
              className={`group inline-flex items-center justify-center gap-3.5 border border-accent bg-accent px-6 py-3.5 font-display text-[15px] font-medium tracking-snug text-surface ${accentBtn}`}
            >
              Записаться на консультацию
              <Arrow />
            </a>
          </div>
        </div>
        <figure className="relative mx-auto aspect-4/5 w-full max-w-130 overflow-hidden bg-[oklch(94%_0.008_85)] after:pointer-events-none after:absolute after:inset-0 after:shadow-[inset_0_0_0_1px_oklch(0%_0_0/0.06)] after:content-[''] desk:aspect-auto desk:h-full desk:min-h-160 desk:max-w-none">
          <Image
            src={portrait}
            alt="Мария Ильиных"
            fill
            priority
            sizes="(min-width: 960px) 45vw, 100vw"
            className="object-cover"
          />
        </figure>
      </div>
    </section>
  );
}
