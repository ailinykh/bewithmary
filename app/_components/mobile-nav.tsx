'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { accentBtn } from '../_ui';
import { nav } from '../_content/home';

export function MobileNav() {
  const [open, setOpen] = useState(false);
  // Mount gate so the body portal only runs on the client.
  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect -- one-shot mount flag
  useEffect(() => setMounted(true), []);
  const close = () => setOpen(false);

  const sheet = (
    <div
      className={open ? 'mobile-menu is-open' : 'mobile-menu'}
      id="mobile-menu"
      aria-hidden={!open}
      inert={!open}
    >
      <ul className="grid list-none gap-1">
        {nav.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              onClick={close}
              className="block border-b border-border py-3.5 font-display text-xl font-medium tracking-display"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#book"
        onClick={close}
        className={`mt-6 inline-flex items-center gap-3.5 border border-accent bg-accent px-6 py-3.5 font-display text-sm font-medium tracking-snug text-surface ${accentBtn}`}
      >
        Записаться на консультацию
      </a>
    </div>
  );

  return (
    <>
      <button
        className="menu-btn -mr-2.5 grid h-11 w-11 place-items-center desk:hidden"
        type="button"
        aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span></span>
      </button>
      {/* portaled to <body> to escape the header's backdrop-filter containing block */}
      {mounted && createPortal(sheet, document.body)}
    </>
  );
}
