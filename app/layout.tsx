import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

// Self-hosted, subset to latin+cyrillic (see app/fonts/). Variable weight axes.
const manrope = localFont({
  src: './fonts/manrope-cyrillic-latin.woff2',
  weight: '500 700',
  variable: '--font-manrope',
  display: 'swap',
});
const inter = localFont({
  src: './fonts/inter-cyrillic-latin.woff2',
  weight: '400 500',
  variable: '--font-inter',
  display: 'swap',
});
// Decorative pull-quote face only. `optional` + no preload keeps it off the
// LCP critical path: the large first-viewport hero quote paints immediately
// with Georgia instead of waiting on (or repainting for) a late web font.
const cormorant = localFont({
  src: './fonts/cormorant-italic-cyrillic-latin.woff2',
  weight: '400 500',
  style: 'italic',
  variable: '--font-cormorant',
  display: 'optional',
  preload: false,
  fallback: ['Georgia', 'serif'],
});

const title = 'Мария Ильиных — психотерапевт. КПТ и ACT';
const description =
  'Магистр психологии, КПТ- и ACT-терапевт. Помогаю справиться с перееданием, расстройствами пищевого поведения, тревогой, депрессией и зависимостями.';

const ogImage = {
  url: '/web-app-manifest-512x512.png',
  width: 512,
  height: 512,
  alt: 'Мария Ильиных',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://bewithmary.com'),
  title,
  description,
  manifest: '/site.webmanifest',
  appleWebApp: { title: 'Mary' },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: title,
    url: '/',
    title,
    description,
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [ogImage.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${inter.variable} ${cormorant.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
