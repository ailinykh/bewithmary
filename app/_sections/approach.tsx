import { Check, h2, section, wrap } from "../_ui";
import { principles } from "../_content/home";

const hexLabel = "fill-fg font-display text-[12px] font-medium tracking-snug";

function HexaflexDiagram() {
  return (
    <figure
      className="mx-auto mt-0.5 mb-[clamp(60px,8vw,90px)] w-full max-w-135"
      aria-label="Гексафлекс — модель психологической гибкости в ACT"
    >
      <svg
        viewBox="0 0 620 540"
        className="block h-auto w-full overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g
          stroke="var(--color-accent)"
          strokeWidth="1"
          fill="none"
          opacity="0.4"
        >
          <path d="M 310 170 L 422.6 365 L 197.4 365 Z" />
          <path d="M 422.6 235 L 310 430 L 197.4 235 Z" />
        </g>
        <polygon
          points="310,170 422.6,235 422.6,365 310,430 197.4,365 197.4,235"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="1.5"
        />
        <g fill="var(--color-accent)">
          <circle cx="310" cy="170" r="3" />
          <circle cx="422.6" cy="235" r="3" />
          <circle cx="422.6" cy="365" r="3" />
          <circle cx="310" cy="430" r="3" />
          <circle cx="197.4" cy="365" r="3" />
          <circle cx="197.4" cy="235" r="3" />
        </g>
        <circle
          cx="310"
          cy="300"
          r="64"
          fill="var(--color-accent-soft)"
          stroke="var(--color-accent)"
          strokeWidth="1"
        />
        <text
          x="310"
          y="296"
          textAnchor="middle"
          className="text-3.5 fill-fg font-display font-semibold tracking-snug"
        >
          <tspan x="310" dy="0">
            психологическая
          </tspan>
          <tspan x="310" dy="18">
            гибкость
          </tspan>
        </text>
        <text x="310" y="152" textAnchor="middle" className={hexLabel}>
          Присутствие в моменте
        </text>
        <text x="440" y="231" className={hexLabel}>
          <tspan x="440">Выбор ценностей</tspan>
          <tspan x="440" dy="14">
            (смыслов)
          </tspan>
        </text>
        <text x="440" y="362" className={hexLabel}>
          <tspan x="440">Мотивированное</tspan>
          <tspan x="440" dy="14">
            поведение
          </tspan>
        </text>
        <text x="310" y="455" textAnchor="middle" className={hexLabel}>
          <tspan x="310">Селф-как-контекст</tspan>
          <tspan x="310" dy="14">
            (наблюдающее Я)
          </tspan>
        </text>
        <text x="180" y="362" textAnchor="end" className={hexLabel}>
          <tspan x="180">Когнитивное</tspan>
          <tspan x="180" dy="14">
            распутывание
          </tspan>
        </text>
        <text x="180" y="239" textAnchor="end" className={hexLabel}>
          Принятие
        </text>
      </svg>
      <figcaption className="text-2.75 mt-5 text-center font-mono tracking-eyebrow text-muted uppercase">
        гексафлекс · модель ACT
      </figcaption>
    </figure>
  );
}

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
            жить. Вместе{" "}
            <strong className="font-semibold">
              мы развиваем навыки психологической гибкости
            </strong>{" "}
            и самоподдержки, которые помогают легче адаптироваться к трудностям
            и сохранять опору на свои ценности даже в непростые периоды жизни
          </p>
        </div>

        <HexaflexDiagram />

        <p className="mt-5 font-display text-[17px] font-semibold tracking-snug text-fg">
          Моя работа строится на следующих принципах:
        </p>

        <ul className="mt-6 grid max-w-[68ch] list-none">
          {principles.map((t, i) => (
            <li
              key={i}
              className="grid grid-cols-[22px_1fr] items-baseline gap-3.5 border-t border-border py-5.5 text-[clamp(15px,0.9vw+0.4rem,17px)] leading-[1.55] text-fg last:border-b last:border-border"
            >
              <Check cls="mt-2" />
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <p className="mt-[clamp(48px,7vw,80px)] max-w-[68ch] font-serif text-[clamp(22px,1.8vw+0.4rem,30px)] leading-[1.35] tracking-snug text-fg italic">
          Я убеждена, что основа устойчивых изменений — бережное и уважительное
          отношение к себе, понимание своих потребностей, ценностей и внутренних
          процессов —{" "}
          <strong className="font-semibold">
            к этому мы и будем стремиться!
          </strong>
        </p>
      </div>
    </section>
  );
}
