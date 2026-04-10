"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Works", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
];

const go = (href: string) => {
  const el = document.getElementById(href.replace("#", ""));
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="section-wrap flex items-center justify-between">
        {/* Left: Time */}
        <div className="hidden md:flex items-center gap-2 text-[12px] font-mono text-[var(--text-muted)] tracking-wider uppercase min-w-[200px]">
          <span>INDIA TIME</span>
          <span className="text-[var(--text-tertiary)]">— {time}</span>
        </div>

        {/* Center: Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                go(l.href);
              }}
              className="text-[13px] font-medium text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors tracking-wide uppercase"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right: Contact Button */}
        <div className="hidden md:flex items-center justify-end min-w-[200px]">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              go("#contact");
            }}
            className="btn-primary text-[13px] py-2.5 px-5"
          >
            Contact
          </a>
        </div>

        {/* Mobile: Logo + Toggle */}
        <div className="md:hidden flex items-center justify-between w-full">
          <span className="text-sm font-bold tracking-tight text-[var(--text-primary)]">
            Amit Kumar
          </span>
          <button
            className="text-[var(--text-secondary)] p-1"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-[var(--border-subtle)] p-6 flex flex-col gap-5 shadow-xl">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                go(l.href);
              }}
              className="text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] uppercase tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              setOpen(false);
              go("#contact");
            }}
            className="btn-primary text-sm w-fit"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
