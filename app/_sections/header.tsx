import { accentBtn, wrap } from '../_ui';
import { nav } from '../_content/home';
import { MobileNav } from '../_components/mobile-nav';

export function Header() {
  return (
    <header
      id="top"
      className="site-header backdrop-blur-3.5 sticky top-0 z-50 border-b border-transparent bg-[color-mix(in_oklab,var(--color-bg)_88%,transparent)] backdrop-saturate-[1.4] transition-[border-color] duration-200"
    >
      <div className={`${wrap} flex h-16 items-center justify-between`}>
        <a
          href="#top"
          className="font-display text-base font-semibold tracking-display"
        >
          Мария Ильиных
        </a>
        <nav className="nav hidden desk:block" aria-label="Основная навигация">
          <ul className="flex list-none gap-4 wide:gap-5.5">
            {nav.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="nav-link border-b border-transparent py-1.5 text-xs whitespace-nowrap text-muted transition-[color,border-color] duration-150 hover:text-fg wide:text-sm"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#book"
          className={`hidden items-center gap-1.5 border border-accent bg-accent px-3.5 py-2 font-display text-xs font-medium tracking-snug whitespace-nowrap text-surface desk:inline-flex wide:px-4 wide:py-2 wide:text-sm ${accentBtn}`}
        >
          Записаться
        </a>
        <MobileNav />
      </div>
    </header>
  );
}
