import { accordionSummary, h2, section, Toggle, wrap } from '../_ui';
import { education } from '../_content/home';

const detailsSummary =
  'group/sum grid cursor-pointer list-none grid-cols-[1fr_auto] items-center gap-6 border-y border-border py-4.5 transition-[border-color] duration-150 outline-none group-open/sec:border-b-transparent hover:border-border-strong [&::-webkit-details-marker]:hidden';
const detailsTitle = `${h2} max-w-[22ch] transition-colors duration-150 group-hover/sum:text-accent group-focus-visible/sum:text-accent`;

export function AboutSection() {
  return (
    <section className={section} id="about">
      <div className={`${wrap} grid items-start gap-[clamp(32px,4vw,56px)]`}>
        <div className="reveal">
          <span className="text-2.75 mb-5.5 inline-block font-mono tracking-eyebrow text-muted uppercase">
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
          <summary className={detailsSummary}>
            <h2 className={detailsTitle}>Обо мне</h2>
            <Toggle big group="sec" />
          </summary>
          <div className="reveal grid max-w-[68ch] gap-5 pt-8 pb-10 [&_p]:text-[clamp(15px,0.5vw+0.5rem,17px)] [&_p]:leading-[1.65] [&_p]:text-fg [&_strong]:font-semibold">
            <p>
              Меня зовут Мария Ильиных. Мне 39 лет. Я замужем и воспитываю сына.
            </p>
            <p>
              Более 9 лет я помогаю людям улучшать физическое и психологическое
              благополучие, выстраивать более здоровые отношения с едой, своим
              телом и собой.
            </p>
            <p>
              Мой путь в профессию начался в 2017 году с курса по нутрициологии.
              Работая с клиентами как специалист по питанию, я довольно быстро
              поняла, что вопрос лишнего веса гораздо глубже, чем содержимое
              тарелки. Баланс белков, жиров и углеводов сам по себе не решает
              проблему перееданий, эмоциональных перекусов, недовольства своим
              телом и внутренней борьбы с собой.
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
              Тема пищевого поведения близка мне не только как специалисту, но и
              как человеку. В прошлом я, как и многие мои клиенты, сталкивалась
              с недовольством собственным телом и многократно пыталась снизить
              вес. Я хорошо знакома с циклом «диета — ограничения — срыв —
              чувство вины — новая диета», и этот опыт помогает мне лучше
              понимать переживания людей, которые устали бороться с собой и ищут
              бережный путь к изменениям.
            </p>
            <p>
              Последние годы важное место в моей практике занимает работа с
              зависимостями. Обычно люди приходят на консультацию, когда
              замечают, что алкоголь начинает все сильнее влиять на важные сферы
              жизни — отношения, здоровье, работу и эмоциональное состояние. Мы
              вместе находим способы освободиться от влияния зависимости и
              вернуть контроль над жизнью.
            </p>
            <p>
              Для меня важно создавать пространство, в котором человек чувствует
              уважение, безопасность и возможность быть собой. Я не стремлюсь
              «исправлять» людей. Моя задача — помочь лучше понимать себя,
              научиться справляться со сложными ситуациями и развить навыки
              самоподдержки, которые{' '}
              <strong>
                останутся с вами после завершения терапии и не раз пригодятся в
                жизни
              </strong>
              .
            </p>
          </div>
        </details>

        <details
          className="group/sec -mt-[calc(clamp(32px,4vw,56px)+1px)] block"
          id="education"
        >
          <summary className={detailsSummary}>
            <h2 className={detailsTitle}>Образование</h2>
            <Toggle big group="sec" />
          </summary>
          <div className="border-t border-border pt-8">
            {education.map(({ title, items }) => (
              <div key={title} className="border-b border-border">
                <details className="group/acc">
                  <summary className={accordionSummary}>
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
  );
}
