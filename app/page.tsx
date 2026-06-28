import SiteScripts from "./site-scripts";

const wrap = "mx-auto w-full max-w-[1280px] px-[clamp(20px,4vw,48px)]";
const section = "relative border-t border-border py-[clamp(80px,12vw,144px)]";
const h2 =
  "font-display font-semibold text-fg text-[clamp(32px,4.5vw,64px)] leading-[1.04] tracking-[-0.022em]";
const sectionTitle = `${h2} mb-[clamp(40px,5vw,64px)] max-w-[22ch]`;
const accentBtn =
  "transition-[background,border-color,transform] duration-200 hover:bg-accent-hover hover:border-accent-hover hover:-translate-y-px active:translate-y-0";

const nav = [
  ["#approach", "Подход"],
  ["#help", "С чем помогаю"],
  ["#process", "Процесс"],
  ["#outcomes", "Результаты"],
  ["#about", "Обо мне"],
  ["#pricing", "Стоимость"],
  ["#faq", "Вопросы"],
  ["#book", "Контакты"],
];

const Arrow = ({ cls = "h-4 w-4" }: { cls?: string }) => (
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

// Diagonal tick marker (was a ::before in the design)
const Check = ({ cls = "" }: { cls?: string }) => (
  <span
    aria-hidden
    className={`block h-1.5 w-2.75 -rotate-45 border-b-[1.5px] border-l-[1.5px] border-fg ${cls}`}
  />
);

// + / − toggle for <details> accordions. `group` names the parent <details>'s
// Tailwind group ("acc" for leaf accordions, "sec" for the section-level ones
// that wrap nested accordions — keeping the names distinct so an open outer
// doesn't drive its inner toggles). Both literal variants exist for Tailwind.
const Toggle = ({
  big = false,
  group = "acc",
}: {
  big?: boolean;
  group?: "acc" | "sec";
}) => (
  <span
    aria-hidden
    className={[
      "relative inline-block shrink-0",
      big ? "h-8 w-8" : "h-5.5 w-5.5",
      "before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-fg before:transition-transform before:content-['']",
      "after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-fg after:transition-[transform,opacity] after:content-['']",
      big
        ? "before:h-[1.5px] before:w-5 after:h-5 after:w-[1.5px]"
        : "before:h-[1.5px] before:w-3.5 after:h-3.5 after:w-[1.5px]",
      group === "sec"
        ? "group-open/sec:after:rotate-90 group-open/sec:after:opacity-0"
        : "group-open/acc:after:rotate-90 group-open/acc:after:opacity-0",
    ].join(" ")}
  />
);

const faq: [string, string][] = [
  [
    "Сколько встреч потребуется?",
    "Количество встреч зависит от запроса, сложности ситуации и поставленных целей. Некоторые задачи решаются за несколько консультаций, другие требуют более длительной работы. Индивидуальный план терапии обговариваем на первой встрече, после знакомства с вашей ситуацией",
  ],
  [
    "Как часто проходят встречи?",
    "Обычно мы встречаемся один раз в неделю. Такой формат позволяет сохранять динамику изменений и внедрять новые навыки в повседневную жизнь. При необходимости частота встреч устанавливается под ваш запрос",
  ],
  [
    "Можно ли работать только с вопросом снижения веса?",
    "Да, если снижение веса необходимо по медицинским показаниям для укрепления здоровья и отсутствуют маркеры расстройства пищевого поведения. При наличии факторов риска или признаков РПП, в первую очередь мы работаем над восстановлением отношений с едой и снижением симптомов РПП. После стабилизации пищевого поведения мы можем безопасно и последовательно переходить к оптимизации веса",
  ],
  [
    "Вы даете советы и готовые решения?",
    "Я не даю готовых решений и универсальных советов. Вместо этого я помогаю разобраться в причинах происходящего, лучше понять себя, свои реакции и потребности. В процессе работы вы получаете необходимые знания и практические инструменты, которые помогают принимать осознанные решения и выстраивать жизнь в соответствии со своими ценностями. Исключение касается рекомендаций по питанию. Однако и здесь речь не идет о готовых шаблонах, как в интернете. Мы совместно подбираем комфортный и сбалансированный рацион, который можно поддерживать в долгосрочной перспективе",
  ],
  [
    "Вы работаете только со взрослыми?",
    "Я консультирую взрослых и подростков с 15 лет",
  ],
  [
    "Можно ли совмещать психологическое консультирование с медикаментозным лечением?",
    "Да. При необходимости я могу рекомендовать консультацию психиатра, эндокринолога, гастроэнтеролога или терапевта и работать в рамках комплексного подхода совместно с другими специалистами",
  ],
  [
    "Можно ли обратиться без официального диагноза?",
    "Да. Составляя план терапии, мы ориентируемся на ваши внутренние переживания, жизненные трудности, состояние и цели",
  ],
  [
    "Если произошел срыв, терапия не эффективна?",
    "Изменения редко происходят линейно. Срывы являются частью процесса формирования новых стратегий поведения и могут стать источником важной информации для дальнейшей работы",
  ],
  [
    "Будут ли домашние задания?",
    "В КПТ и ACT между встречами часто используются практические упражнения и наблюдения, которые помогают быстрее формировать новое поведение и закреплять изменения. Я не навязываю домашние задания и не настаиваю на их выполнении. Скорее предлагаю варианты упражнений и проясняю, чем они могут помочь в вашей ситуации. Мы вместе адаптируем техники, чтобы они вызывали интерес и были применимы в контексте вашей жизни",
  ],
  [
    "Что, если мне будет сложно выполнять рекомендации между встречами?",
    "Это нормально. Изменения требуют времени, и не всегда получается выполнять рекомендации именно так, как хотелось бы. Если возникают трудности, мы вместе разбираемся, что мешает двигаться дальше, и ищем подходящие решения для вашей ситуации. Для меня важно, чтобы изменения были не быстрыми, а устойчивыми и вписывались в вашу реальную жизнь",
  ],
  [
    "Что делать, если мне сложно открываться?",
    "Это естественное переживание. Вам не нужно рассказывать все сразу. Доверие формируется постепенно, и мы будем двигаться в комфортном для вас темпе",
  ],
  [
    "Есть ли гарантия результата?",
    "Я не могу гарантировать конкретный результат, поскольку психотерапия это сложный процесс и изменения зависят от множества факторов, включая активное участие клиента в процессе и жизненные обстоятельства. Однако я гарантирую профессиональную, добросовестную и основанную на доказательных методах работу для достижения ваших целей",
  ],
];

const ChannelIcon = ({ src }: { src: string }) => (
  <span className={channelIc} aria-hidden="true">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={src} alt="" />
  </span>
);

const channelBase =
  "group flex items-center justify-between gap-3.5 border border-accent bg-transparent px-[18px] py-3.5 text-fg transition-[background,color,transform] duration-200 hover:bg-accent hover:text-surface hover:-translate-y-px";
const channelIc =
  "grid h-7 w-7 flex-[0_0_28px] place-items-center [&_img]:block [&_img]:h-7 [&_img]:w-7 [&_img]:object-contain";
const channelName =
  "font-display text-base font-medium tracking-[-0.005em] text-fg group-hover:text-surface";

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <header
        id="top"
        className="site-header backdrop-blur-3.5 sticky top-0 z-50 border-b border-transparent bg-[color-mix(in_oklab,var(--color-bg)_88%,transparent)] backdrop-saturate-[1.4] transition-[border-color] duration-200"
      >
        <div className={`${wrap} flex h-16 items-center justify-between`}>
          <a
            href="#top"
            className="font-display text-base font-semibold tracking-[-0.01em]"
          >
            Мария Ильиных
          </a>
          <nav
            className="nav hidden desk:block"
            aria-label="Основная навигация"
          >
            <ul className="flex list-none gap-4 wide:gap-5.5">
              {nav.map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="nav-link border-b border-transparent py-1.5 text-[13px] whitespace-nowrap text-muted transition-[color,border-color] duration-150 hover:text-fg wide:text-sm"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href="#book"
            className={`hidden items-center gap-1.5 border border-accent bg-accent px-3.5 py-1.75 font-display text-[13px] font-medium tracking-[-0.005em] whitespace-nowrap text-surface desk:inline-flex wide:px-4 wide:py-2 wide:text-sm ${accentBtn}`}
          >
            Записаться
          </a>
          <button
            className="menu-btn -mr-2.5 grid h-11 w-11 place-items-center desk:hidden"
            type="button"
            aria-label="Открыть меню"
            aria-expanded="false"
            aria-controls="mobile-menu"
          >
            <span></span>
          </button>
        </div>
      </header>

      <div className="mobile-menu" id="mobile-menu" aria-hidden="true" inert>
        <ul className="grid list-none gap-1">
          {nav.map(([href, label]) => (
            <li key={href}>
              <a
                href={href}
                className="block border-b border-border py-3.5 font-display text-xl font-medium tracking-[-0.01em]"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#book"
          className={`mt-6 inline-flex items-center gap-3.5 border border-accent bg-accent px-6 py-3.5 font-display text-[15px] font-medium tracking-[-0.005em] text-surface ${accentBtn}`}
        >
          Записаться на консультацию
        </a>
      </div>

      {/* HERO */}
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
              Помогаю справиться с перееданием, расстройствами пищевого
              поведения, тревогой, депрессией и зависимостями с помощью
              доказательных методов
            </p>
            <p className="max-w-[56ch] border-t border-border pt-6 font-serif text-[clamp(20px,1.4vw+0.4rem,26px)] leading-[1.4] text-fg italic">
              Моя задача — помочь вам лучше понимать себя, преодолевать
              внутренние трудности и выстраивать жизнь в соответствии с тем, что
              для вас действительно важно
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-7 border-t border-border pt-7 fold:grid-cols-[repeat(4,auto)] fold:gap-x-9">
              {[
                [
                  <>
                    <rect x="3.5" y="5.5" width="17" height="15" rx="1.5" />
                    <path d="M3.5 10h17" />
                    <path d="M8 3.5v4M16 3.5v4" />
                    <circle
                      cx="8"
                      cy="14.5"
                      r="0.7"
                      fill="currentColor"
                      stroke="none"
                    />
                    <circle
                      cx="12"
                      cy="14.5"
                      r="0.7"
                      fill="currentColor"
                      stroke="none"
                    />
                    <circle
                      cx="16"
                      cy="14.5"
                      r="0.7"
                      fill="currentColor"
                      stroke="none"
                    />
                  </>,
                  <>9 лет практики</>,
                ],
                [
                  <>
                    <path d="M12 5.5c-1.2-1.4-3.7-1.4-4.7.4-1.5 0-2.5 1.4-2 2.9-1 .9-1 2.8 0 3.7-.1 1.4 1.1 2.8 2.5 2.8.3 1 1.4 1.7 2.5 1.7H12" />
                    <path d="M12 5.5c1.2-1.4 3.7-1.4 4.7.4 1.5 0 2.5 1.4 2 2.9 1 .9 1 2.8 0 3.7.1 1.4-1.1 2.8-2.5 2.8-.3 1-1.4 1.7-2.5 1.7H12" />
                    <path d="M12 5.5v15" />
                    <path d="M9 11c.6.4 1.2.6 1.7.6M15 11c-.6.4-1.2.6-1.7.6" />
                  </>,
                  <>КПТ и АСТ</>,
                ],
                [
                  <>
                    <circle cx="9" cy="8.5" r="2.6" />
                    <circle cx="16.5" cy="9.5" r="2.1" />
                    <path d="M3.5 19c0-2.8 2.5-4.8 5.5-4.8s5.5 2 5.5 4.8" />
                    <path d="M14 17.5c.2-1.8 1.6-3.1 3.3-3.1 1.6 0 2.9 1.2 3.2 2.8" />
                  </>,
                  <>
                    Подростки 15+
                    <br />и взрослые
                  </>,
                ],
                [
                  <>
                    <path d="M12 21c-4-4.4-6.5-7.8-6.5-11C5.5 6.4 8.4 4 12 4s6.5 2.4 6.5 6c0 3.2-2.5 6.6-6.5 11z" />
                    <circle cx="12" cy="9.5" r="2.3" />
                  </>,
                  <>
                    Онлайн и очно
                    <br />в Москве
                  </>,
                ],
              ].map((fact, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-3 text-center"
                >
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
                      {fact[0]}
                    </svg>
                  </span>
                  <span className="text-[13px] leading-[1.4] tracking-[0.005em] text-fg">
                    {fact[1]}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-1 flex flex-wrap items-center gap-3.5">
              <a
                href="#book"
                className={`group inline-flex items-center justify-center gap-3.5 border border-accent bg-accent px-6 py-3.5 font-display text-[15px] font-medium tracking-[-0.005em] text-surface ${accentBtn}`}
              >
                Записаться на консультацию
                <Arrow />
              </a>
            </div>
          </div>
          <figure className="relative mx-auto aspect-4/5 w-full max-w-130 overflow-hidden bg-[oklch(94%_0.008_85)] after:pointer-events-none after:absolute after:inset-0 after:shadow-[inset_0_0_0_1px_oklch(0%_0_0/0.06)] after:content-[''] desk:aspect-auto desk:h-full desk:min-h-160 desk:max-w-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="h-full w-full object-cover"
              src="/assets/portrait-hero.jpg"
              alt="Мария Ильиных"
              loading="eager"
              fetchPriority="high"
            />
          </figure>
        </div>
      </section>

      {/* APPROACH */}
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
              и самоподдержки, которые помогают легче адаптироваться к
              трудностям и сохранять опору на свои ценности даже в непростые
              периоды жизни
            </p>
          </div>

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
                className="text-3.5 fill-fg font-display font-semibold tracking-[-0.005em]"
              >
                <tspan x="310" dy="0">
                  психологическая
                </tspan>
                <tspan x="310" dy="18">
                  гибкость
                </tspan>
              </text>
              {(() => {
                const label =
                  "fill-fg font-display text-[12px] font-medium tracking-[-0.005em]";
                return (
                  <>
                    <text x="310" y="152" textAnchor="middle" className={label}>
                      Присутствие в моменте
                    </text>
                    <text x="440" y="231" className={label}>
                      <tspan x="440">Выбор ценностей</tspan>
                      <tspan x="440" dy="14">
                        (смыслов)
                      </tspan>
                    </text>
                    <text x="440" y="362" className={label}>
                      <tspan x="440">Мотивированное</tspan>
                      <tspan x="440" dy="14">
                        поведение
                      </tspan>
                    </text>
                    <text x="310" y="455" textAnchor="middle" className={label}>
                      <tspan x="310">Селф-как-контекст</tspan>
                      <tspan x="310" dy="14">
                        (наблюдающее Я)
                      </tspan>
                    </text>
                    <text x="180" y="362" textAnchor="end" className={label}>
                      <tspan x="180">Когнитивное</tspan>
                      <tspan x="180" dy="14">
                        распутывание
                      </tspan>
                    </text>
                    <text x="180" y="239" textAnchor="end" className={label}>
                      Принятие
                    </text>
                  </>
                );
              })()}
            </svg>
            <figcaption className="text-2.75 mt-5 text-center font-mono tracking-[0.14em] text-muted uppercase">
              гексафлекс · модель ACT
            </figcaption>
          </figure>

          <p className="mt-5 font-display text-[17px] font-semibold tracking-[-0.005em] text-fg">
            Моя работа строится на следующих принципах:
          </p>

          <ul className="mt-6 grid max-w-[68ch] list-none">
            {[
              "уважение к личности и жизненному опыту клиента",
              "научная обоснованность методов",
              "работа в партнерстве. Я — эксперт в психологии поведения, вы — в собственной жизни, и мы вместе трудимся над решением проблемы",
              "движение в темпе клиента — я адаптирую процесс изменений под ваше состояние и потребности, а не подгоняю вас под стандартные протоколы",
              "ориентация не только на уменьшение симптомов, но и на улучшение качества жизни",
            ].map((t, i) => (
              <li
                key={i}
                className="grid grid-cols-[22px_1fr] items-baseline gap-3.5 border-t border-border py-5.5 text-[clamp(15px,0.9vw+0.4rem,17px)] leading-[1.55] text-fg last:border-b last:border-border"
              >
                <Check cls="mt-2" />
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <p className="mt-[clamp(48px,7vw,80px)] max-w-[68ch] font-serif text-[clamp(22px,1.8vw+0.4rem,30px)] leading-[1.35] tracking-[-0.005em] text-fg italic">
            Я убеждена, что основа устойчивых изменений — бережное и
            уважительное отношение к себе, понимание своих потребностей,
            ценностей и внутренних процессов —{" "}
            <strong className="font-semibold">
              к этому мы и будем стремиться!
            </strong>
          </p>
        </div>
      </section>

      {/* HELP IF */}
      <section className={section} id="help">
        <div className={wrap}>
          <h2 className={sectionTitle}>Я могу помочь, если:</h2>
          <ul className="grid max-w-[70ch] list-none">
            {[
              "беспокоят переедания, пищевые срывы, навязчивые мысли о еде",
              "установлен диагноз или вы подозреваете у себя расстройство пищевого поведения (РПП)",
              "устали от постоянных диет и борьбы с весом",
              "недовольны своим телом, испытываете стыд за внешность или вину за съеденное",
              "хотите безопасно снизить вес по медицинским показаниям",
              "замечаете, что еда, алкоголь или другие привычки стали способом справляться со стрессом и эмоциями",
              "беспокоит постоянная или ситуативная тревога",
              "столкнулись с депрессией, апатией или потерей интереса к жизни",
              "испытываете сложности с самооценкой и уверенностью в себе",
              "химическая зависимость мешает Вам жить полноценной жизнью",
              "являетесь родственником человека с зависимостью и нуждаетесь в поддержке",
              "хотите изменить образ жизни и укрепить здоровье",
              "испытываете трудности в организации питания ребенка и хотите сформировать здоровые пищевые привычки в семье",
              "ищете больше смысла, устойчивости и опоры в жизни",
            ].map((t, i) => (
              <li
                key={i}
                className="grid grid-cols-[24px_1fr] items-baseline gap-3.5 border-t border-border py-4.5 text-[clamp(16px,1vw+0.3rem,18px)] leading-normal text-fg last:border-b last:border-border"
              >
                <span className="font-medium text-muted">—</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="mt-7 max-w-[64ch] text-[15px] leading-[1.6] text-muted">
            Если вы не нашли свой запрос в списке,{" "}
            <a href="#book" className="border-b border-fg pb-px text-fg">
              напишите мне
            </a>
            . Мы обсудим вашу ситуацию и поймем, будет ли моя помощь полезна.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className={section} id="process">
        <div className={wrap}>
          <h2 className={sectionTitle}>Как проходит работа</h2>
          <ol className="mt-2 grid list-none">
            {(
              [
                [
                  "0",
                  "Первичное обращение",
                  "Вы связываетесь со мной в удобном для вас мессенджере и кратко описываете запрос, с которым хотите обратиться. Мы определяем, соответствует ли моя специализация вашей задаче. Если да, то согласовываем дату первой встречи. Если нет, я порекомендую специалиста, который сможет вам помочь",
                ],
                [
                  "1",
                  "Знакомство и определение целей",
                  "На первой встрече мы подробно обсуждаем ваш запрос, трудности и желаемые изменения. Вместе формулируем цели работы, определяем направление дальнейшего движения и план реализации желаемых изменений",
                ],
                [
                  "2",
                  "Понимание причин проблемы",
                  "Мы исследуем мысли, эмоции, привычки и жизненные обстоятельства, которые поддерживают проблему",
                ],
                [
                  "3",
                  "Этап изменений и освоения новых навыков",
                  "Вы учитесь более эффективно реагировать на сложные ситуации, регулировать эмоции, выстраивать отношения с собой и окружающими. Применяете новые навыки в повседневной жизни, наблюдаете за результатами между сессиями, и мы вместе справляемся с возникающими трудностями",
                ],
                [
                  "4",
                  "Закрепление изменений и завершение психологического консультирования",
                  "На этом этапе идет активная работа над сохранением достигнутого прогресса и снижением рисков возникновения рецидивов и отката к прежним стратегиям поведения. Также мы составляем план самопомощи, который станет опорой после завершения встреч",
                ],
              ] as [string, string, string][]
            ).map(([num, title, body]) => (
              <li
                key={num}
                className="grid grid-cols-[48px_1fr] items-start gap-5 border-t border-border py-7 last:border-b last:border-border tab:grid-cols-[80px_1fr] tab:gap-10"
              >
                <span className="pt-1 font-display text-sm font-medium tracking-[0.04em] text-muted">
                  {num}
                </span>
                <div>
                  <h3 className="mb-2 font-display text-xl leading-[1.18] font-semibold text-fg">
                    {title}
                  </h3>
                  <p className="max-w-[64ch] text-base leading-[1.55] text-fg">
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className={section} id="outcomes">
        <div className={wrap}>
          <h2 className={sectionTitle}>
            После завершения терапии клиенты отмечают
          </h2>
          <ul className="grid list-none tab:grid-cols-2 tab:gap-x-12">
            {[
              "уменьшение эпизодов и объема перееданий",
              "снижение влияния тяги к алкоголю и другим веществам на качество жизни",
              "более спокойные отношения с едой без постоянных запретов и контроля",
              "уменьшение тревоги и внутреннего напряжения",
              "ощущение эмоциональной устойчивости и способности преодолевать жизненные трудности",
              "снижение симптомов депрессии",
              "повышение уверенности в себе и в своих решениях",
              "более внимательное и бережное отношение к своему телу",
              "формирование навыков самоподдержки, снижение чувства вины и стыда",
              "обретение способности справляться со сложными эмоциями без еды или алкоголя",
              "возвращение интереса к жизни и значимым занятиям",
              "улучшение качества отношений с близкими",
              "формирование устойчивых привычек, поддерживающих здоровье",
              "возможность строить жизнь, опираясь на свои ценности, а не на страхи и ограничения",
            ].map((t, i) => (
              <li
                key={i}
                className="grid grid-cols-[22px_1fr] items-baseline gap-3 border-t border-border py-4 text-base leading-normal last:border-b last:border-border tab:py-3.5"
              >
                <Check cls="mt-1.75" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="mt-[clamp(48px,7vw,80px)] font-serif text-[clamp(22px,1.8vw+0.4rem,30px)] leading-[1.35] tracking-[-0.005em] text-fg italic">
            Для меня большая радость видеть, что мои клиенты находят новые
            ресурсы, чувствуют себя сильнее и выстраивают жизнь в соответствии
            со своими ценностями.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className={section} id="about">
        <div className={`${wrap} grid items-start gap-[clamp(32px,4vw,56px)]`}>
          <div className="reveal">
            <span className="text-2.75 mb-5.5 inline-block font-mono tracking-[0.14em] text-muted uppercase">
              [ видеовизитка · 1:35 ]<sup className="text-[.7em]">*</sup>
            </span>
            <div className="relative aspect-video w-full overflow-hidden bg-accent">
              <iframe
                src="https://vk.com/video_ext.php?oid=5829602&id=456239757"
                title="Видеовизитка — Мария Ильиных"
                className="absolute inset-0 h-full w-full border-0"
                allow="encrypted-media; picture-in-picture; screen-wake-lock;"
                allowFullScreen
              ></iframe>
            </div>
            <p className="mt-4 text-[12px] leading-[1.6] text-muted">
              <sup>*</sup> В видео упоминается Instagram — продукт компании
              Meta&nbsp;Platforms&nbsp;Inc., деятельность которой признана
              экстремистской и запрещена на территории Российской Федерации.
            </p>
          </div>

          <details className="group/sec block">
            <summary className="group/sum grid cursor-pointer list-none grid-cols-[1fr_auto] items-center gap-6 border-y border-border py-4.5 transition-[border-color] duration-150 outline-none group-open/sec:border-b-transparent hover:border-border-strong [&::-webkit-details-marker]:hidden">
              <h2
                className={`${h2} max-w-[22ch] transition-colors duration-150 group-hover/sum:text-accent group-focus-visible/sum:text-accent`}
              >
                Обо мне
              </h2>
              <Toggle big group="sec" />
            </summary>
            <div className="reveal grid max-w-[68ch] gap-5 pt-8 pb-10 [&_p]:text-[clamp(15px,0.5vw+0.5rem,17px)] [&_p]:leading-[1.65] [&_p]:text-fg [&_strong]:font-semibold">
              <p>
                Меня зовут Мария Ильиных. Мне 39 лет. Я замужем и воспитываю
                сына.
              </p>
              <p>
                Более 9 лет я помогаю людям улучшать физическое и
                психологическое благополучие, выстраивать более здоровые
                отношения с едой, своим телом и собой.
              </p>
              <p>
                Мой путь в профессию начался в 2017 году с курса по
                нутрициологии. Работая с клиентами как специалист по питанию, я
                довольно быстро поняла, что вопрос лишнего веса гораздо глубже,
                чем содержимое тарелки. Баланс белков, жиров и углеводов сам по
                себе не решает проблему перееданий, эмоциональных перекусов,
                недовольства своим телом и внутренней борьбы с собой.
              </p>
              <p>
                Поиск ответов на эти вопросы привел меня в психологию пищевого
                поведения, а затем и в невероятно вдохновляющий мир
                контекстуально-поведенческой науки. Для углубления знаний о
                личности человека и формировании поведения я поступила в
                магистратуру. Во время обучения провела исследование на тему
                «Особенности стилей пищевого поведения женщин в первый год
                эмиграции», написала по нему магистерскую диссертацию и защитила
                диплом на отлично. Далее продолжила обучение терапии принятия и
                ответственности уже на психфаке МГУ.
              </p>
              <p>
                Тема пищевого поведения близка мне не только как специалисту, но
                и как человеку. В прошлом я, как и многие мои клиенты,
                сталкивалась с недовольством собственным телом и многократно
                пыталась снизить вес. Я хорошо знакома с циклом «диета —
                ограничения — срыв — чувство вины — новая диета», и этот опыт
                помогает мне лучше понимать переживания людей, которые устали
                бороться с собой и ищут бережный путь к изменениям.
              </p>
              <p>
                Последние годы важное место в моей практике занимает работа с
                зависимостями. Обычно люди приходят на консультацию, когда
                замечают, что алкоголь начинает все сильнее влиять на важные
                сферы жизни — отношения, здоровье, работу и эмоциональное
                состояние. Мы вместе находим способы освободиться от влияния
                зависимости и вернуть контроль над жизнью.
              </p>
              <p>
                Для меня важно создавать пространство, в котором человек
                чувствует уважение, безопасность и возможность быть собой. Я не
                стремлюсь «исправлять» людей. Моя задача — помочь лучше понимать
                себя, научиться справляться со сложными ситуациями и развить
                навыки самоподдержки, которые{" "}
                <strong>
                  останутся с вами после завершения терапии и не раз пригодятся
                  в жизни
                </strong>
                .
              </p>
            </div>
          </details>

          <details
            className="group/sec -mt-[calc(clamp(32px,4vw,56px)+1px)] block"
            id="education"
          >
            <summary className="group/sum grid cursor-pointer list-none grid-cols-[1fr_auto] items-center gap-6 border-y border-border py-4.5 transition-[border-color] duration-150 outline-none group-open/sec:border-b-transparent hover:border-border-strong [&::-webkit-details-marker]:hidden">
              <h2
                className={`${h2} max-w-[22ch] transition-colors duration-150 group-hover/sum:text-accent group-focus-visible/sum:text-accent`}
              >
                Образование
              </h2>
              <Toggle big group="sec" />
            </summary>
            <div className="border-t border-border pt-8">
              {(
                [
                  [
                    "Высшее образование",
                    [
                      "Магистр психологии, Московский институт психоанализа, направление: когнитивно-поведенческая терапия",
                    ],
                  ],
                  [
                    "Профессиональная переподготовка",
                    [
                      "Специалист по коррекции пищевого поведения и избыточной массы тела, Московский институт психоанализа",
                      "ACT-терапевт, МГУ",
                      "Нутрициолог, Академия экспертизы и оценки",
                    ],
                  ],
                  [
                    "Повышение квалификации",
                    [
                      "Интегративный телесно-ориентированный подход в работе с нарушениями пищевого поведения",
                      "Психологическая коррекция нарушений пищевого поведения",
                      "Протокол работы с булимией и перееданием по Оксфордской модели КПТ-У",
                      "Использование метакогнитивной терапии при работе с нервной булимией",
                      "Терапия РПП у детей и подростков",
                      "АСТ при работе с подростками",
                      "АСТ депрессивных расстройств",
                      "АСТ тревожных расстройств",
                      "АСТ проблемного гнева",
                      "АСТ при переживании горя и утраты",
                      "Кризисная когнитивно-поведенческая терапия",
                      "Когнитивно-поведенческая терапия аддикций",
                      "Техники терапии зависимостей",
                      "Нутрициология",
                      "Диетологическое сопровождение клиента",
                      "Anti-Aging фитнес. Фитнес для снижения биологического возраста и замедления темпов старения",
                      "Метафорические ассоциативные карты в работе психолога",
                    ],
                  ],
                ] as [string, string[]][]
              ).map(([title, items]) => (
                <div key={title} className="border-b border-border">
                  <details className="group/acc">
                    <summary className="grid w-full cursor-pointer list-none grid-cols-[1fr_24px] items-center gap-6 py-6 text-left font-display text-[clamp(17px,1.1vw+0.4rem,20px)] font-medium tracking-[-0.01em] text-fg transition-colors duration-150 outline-none hover:text-accent focus-visible:text-accent [&::-webkit-details-marker]:hidden">
                      {title}
                      <Toggle />
                    </summary>
                    <div className="max-w-[70ch] pb-7 text-[15px] leading-[1.65] text-muted">
                      <ul className="grid list-none gap-3">
                        {items.map((it, i) => (
                          <li
                            key={i}
                            className="relative pl-5.5 text-[15px] leading-[1.55] text-fg before:absolute before:top-3 before:left-0 before:h-px before:w-2.5 before:bg-muted before:content-['']"
                          >
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </details>
        </div>
      </section>

      {/* PRICING */}
      <section className={section} id="pricing">
        <div className={wrap}>
          <h2 className={sectionTitle}>Форматы работы и стоимость</h2>
          <div className="grid gap-6 tab:grid-cols-2">
            <article className="flex flex-col gap-4.5 border border-border bg-surface px-7 py-8 transition-[border-color] duration-150 hover:border-border-strong">
              <h3 className="font-display text-[clamp(20px,1.4vw+0.3rem,24px)] leading-[1.2] font-semibold tracking-[-0.012em] text-fg">
                Индивидуальная консультация
              </h3>
              <dl className="mt-1 grid gap-2">
                <div className="grid grid-cols-[auto_1fr] gap-2">
                  <dt className="text-sm font-medium whitespace-nowrap text-muted">
                    Продолжительность:
                  </dt>
                  <dd className="text-sm leading-normal text-fg">
                    50–55 минут
                  </dd>
                </div>
              </dl>
              <div className="mt-1 font-display text-[clamp(22px,1.8vw+0.3rem,30px)] leading-[1.2] font-semibold tracking-[-0.012em] text-fg">
                6 000 ₽ онлайн
                <br />7 000 ₽ офлайн (м. Белорусская)
              </div>
              <a
                href="#book"
                className={`group mt-auto inline-flex items-center gap-3 self-start border border-accent bg-accent px-5 py-2.75 font-display text-sm font-medium tracking-[-0.005em] text-surface ${accentBtn}`}
              >
                Записаться
                <Arrow cls="h-3.5 w-3.5" />
              </a>
            </article>

            <article className="flex flex-col gap-4.5 border border-border bg-surface px-7 py-8 transition-[border-color] duration-150 hover:border-border-strong">
              <h3 className="font-display text-[clamp(20px,1.4vw+0.3rem,24px)] leading-[1.2] font-semibold tracking-[-0.012em] text-fg">
                Пакет из 5 консультаций
              </h3>
              <dl className="mt-1 grid gap-2">
                <div className="grid grid-cols-[auto_1fr] gap-2">
                  <dt className="text-sm font-medium whitespace-nowrap text-muted">
                    Частота:
                  </dt>
                  <dd className="text-sm leading-normal text-fg">
                    1 раз в неделю
                  </dd>
                </div>
              </dl>
              <div className="mt-1 font-display text-[clamp(22px,1.8vw+0.3rem,30px)] leading-[1.2] font-semibold tracking-[-0.012em] text-fg">
                25 000 ₽
              </div>
              <a
                href="#book"
                className={`group mt-auto inline-flex items-center gap-3 self-start border border-accent bg-accent px-5 py-2.75 font-display text-sm font-medium tracking-[-0.005em] text-surface ${accentBtn}`}
              >
                Записаться
                <Arrow cls="h-3.5 w-3.5" />
              </a>
            </article>

            <article className="flex flex-col gap-4.5 border border-border bg-surface px-7 py-8 transition-[border-color] duration-150 hover:border-border-strong">
              <h3 className="font-display text-[clamp(20px,1.4vw+0.3rem,24px)] leading-[1.2] font-semibold tracking-[-0.012em] text-fg">
                Индивидуальное сопровождение по оптимизации веса и работе с
                пищевым поведением
              </h3>
              <dl className="mt-1 grid gap-2">
                <div className="grid grid-cols-[auto_1fr] gap-2">
                  <dt className="text-sm font-medium whitespace-nowrap text-muted">
                    Продолжительность:
                  </dt>
                  <dd className="text-sm leading-normal text-fg">1 месяц</dd>
                </div>
              </dl>
              <p className="text-sm text-muted">Включает:</p>
              <ul className="grid list-none gap-2.5">
                <li className="grid grid-cols-[18px_1fr] items-baseline gap-3 text-sm leading-normal text-fg">
                  <Check cls="mt-1.5" />
                  <span>4 индивидуальные встречи по 50–55 минут</span>
                </li>
                <li className="grid grid-cols-[18px_1fr] items-baseline gap-3 text-sm leading-normal text-fg">
                  <Check cls="mt-1.5" />
                  <span>
                    поддержку и ответы на вопросы в мессенджере между сессиями
                  </span>
                </li>
              </ul>
              <div className="mt-1 font-display text-[clamp(22px,1.8vw+0.3rem,30px)] leading-[1.2] font-semibold tracking-[-0.012em] text-fg">
                25 000 ₽
              </div>
              <a
                href="#book"
                className={`group mt-auto inline-flex items-center gap-3 self-start border border-accent bg-accent px-5 py-2.75 font-display text-sm font-medium tracking-[-0.005em] text-surface ${accentBtn}`}
              >
                Записаться
                <Arrow cls="h-3.5 w-3.5" />
              </a>
            </article>

            <article className="flex flex-col gap-4.5 border border-border bg-surface px-7 py-8 transition-[border-color] duration-150 hover:border-border-strong">
              <h3 className="font-display text-[clamp(20px,1.4vw+0.3rem,24px)] leading-[1.2] font-semibold tracking-[-0.012em] text-fg">
                Группа поддержки «10 шагов»
              </h3>
              <dl className="mt-1 grid gap-2">
                <div className="grid grid-cols-[auto_1fr] gap-2">
                  <dt className="text-sm font-medium whitespace-nowrap text-muted">
                    Продолжительность:
                  </dt>
                  <dd className="text-sm leading-normal text-fg">1 месяц</dd>
                </div>
              </dl>
              <p className="text-sm text-muted">
                Онлайн-формат в закрытом канале Telegram:
              </p>
              <ul className="grid list-none gap-2.5">
                <li className="grid grid-cols-[18px_1fr] items-baseline gap-3 text-sm leading-normal text-fg">
                  <Check cls="mt-1.5" />
                  <span>обучающие материалы</span>
                </li>
                <li className="grid grid-cols-[18px_1fr] items-baseline gap-3 text-sm leading-normal text-fg">
                  <Check cls="mt-1.5" />
                  <span>практические задания</span>
                </li>
                <li className="grid grid-cols-[18px_1fr] items-baseline gap-3 text-sm leading-normal text-fg">
                  <Check cls="mt-1.5" />
                  <span>чат поддержки и ответы на вопросы</span>
                </li>
              </ul>
              <div className="mt-1 font-display text-[clamp(22px,1.8vw+0.3rem,30px)] leading-[1.2] font-semibold tracking-[-0.012em] text-fg">
                Предзапись на группу
              </div>
              <a
                href="#book"
                className={`group mt-auto inline-flex items-center gap-3 self-start border border-accent bg-accent px-5 py-2.75 font-display text-sm font-medium tracking-[-0.005em] text-surface ${accentBtn}`}
              >
                Оставить заявку
                <Arrow cls="h-3.5 w-3.5" />
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={section} id="faq">
        <div className={wrap}>
          <h2 className={sectionTitle}>Часто задаваемые вопросы</h2>
          <div className="border-t border-border">
            {faq.map(([q, a]) => (
              <div className="border-b border-border" key={q}>
                <details className="group/acc">
                  <summary className="grid w-full cursor-pointer list-none grid-cols-[1fr_24px] items-center gap-6 py-6 text-left font-display text-[clamp(17px,1.1vw+0.4rem,20px)] font-medium tracking-[-0.01em] text-fg transition-colors duration-150 outline-none hover:text-accent focus-visible:text-accent [&::-webkit-details-marker]:hidden">
                    {q}
                    <Toggle />
                  </summary>
                  <div className="max-w-[70ch] pb-7 text-[15px] leading-[1.65] text-muted">
                    {a}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOK */}
      <section
        className="relative bg-[oklch(93%_0.010_80)] py-[clamp(80px,12vw,144px)]"
        id="book"
      >
        <div
          className={`${wrap} grid gap-[clamp(40px,6vw,72px)] desk:grid-cols-[1fr_1fr_1.1fr] desk:items-stretch desk:gap-[clamp(32px,4vw,56px)]`}
        >
          <div className="reveal">
            <p className="max-w-[62ch] text-[clamp(17px,1.2vw+0.4rem,21px)] leading-normal text-muted">
              Чтобы записаться на консультацию или задать вопрос, напишите мне
            </p>
            <a
              href="tel:+79202876181"
              className="mt-6 inline-block border-b border-[color-mix(in_oklab,var(--color-fg)_40%,transparent)] pb-0.75 font-display text-[clamp(18px,1vw+0.4rem,22px)] font-medium tracking-[-0.005em] text-fg transition-[color,border-color] duration-200 hover:border-accent hover:text-accent"
            >
              +7 920 287 61 81
            </a>
          </div>

          <div className="reveal">
            <div className="grid grid-cols-1 gap-2.5">
              <a
                href="https://t.me/horoshamasha"
                target="_blank"
                rel="noopener noreferrer"
                className={channelBase}
                aria-label="Telegram"
              >
                <span className="inline-flex items-baseline gap-0.5">
                  <span className={channelName}>Telegram</span>
                </span>
                <ChannelIcon src="/assets/icons/telegram.svg" />
              </a>
              <a
                href="https://max.ru/u/f9LHodD0cOIoynQ5lq3frm9kU9vp7-n87ZDk4orMiB1wlKoH7gXgnXpZUTM"
                target="_blank"
                rel="noopener noreferrer"
                className={channelBase}
                aria-label="МАХ"
              >
                <span className="inline-flex items-baseline gap-0.5">
                  <span className={channelName}>МАХ</span>
                </span>
                <ChannelIcon src="/assets/icons/max.png" />
              </a>
              <a
                href="https://www.instagram.com/be_with_mary"
                target="_blank"
                rel="noopener noreferrer"
                className={channelBase}
                aria-label="Instagram"
              >
                <span className="inline-flex items-baseline gap-0.5">
                  <span className={channelName}>
                    Instagram<sup className="text-[.6em] font-normal">*</sup>
                  </span>
                </span>
                <ChannelIcon src="/assets/icons/instagram.svg" />
              </a>
              <a
                href="https://vk.com/horoshamasha"
                target="_blank"
                rel="noopener noreferrer"
                className={channelBase}
                aria-label="ВКонтакте"
              >
                <span className="inline-flex items-baseline gap-0.5">
                  <span className={channelName}>ВКонтакте</span>
                </span>
                <ChannelIcon src="/assets/icons/vk.svg" />
              </a>
              <a
                href="https://t.me/be_with_mary"
                target="_blank"
                rel="noopener noreferrer"
                className={channelBase}
                aria-label="Telegram канал «Психология здоровья с Марией Ильиных»"
              >
                <span className="grid items-start gap-1">
                  <span className="font-mono text-[10.5px] tracking-[0.14em] text-muted uppercase group-hover:text-[color-mix(in_oklab,var(--color-surface)_70%,transparent)]">
                    Telegram канал
                  </span>
                  <span className="font-display text-[15px] leading-[1.3] font-medium tracking-[-0.005em] text-fg group-hover:text-surface">
                    «Психология здоровья с Марией Ильиных»
                  </span>
                </span>
                <ChannelIcon src="/assets/icons/telegram.svg" />
              </a>
            </div>
          </div>

          <div className="reveal">
            <figure className="m-0 h-full w-full max-desk:h-auto max-desk:max-w-90">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="block h-full w-full object-cover max-desk:aspect-4/5 max-desk:h-auto"
                src="/assets/cabinet.jpg"
                alt="Кабинет Марии — Москва, м. Белорусская"
                loading="lazy"
              />
            </figure>
          </div>

          <div className="reveal desk:col-[2/-1]">
            <p className="mt-8 max-w-[60ch] text-[13px] leading-[1.65] text-muted [&_a]:border-b [&_a]:border-[color-mix(in_oklab,var(--color-fg)_30%,transparent)] [&_a]:text-fg [&_a]:transition-[border-color] [&_a]:duration-150 [&_a:hover]:border-fg">
              Записываясь на консультацию, вы подтверждаете ознакомление с{" "}
              <a href="#consent-doc">информированным согласием</a>.
            </p>
            <p className="mt-3.5 max-w-[60ch] text-[12px] leading-[1.65] text-muted">
              <sup>*</sup> Instagram принадлежит компании Meta Platforms Inc.,
              деятельность которой признана экстремистской и запрещена на
              территории Российской Федерации.
            </p>
            <p className="text-2.75 mt-3.5 max-w-[60ch] leading-[1.65] tracking-[0.02em] text-muted [font-variant-numeric:tabular-nums]">
              ИП Ильиных Мария Владимировна · ОГРНИП 320774600431123 · ИНН
              575306963172
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border pt-10 pb-15 text-[13px] text-muted">
        <div
          className={`${wrap} flex flex-wrap items-end justify-between gap-x-8 gap-y-4`}
        >
          <div>
            <div className="font-display font-semibold text-fg">
              Мария Ильиных
            </div>
            <div className="mt-1">© 2025</div>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <a
              href="#consent-doc"
              className="border-b border-transparent pb-px text-muted transition-[color,border-color] duration-150 hover:border-muted hover:text-fg"
            >
              Информированное согласие
            </a>
            <a
              href="#top"
              className="border-b border-transparent pb-px text-muted transition-[color,border-color] duration-150 hover:border-muted hover:text-fg"
            >
              В начало ↑
            </a>
          </div>
        </div>
      </footer>

      <a
        href="#top"
        className="to-top-fab fixed right-[clamp(16px,3vw,32px)] bottom-[clamp(16px,3vw,32px)] z-60 grid h-11 w-11 place-items-center border border-accent bg-bg font-display text-[18px] text-fg no-underline hover:bg-accent hover:text-surface"
        aria-label="Вернуться в начало страницы"
      >
        <span aria-hidden="true">↑</span>
      </a>

      <SiteScripts />
    </>
  );
}
