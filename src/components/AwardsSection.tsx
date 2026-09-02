"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AWARDS = [
  { num: "01", category: "ACHIEVEMENT", count: "4th Rank", title: "Code-a-Hunt Hackathon", desc: "Secured 4th Rank in competitive coding hackathon solving real-world algorithmic problems." },
  { num: "02", category: "ACHIEVEMENT", count: "Winner",   title: "Youth Vibe Video Grapher", desc: "Won the competition and secured the winning position in Youth Vibe festival." },
  { num: "03", category: "ACHIEVEMENT", count: "Medal",    title: "Grammar Club Recognition", desc: "Awarded medal and official recognition for distinction in communication and language arts." },
  { num: "04", category: "CERTIFICATION", count: "Infosys", title: "Programming Using C++", desc: "Certified by Infosys Springboard (August 2026) in C++ object-oriented design and fundamentals." },
  { num: "05", category: "CERTIFICATION", count: "Infosys", title: "Introduction to Artificial Intelligence", desc: "Certified by Infosys Springboard (March 2026) covering AI foundations and intelligent systems." },
  { num: "06", category: "CERTIFICATION", count: "Infosys", title: "Python for Data Science", desc: "Certified by Infosys Springboard (February 2026) in Python data analysis and computational problem-solving." },
  { num: "07", category: "EDUCATION", count: "8.30 CGPA", title: "Lovely Professional University", desc: "Bachelor of Technology in Computer Science and Engineering (Aug 2025 – Present) · Phagwara, Punjab." },
  { num: "08", category: "EDUCATION", count: "87% PCM",   title: "Kendriya Vidyalaya", desc: "Intermediate PCM (87%, 2024–2025) & Matriculation (89%, 2022–2023) · Kanpur, Uttar Pradesh." },
];

const MARQUEE = ["C", "C++", "Python", "JavaScript", "SQL", "HTML", "CSS", "Flask", "ESP32", "VS Code", "PyCharm", "GitHub", "Jupyter", "Antigravity"];

export default function AwardsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} style={{ background: "var(--bg)", position: "relative", overflow: "hidden" }}>

      {/* Awards */}
      <div className="section-wrap section-spacing">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-20 items-start">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="static lg:sticky top-32"
          >
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", letterSpacing: "0.3em", color: "#888888", textTransform: "uppercase", fontWeight: 600 }}>Credentials &amp; Milestones</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 700, letterSpacing: "-0.05em", color: "var(--fg)", margin: "16px 0 0 0", lineHeight: 1 }}>
              Achievements &amp;<br />
              <span style={{ color: "var(--red)" }}>education.</span>
            </h2>
            <p className="body-large" style={{ marginTop: 20, color: "var(--fg-3)", fontSize: "1rem" }}>
              Verified credentials, competitive hackathon ranks, and academic journey.
            </p>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {AWARDS.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.7 }}
                whileHover={{ x: 6, borderColor: "var(--red)" }}
                className="p-5 md:p-8"
                style={{ border: `1px solid var(--border)`, cursor: "default", background: "var(--bg)", transition: "all 0.3s" }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 10, gap: 12 }}>
                  <div>
                    <div style={{ fontFamily: "var(--font-sans)", fontSize: 10, color: "var(--red)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 6, fontWeight: 600 }}>
                      {a.num} · {a.category}
                    </div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)", fontWeight: 700, color: "var(--fg)", letterSpacing: "-0.02em" }}>{a.title}</h3>
                  </div>
                  <span style={{ background: "var(--red)", color: "#111", border: `1px solid var(--red)`, fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 800, padding: "4px 10px", borderRadius: 0, letterSpacing: "0.1em", flexShrink: 0 }}>
                    {a.count}
                  </span>
                </div>
                <p style={{ fontSize: "0.88rem", color: "var(--fg-3)", lineHeight: 1.65 }}>{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Infinite marquee */}
      <div style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "1.5rem 0", overflow: "hidden", background: "var(--bg-2)" }}>
        <motion.div
          animate={{ x: [0, -1400] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          style={{ display: "flex", gap: "5rem", alignItems: "center", whiteSpace: "nowrap", willChange: "transform" }}
        >
          {[...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE].map((name, i) => (
            <span key={i} style={{ display: "flex", alignItems: "center", gap: "5rem" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.15em", color: "var(--fg-3)", textTransform: "uppercase" }}>
                {name}
              </span>
              <span style={{ color: "var(--red)", fontSize: 8 }}>✦</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
