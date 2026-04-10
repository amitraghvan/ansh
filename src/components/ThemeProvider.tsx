"use client";
/**
 * ThemeProvider — Keeps the document dark at all times to
 * match the editorial dark portfolio design.
 */
import { useEffect } from "react";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Always enforce dark mode
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
  }, []);

  return <>{children}</>;
}
