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

export const metadata: Metadata = {
  title: "Мария Ильиных — психотерапевт. КПТ и ACT",
  description:
    "Магистр психологии, КПТ- и ACT-терапевт. Помогаю справиться с перееданием, расстройствами пищевого поведения, тревогой, депрессией и зависимостями.",
  manifest: "/site.webmanifest",
  appleWebApp: { title: "Mary" },
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
