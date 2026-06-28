import { Check, h2, section, wrap } from '../_ui';
import { principles } from '../_content/home';
import { HexaflexDiagram } from './hexaflex-diagram';

export function ApproachSection() {
  return (
    <section className={section} id="approach">
      <div className={wrap}>
        <h2 className={`${h2} mb-[clamp(40px,5vw,64px)] max-w-[68ch]`}>
          Мой подход
        </h2>

        <div className="grid max-w-[68ch] gap-6 [&_p]:text-[clamp(16px,1vw+0.4rem,18px)] [&_p]:leading-[1.6]">
          <p>
            В работе я использую когнитивно-поведенческую терапию (КПТ) и
            терапию принятия и ответственности (ACT) — это современные
            направления, эффективность которых подтверждена исследованиями
          </p>
          <p>
            Я не даю оценок, не стыжу и не заставляю Вас следовать чужим
            правилам. Я поддерживаю Вас на пути к той жизни, которой вы хотите
            жить. Вместе{' '}
            <strong className="font-semibold">
              мы развиваем навыки психологической гибкости
            </strong>{' '}
            и самоподдержки, которые помогают легче адаптироваться к трудностям
            и сохранять опору на свои ценности даже в непростые периоды жизни
          </p>
        </div>

        <HexaflexDiagram />

        <p className="mt-5 font-display text-base font-semibold tracking-snug text-fg">
          Моя работа строится на следующих принципах:
        </p>

        <ul className="mt-6 grid max-w-[68ch] list-none">
          {principles.map((t, i) => (
            <li
              key={i}
              className="grid grid-cols-[22px_1fr] items-baseline gap-3.5 border-t border-border py-6 text-[clamp(15px,0.9vw+0.4rem,17px)] leading-[1.55] text-fg last:border-b last:border-border"
            >
              <Check cls="mt-2" />
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <p className="mt-[clamp(48px,7vw,80px)] max-w-[68ch] font-serif text-[clamp(22px,1.8vw+0.4rem,30px)] leading-[1.35] tracking-snug text-fg italic">
          Я убеждена, что основа устойчивых изменений — бережное и уважительное
          отношение к себе, понимание своих потребностей, ценностей и внутренних
          процессов —{' '}
          <strong className="font-semibold">
            к этому мы и будем стремиться!
          </strong>
        </p>
      </div>
    </section>
  );
}
