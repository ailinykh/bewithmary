'use client';

import { useEffect } from 'react';

// Wires up scroll-driven chrome against the server-rendered DOM by class/id.
// These selectors must stay in sync with the markup: .site-header,
// .nav a[href^="#"], .nav-link, .to-top-fab, .reveal. (The mobile menu is a
// self-contained client island — see app/_components/mobile-nav.tsx.)
export default function SiteScripts() {
  useEffect(() => {
    /* Sticky header border on scroll + Back-to-top button */
    const header = document.querySelector('.site-header');
    const toTopFab = document.querySelector<HTMLAnchorElement>('.to-top-fab');
    const onScroll = () => {
      if (window.scrollY > 8) header?.classList.add('is-scrolled');
      else header?.classList.remove('is-scrolled');
      if (toTopFab) {
        if (window.scrollY > 600) toTopFab.classList.add('is-visible');
        else toTopFab.classList.remove('is-visible');
      }
    };
    window.addEventListener('scroll', onScroll, {
      passive: true,
    });
    onScroll();
    const onToTop = (e: Event) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    toTopFab?.addEventListener('click', onToTop);

    /* Active nav link via IntersectionObserver */
    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('.nav a[href^="#"]'),
    );
    const map = new Map<Element, HTMLAnchorElement>();
    links.forEach((a) => {
      const id = a.getAttribute('href')!.slice(1);
      const sec = document.getElementById(id);
      if (sec) map.set(sec, a);
    });
    const navIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const link = map.get(e.target);
          if (!link) return;
          if (e.isIntersecting) {
            links.forEach((l) => l.classList.remove('is-active'));
            link.classList.add('is-active');
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    );
    map.forEach((_, sec) => navIo.observe(sec));

    /* Reveal on scroll */
    const revealEls = Array.from(document.querySelectorAll('.reveal'));
    const revealIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            revealIo.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    );
    revealEls.forEach((el) => revealIo.observe(el));

    return () => {
      window.removeEventListener('scroll', onScroll);
      toTopFab?.removeEventListener('click', onToTop);
      navIo.disconnect();
      revealIo.disconnect();
    };
  }, []);

  return null;
}
