import { section, sectionTitle, wrap } from '../_ui';
import { process } from '../_content/home';

export function ProcessSection() {
  return (
    <section className={section} id="process">
      <div className={wrap}>
        <h2 className={sectionTitle}>Как проходит работа</h2>
        <ol className="mt-2 grid list-none">
          {process.map(({ number, title, body }) => (
            <li
              key={number}
              className="grid grid-cols-[48px_1fr] items-start gap-5 border-t border-border py-7 last:border-b last:border-border tab:grid-cols-[80px_1fr] tab:gap-10"
            >
              <span className="pt-1 font-display text-sm font-medium tracking-[0.04em] text-muted">
                {number}
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
  );
}
