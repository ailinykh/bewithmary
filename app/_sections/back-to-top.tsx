export function BackToTop() {
  return (
    <a
      href="#top"
      className="to-top-fab fixed right-[clamp(16px,3vw,32px)] bottom-[clamp(16px,3vw,32px)] z-60 grid h-11 w-11 place-items-center border border-accent bg-bg font-display text-lg text-fg no-underline hover:bg-accent hover:text-surface"
      aria-label="Вернуться в начало страницы"
    >
      <span aria-hidden="true">↑</span>
    </a>
  );
}
