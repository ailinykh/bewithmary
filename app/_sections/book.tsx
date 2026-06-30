import Image from 'next/image';
import cabinet from '@/public/assets/cabinet.jpg';
import { wrap } from '../_ui';
import { channels, type ContactChannel } from '../_content/home';

const channelBase =
  'group flex items-center justify-between gap-3.5 border border-accent bg-transparent px-4 py-3.5 text-fg transition-[background,color,transform] duration-200 hover:bg-accent hover:text-surface hover:-translate-y-px';
const channelName =
  'font-display text-base font-medium tracking-snug text-fg group-hover:text-surface';

function ChannelIcon({ src }: { src: string }) {
  return (
    <span
      className="grid h-7 w-7 flex-[0_0_28px] place-items-center [&_img]:block [&_img]:h-7 [&_img]:w-7 [&_img]:object-contain"
      aria-hidden="true"
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- decorative fixed-size SVG/PNG icons */}
      <img src={src} alt="" width={28} height={28} />
    </span>
  );
}

function ChannelLink({ channel }: { channel: ContactChannel }) {
  return (
    <a
      href={channel.href}
      target="_blank"
      rel="noopener noreferrer"
      className={channelBase}
      aria-label={channel.ariaLabel}
    >
      {channel.kind === 'featured' ? (
        <span className="grid items-start gap-1">
          <span className="font-mono text-xs tracking-eyebrow text-muted uppercase group-hover:text-[color-mix(in_oklab,var(--color-surface)_70%,transparent)]">
            {channel.kicker}
          </span>
          <span className="font-display text-sm leading-[1.3] font-medium tracking-snug text-fg group-hover:text-surface">
            {channel.title}
          </span>
        </span>
      ) : (
        <span className="inline-flex items-baseline gap-0.5">
          <span className={channelName}>
            {channel.name}
            {channel.nameSup && (
              <sup className="text-[.6em] font-normal">{channel.nameSup}</sup>
            )}
          </span>
        </span>
      )}
      <ChannelIcon src={channel.icon} />
    </a>
  );
}

export function BookSection() {
  return (
    <section
      className="relative bg-[oklch(93%_0.010_80)] py-[clamp(80px,12vw,144px)]"
      id="book"
    >
      <div
        className={`${wrap} grid gap-[clamp(40px,6vw,72px)] desk:grid-cols-[1fr_1fr_1.1fr] desk:items-stretch desk:gap-[clamp(32px,4vw,56px)]`}
      >
        <div className="reveal">
          <p className="max-w-[62ch] text-[clamp(17px,1.2vw+0.4rem,21px)] leading-normal text-muted">
            Чтобы записаться на консультацию или задать вопрос, напишите мне
          </p>
          <p className="mt-6 inline-block border-b border-[color-mix(in_oklab,var(--color-fg)_40%,transparent)] pb-1 font-display text-[clamp(18px,1vw+0.4rem,22px)] font-medium tracking-snug text-fg transition-[color,border-color] duration-200 hover:border-accent hover:text-accent">
            +7 920 287 61 81
          </p>
        </div>

        <div className="reveal">
          <div className="grid grid-cols-1 gap-2.5">
            {channels.map((channel) => (
              <ChannelLink key={channel.ariaLabel} channel={channel} />
            ))}
          </div>
        </div>

        <div className="reveal">
          <figure className="relative m-0 h-full w-full max-desk:aspect-4/5 max-desk:h-auto max-desk:max-w-90">
            <Image
              src={cabinet}
              alt="Кабинет Марии — Москва, м. Белорусская"
              fill
              sizes="(min-width: 960px) 40vw, 90vw"
              className="object-cover"
            />
          </figure>
        </div>

        <div className="reveal desk:col-[2/-1]">
          <p className="mt-8 max-w-[60ch] text-xs leading-[1.65] text-muted [&_a]:border-b [&_a]:border-[color-mix(in_oklab,var(--color-fg)_30%,transparent)] [&_a]:text-fg [&_a]:transition-[border-color] [&_a]:duration-150 [&_a:hover]:border-fg">
            Записываясь на консультацию, вы подтверждаете ознакомление с{' '}
            <a href="/consent">информированным согласием</a>.
          </p>
          <p className="mt-3.5 max-w-[60ch] text-xs leading-[1.65] text-muted">
            <sup>*</sup> Instagram принадлежит компании Meta Platforms Inc.,
            деятельность которой признана экстремистской и запрещена на
            территории Российской Федерации.
          </p>
        </div>
      </div>
    </section>
  );
}
