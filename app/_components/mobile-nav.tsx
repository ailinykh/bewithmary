"use client";

import { useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { accentBtn } from "../_ui";
import { nav } from "../_content/home";

// Returns false during SSR / first render, true once mounted on the client —
// without a setState-in-effect. Lets us defer the body portal until there's a
// document to portal into.
const subscribe = () => () => {};
const useMounted = () =>
  useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

// Hamburger button + slide-down sheet as one client island. The sheet is
// portaled to <body> so it stays out of the sticky header's stacking context
// (z-50) and keeps sliding out from behind the header. Styling still comes from
// the .menu-btn / .mobile-menu rules in globals.css.
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const mounted = useMounted();
  const close = () => setOpen(false);

  const sheet = (
    <div
      className={open ? "mobile-menu is-open" : "mobile-menu"}
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
              className="block border-b border-border py-3.5 font-display text-xl font-medium tracking-[-0.01em]"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#book"
        onClick={close}
        className={`mt-6 inline-flex items-center gap-3.5 border border-accent bg-accent px-6 py-3.5 font-display text-[15px] font-medium tracking-snug text-surface ${accentBtn}`}
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
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span></span>
      </button>
      {mounted && createPortal(sheet, document.body)}
    </>
  );
}
