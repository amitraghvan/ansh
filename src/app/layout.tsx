import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

/* ─── Fonts ──────────────────────────────────────────────── */
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

/* ─── SEO Metadata ──────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Amit Kumar — AI Engineer & Builder",
  description:
    "B.Tech Computer Science student passionate about AI, automation, and building smart systems that solve real-world problems. Aspiring to become a world-class AI engineer.",
  keywords: [
    "Amit Kumar",
    "AI Engineer",
    "Portfolio",
    "Computer Science",
    "Machine Learning",
    "Python",
    "Next.js",
    "Full Stack Developer",
    "India",
  ],
  authors: [{ name: "Amit Kumar" }],
  openGraph: {
    title: "Amit Kumar — AI Engineer & Builder",
    description:
      "B.Tech CS student | AI enthusiast | Building things that matter.",
    type: "website",
    locale: "en_IN",
    siteName: "Amit Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amit Kumar — AI Engineer & Builder",
    description:
      "B.Tech CS student | AI enthusiast | Building things that matter.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full antialiased bg-white">{children}</body>
    </html>
  );
}
