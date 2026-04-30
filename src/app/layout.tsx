import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  display: "swap",
});
const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amit Kumar — AI Engineer & Builder",
  description: "Multidisciplinary AI Engineer crafting autonomous agents, intelligent systems & high-performance digital products.",
  keywords: ["Amit Kumar", "AI Engineer", "Portfolio", "Machine Learning", "Next.js", "LangChain"],
  authors: [{ name: "Amit Kumar" }],
  openGraph: {
    title: "Amit Kumar — AI Engineer & Builder",
    description: "B.Tech CS | AI enthusiast | Building things that matter.",
    type: "website",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
