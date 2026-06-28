import { section, sectionTitle, wrap } from '../_ui';
import { helpItems } from '../_content/home';

export function HelpSection() {
  return (
    <section className={section} id="help">
      <div className={wrap}>
        <h2 className={sectionTitle}>Я могу помочь, если:</h2>
        <ul className="grid max-w-[70ch] list-none">
          {helpItems.map((t, i) => (
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
          Если вы не нашли свой запрос в списке,{' '}
          <a href="#book" className="border-b border-fg pb-px text-fg">
            напишите мне
          </a>
          . Мы обсудим вашу ситуацию и поймем, будет ли моя помощь полезна.
        </p>
      </div>
    </section>
  );
}
