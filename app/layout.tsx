import type { Metadata } from "next";
import { Manrope, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  style: "italic",
  variable: "--font-cormorant",
  display: "swap",
});

const title = "Мария Ильиных — психотерапевт. КПТ и ACT";
const description =
  "Магистр психологии, КПТ- и ACT-терапевт. Помогаю справиться с перееданием, расстройствами пищевого поведения, тревогой, депрессией и зависимостями.";

const ogImage = {
  url: "/web-app-manifest-512x512.png",
  width: 512,
  height: 512,
  alt: "Мария Ильиных",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bewithmary.com"),
  title,
  description,
  manifest: "/site.webmanifest",
  appleWebApp: { title: "Mary" },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: title,
    url: "/",
    title,
    description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
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
