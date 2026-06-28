import Image from 'next/image';
import portrait from '@/public/assets/portrait-hero.jpg';
import { accentBtn, Arrow, wrap } from '../_ui';
import { HeroFacts } from './hero-facts';

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
              className={`group inline-flex items-center justify-center gap-3.5 border border-accent bg-accent px-6 py-3.5 font-display text-sm font-medium tracking-snug text-surface ${accentBtn}`}
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
