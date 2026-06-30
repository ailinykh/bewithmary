import { wrap } from '../_ui';

export function Footer() {
  return (
    <footer className="border-t border-border pt-10 pb-15 text-xs text-muted">
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
            href="/consent"
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
  );
}
