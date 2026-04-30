"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TIMELINE = [
  { num: "01", year: "2021", title: "The Awakening",        desc: "Started with a basic phone. Taught myself C++ and dove deep into Data Structures, Algorithms, and competitive programming. The obsession began.", tags: ["C++", "DSA", "Problem Solving"] },
  { num: "02", year: "2022", title: "Building the Foundation", desc: "Discovered the power of creating real products. Mastered full-stack development from scratch — React, Node.js, MongoDB. Shipped first production app.", tags: ["React.js", "Node.js", "MongoDB"] },
  { num: "03", year: "2023", title: "Full-Stack Mastery",   desc: "Architected complex platforms. Connected PostgreSQL databases with blazing Next.js frontends. Open-source contributions began reaching thousands of devs.", tags: ["Next.js", "TypeScript", "PostgreSQL"] },
  { num: "04", year: "2024+", title: "The AI Horizon",     desc: "Pivoting fully to intelligent systems. Building autonomous agents, fine-tuning LLMs, deploying AI-first applications. The future is being written now.", tags: ["Python", "LangChain", "OpenAI", "TF"] },
];

export default function TimelineSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} id="journey" style={{ background: "var(--bg)", position: "relative", overflow: "hidden" }}>
      {/* Background decoration */}
      <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", top: 0, bottom: 0, width: 1, background: "var(--border)", pointerEvents: "none" }} />

      <div className="section-wrap section-spacing">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: "center", marginBottom: "5rem" }}
        >
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", letterSpacing: "0.3em", color: "#888888", textTransform: "uppercase", fontWeight: 600 }}>The Journey</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 700, letterSpacing: "-0.05em", color: "var(--fg)", margin: "16px 0 0 0", lineHeight: 1 }}>
            Evolution of <span style={{ color: "var(--red)" }}>an engineer.</span>
          </h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {TIMELINE.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.01 }}
              className="glass"
              style={{
                display: "grid",
                gridTemplateColumns: "100px 1fr",
                gap: "2rem",
                padding: "2.5rem",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
                border: `1px solid var(--border)`,
                borderLeft: `3px solid var(--red)`,
                background: "var(--bg)",
                transition: "all 0.3s"
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--red)" }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.borderLeftColor = "var(--red)"; }}
            >
              {/* BG number */}
              <div style={{
                position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)",
                fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 100,
                color: "var(--fg-3)", opacity: 0.05, pointerEvents: "none", userSelect: "none",
              }}>
                {item.num}
              </div>

              {/* Year + number */}
              <div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 10, color: "var(--red)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 8, fontWeight: 600 }}>
                  {item.num}
                </div>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.4rem",
                  color: "var(--red)", letterSpacing: "-0.04em",
                }}>
                  {item.year}
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 700, color: "var(--fg)", marginBottom: 12, letterSpacing: "-0.02em" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.95rem", color: "var(--fg-3)", lineHeight: 1.75, marginBottom: 16, maxWidth: 560 }}>
                  {item.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {item.tags.map(t => (
                    <span key={t} className="tag" style={{ border: "1px solid var(--border-2)", color: "var(--fg-2)", background: "transparent" }}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
