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
  title: "Ansh Verma — Full-Stack Developer",
  description: "Computer Science & Engineering student and Full-Stack Developer who builds practical web applications, IoT systems, and AI-enabled solutions.",
  keywords: ["Ansh Verma", "Full-Stack Developer", "Portfolio", "Computer Science", "IoT", "Flask", "Python", "C++", "Next.js"],
  authors: [{ name: "Ansh Verma" }],
  openGraph: {
    title: "Ansh Verma — Full-Stack Developer",
    description: "Computer Science & Engineering student and Full-Stack Developer who builds practical web applications, IoT systems, and AI-enabled solutions.",
    type: "website",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full`}>
      <body className="min-h-full antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
