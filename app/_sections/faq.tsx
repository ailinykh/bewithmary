import { accordionSummary, section, sectionTitle, Toggle, wrap } from '../_ui';
import { faq } from '../_content/home';

export function FaqSection() {
  return (
    <section className={section} id="faq">
      <div className={wrap}>
        <h2 className={sectionTitle}>Часто задаваемые вопросы</h2>
        <div className="border-t border-border">
          {faq.map(({ question, answer }) => (
            <div className="border-b border-border" key={question}>
              <details className="group/acc">
                <summary className={accordionSummary}>
                  {question}
                  <Toggle />
                </summary>
                <div className="max-w-[70ch] pb-7 text-[15px] leading-[1.65] text-muted">
                  {answer}
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
