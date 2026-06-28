import { Check, section, sectionTitle, wrap } from "../_ui";
import { outcomes } from "../_content/home";

export function OutcomesSection() {
  return (
    <section className={section} id="outcomes">
      <div className={wrap}>
        <h2 className={sectionTitle}>
          После завершения терапии клиенты отмечают
        </h2>
        <ul className="grid list-none tab:grid-cols-2 tab:gap-x-12">
          {outcomes.map((t, i) => (
            <li
              key={i}
              className="grid grid-cols-[22px_1fr] items-baseline gap-3 border-t border-border py-4 text-base leading-normal last:border-b last:border-border tab:py-3.5"
            >
              <Check cls="mt-1.75" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <p className="mt-[clamp(48px,7vw,80px)] font-serif text-[clamp(22px,1.8vw+0.4rem,30px)] leading-[1.35] tracking-snug text-fg italic">
          Для меня большая радость видеть, что мои клиенты находят новые
          ресурсы, чувствуют себя сильнее и выстраивают жизнь в соответствии со
          своими ценностями.
        </p>
      </div>
    </section>
  );
}
