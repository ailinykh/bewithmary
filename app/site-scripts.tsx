"use client";

import { useEffect } from "react";

// ponytail: 1:1 port of the design's inline <script>, driven against the
// server-rendered DOM. Static markup stays a server component; this only wires
// up the imperative bits (native <details> accordions need no JS).
export default function SiteScripts() {
  useEffect(() => {
    /* Mobile menu */
    const btn = document.querySelector<HTMLButtonElement>(".menu-btn");
    const menu = document.getElementById("mobile-menu");
    const setMenu = (isOpen: boolean) => {
      btn?.setAttribute("aria-expanded", String(isOpen));
      menu?.classList.toggle("is-open", isOpen);
      menu?.setAttribute("aria-hidden", String(!isOpen));
      // `inert` keeps the offscreen menu out of tab order + a11y tree when closed
      if (menu) menu.inert = !isOpen;
    };
    const closeMenu = () => setMenu(false);
    const onMenuClick = () =>
      setMenu(btn?.getAttribute("aria-expanded") !== "true");
    btn?.addEventListener("click", onMenuClick);
    const menuLinks = menu ? Array.from(menu.querySelectorAll("a")) : [];
    menuLinks.forEach((a) => a.addEventListener("click", closeMenu));

    /* Sticky header border on scroll + Back-to-top button */
    const header = document.querySelector(".site-header");
    const toTopFab = document.querySelector<HTMLAnchorElement>(".to-top-fab");
    const onScroll = () => {
      if (window.scrollY > 8) header?.classList.add("is-scrolled");
      else header?.classList.remove("is-scrolled");
      if (toTopFab) {
        if (window.scrollY > 600) toTopFab.classList.add("is-visible");
        else toTopFab.classList.remove("is-visible");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    const onToTop = (e: Event) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    toTopFab?.addEventListener("click", onToTop);

    /* Active nav link via IntersectionObserver */
    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('.nav a[href^="#"]'),
    );
    const map = new Map<Element, HTMLAnchorElement>();
    links.forEach((a) => {
      const id = a.getAttribute("href")!.slice(1);
      const sec = document.getElementById(id);
      if (sec) map.set(sec, a);
    });
    const navIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const link = map.get(e.target);
          if (!link) return;
          if (e.isIntersecting) {
            links.forEach((l) => l.classList.remove("is-active"));
            link.classList.add("is-active");
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    map.forEach((_, sec) => navIo.observe(sec));

    /* Intro video — custom poster + play, native controls after click */
    const introVid = document.getElementById(
      "intro-video-el",
    ) as HTMLVideoElement | null;
    const introBtn = document.querySelector<HTMLButtonElement>(".intro-play");
    const onPlayClick = () => {
      if (!introVid) return;
      introVid.controls = true;
      introVid.play();
      introBtn?.classList.add("is-playing");
    };
    const onPause = () => {
      if (introVid && (introVid.currentTime === 0 || introVid.ended)) {
        introBtn?.classList.remove("is-playing");
        introVid.controls = false;
      }
    };
    const onEnded = () => {
      introBtn?.classList.remove("is-playing");
      if (introVid) {
        introVid.controls = false;
        introVid.currentTime = 0;
      }
    };
    introBtn?.addEventListener("click", onPlayClick);
    introVid?.addEventListener("pause", onPause);
    introVid?.addEventListener("ended", onEnded);

    /* Reveal on scroll */
    const revealEls = Array.from(document.querySelectorAll(".reveal"));
    const revealIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            revealIo.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    revealEls.forEach((el) => revealIo.observe(el));

    return () => {
      btn?.removeEventListener("click", onMenuClick);
      menuLinks.forEach((a) => a.removeEventListener("click", closeMenu));
      window.removeEventListener("scroll", onScroll);
      toTopFab?.removeEventListener("click", onToTop);
      introBtn?.removeEventListener("click", onPlayClick);
      introVid?.removeEventListener("pause", onPause);
      introVid?.removeEventListener("ended", onEnded);
      navIo.disconnect();
      revealIo.disconnect();
    };
  }, []);

  return null;
}
