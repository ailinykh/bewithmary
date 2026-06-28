import { Fragment } from 'react';
import { accentBtn, Arrow, Check, section, sectionTitle, wrap } from '../_ui';
import { pricing, type PriceCard as PriceCardData } from '../_content/home';

const cardHeading =
  'font-display text-[clamp(20px,1.4vw+0.3rem,24px)] leading-[1.2] font-semibold tracking-[-0.012em] text-fg';
const amount =
  'mt-1 font-display text-[clamp(22px,1.8vw+0.3rem,30px)] leading-[1.2] font-semibold tracking-[-0.012em] text-fg';

function PriceCard({ card }: { card: PriceCardData }) {
  return (
    <article className="flex flex-col gap-4.5 border border-border bg-surface px-7 py-8 transition-[border-color] duration-150 hover:border-border-strong">
      <h3 className={cardHeading}>{card.title}</h3>
      <dl className="mt-1 grid gap-2">
        <div className="grid grid-cols-[auto_1fr] gap-2">
          <dt className="text-sm font-medium whitespace-nowrap text-muted">
            {card.meta.label}
          </dt>
          <dd className="text-sm leading-normal text-fg">{card.meta.value}</dd>
        </div>
      </dl>
      {card.includes && (
        <>
          <p className="text-sm text-muted">{card.includesLabel}</p>
          <ul className="grid list-none gap-2.5">
            {card.includes.map((it, i) => (
              <li
                key={i}
                className="grid grid-cols-[18px_1fr] items-baseline gap-3 text-sm leading-normal text-fg"
              >
                <Check cls="mt-1.5" />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </>
      )}
      <div className={amount}>
        {card.price.map((line, i) => (
          <Fragment key={i}>
            {i > 0 && <br />}
            {line}
          </Fragment>
        ))}
      </div>
      <a
        href="#book"
        className={`group mt-auto inline-flex items-center gap-3 self-start border border-accent bg-accent px-5 py-2.75 font-display text-sm font-medium tracking-snug text-surface ${accentBtn}`}
      >
        {card.cta}
        <Arrow cls="h-3.5 w-3.5" />
      </a>
    </article>
  );
}

export function PricingSection() {
  return (
    <section className={section} id="pricing">
      <div className={wrap}>
        <h2 className={sectionTitle}>Форматы работы и стоимость</h2>
        <div className="grid gap-6 tab:grid-cols-2">
          {pricing.map((card) => (
            <PriceCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
