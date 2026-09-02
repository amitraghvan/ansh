"use client";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsAppIcon } from "./SocialIcons";

const LINKS = [
  { label: "About",   href: "#about"    },
  { label: "Works",   href: "#projects" },
  { label: "Skills",  href: "#skills"   },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [time, setTime]         = useState("");
  const { theme, toggle }       = useTheme();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.getElementById(href.replace("#", ""));
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[var(--bg)] border-b border-[var(--border)]"
            : "bg-transparent"
        }`}
        style={{ padding: scrolled ? "12px 0" : "22px 0" }}
      >
        <div className="section-wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <motion.a href="#" whileHover={{ scale: 1.03 }} style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{
              width: 34, height: 34,
              background: "var(--red)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 15, color: "#111",
            }}>A</div>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(13px, 3.5vw, 15px)", color: "var(--fg)", letterSpacing: "-0.02em", textTransform: "uppercase" }}>
                Ansh
              </div>
              <div className="hidden sm:block" style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--fg-3)", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                {time} · PUNJAB, INDIA
              </div>
            </div>
          </motion.a>

          {/* Desktop nav */}
          <nav className="hidden md:flex" style={{ gap: 40, alignItems: "center" }}>
            {LINKS.map((l, i) => (
              <motion.button
                key={l.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                onClick={() => scrollTo(l.href)}
                whileHover={{ color: "var(--red)" }}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 600,
                  letterSpacing: "0.15em", textTransform: "uppercase",
                  color: "var(--fg-2)", padding: 0, transition: "color 0.2s",
                }}
              >
                {l.label}
              </motion.button>
            ))}
          </nav>

          {/* Right actions */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {/* Theme toggle removed */}

            {/* CTA */}
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              href="https://wa.me/919120850085"
              target="_blank" rel="noreferrer"
              className="btn-primary hidden md:flex"
              style={{ padding: "0.6rem 1.4rem", fontSize: "0.75rem", textDecoration: "none", gap: "0.5rem", alignItems: "center" }}
            >
              <WhatsAppIcon size={14} />
              Connect
            </motion.a>

            {/* Mobile toggle */}
            <button
              className="md:hidden"
              onClick={() => setOpen(v => !v)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "var(--fg)" }}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{
              position: "fixed", top: 0, right: 0, bottom: 0, width: "min(80vw, 360px)",
              background: "var(--bg-2)", borderLeft: "1px solid var(--border)",
              zIndex: 100, padding: "6rem 2rem 2rem",
              display: "flex", flexDirection: "column", gap: "2rem",
            }}
          >
            {LINKS.map((l, i) => (
              <motion.button
                key={l.href}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => scrollTo(l.href)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  textAlign: "left", fontSize: 28, fontWeight: 800,
                  fontFamily: "var(--font-display)", color: "var(--fg)",
                  letterSpacing: "-0.03em", textTransform: "uppercase",
                }}
              >
                {l.label}
              </motion.button>
            ))}
            <div style={{ display: "flex", gap: 12, marginTop: "auto" }}>
              {/* Mobile theme toggle removed */}
              <a href="https://wa.me/919120850085" target="_blank" rel="noreferrer" className="btn-primary" style={{ flex: 2, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", textDecoration: "none" }}>
                <WhatsAppIcon size={18} />
                Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", zIndex: 99 }}
        />
      )}
    </>
  );
}
