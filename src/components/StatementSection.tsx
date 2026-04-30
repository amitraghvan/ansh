"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function StatementSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  const WORDS = ["complexity", "into", "clarity", "—", "one", "system", "at", "a", "time."];

  return (
    <section ref={ref} style={{ position: "relative", padding: "8rem 0", overflow: "hidden", background: "var(--bg-2)" }}>
      <div style={{ position: "absolute", inset: 0, borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }} />

      {/* Solid flat grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        opacity: 0.1,
      }} />

      <div className="section-wrap" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.2em", color: "var(--fg-3)", textTransform: "uppercase", marginBottom: 32 }}
        >
          {new Date().getFullYear()} · Core Manifesto
        </motion.div>

        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 6vw, 6rem)",
          fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 1,
          display: "flex", flexWrap: "wrap", gap: "0.3em",
        }}>
          {["Turning"].map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60, rotateX: -60 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: "inline-block", color: "var(--fg)", perspective: 1000 }}
            >
              {word}
            </motion.span>
          ))}
          {WORDS.map((word, i) => (
            <motion.span
              key={word + i}
              initial={{ opacity: 0, y: 60, rotateX: -60 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: (i + 1) * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: "inline-block",
                perspective: 1000,
                color: (i > 1 && i < 5) ? "var(--red)" : "var(--fg)",
              }}
            >
              {word}
            </motion.span>
          ))}
        </h2>
      </div>
    </section>
  );
}
