"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const CATS = [
  { num: "01", title: "Frontend Engineering", skills: ["React 19", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "Redux", "WebSockets", "Figma"] },
  { num: "02", title: "Backend Architecture", skills: ["Node.js", "Express", "NestJS", "Python", "C++", "GraphQL", "REST APIs", "Microservices"] },
  { num: "03", title: "Cloud & Infrastructure", skills: ["PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Vercel", "Prisma", "Linux", "CI/CD"] },
  { num: "04", title: "AI & Core Systems",      skills: ["TensorFlow", "LangChain", "OpenAI", "System Design", "Data Structures", "Algorithms", "NLP"] },
];

export default function SkillsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} id="skills" style={{ background: "var(--bg)", position: "relative" }}>
      <div className="section-wrap section-spacing">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "clamp(2.5rem, 5vw, 4.5rem)" }}
        >
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", letterSpacing: "0.3em", color: "#888888", textTransform: "uppercase", fontWeight: 600 }}>Services & Stack</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 700, letterSpacing: "-0.05em", color: "var(--fg)", margin: "16px auto 0", maxWidth: 600, lineHeight: 1 }}>
            Tools of the <span style={{ color: "var(--red)" }}>craft.</span>
          </h2>
        </motion.div>

        {/* Responsive grid: 1 col on mobile, 2 col on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CATS.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-6 md:p-10"
              style={{ position: "relative", overflow: "hidden", cursor: "default", border: "1px solid var(--border)", background: "var(--bg)" }}
            >
              {/* Top color bar */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "var(--red)" }} />

              {/* BG number watermark */}
              <div style={{
                position: "absolute", right: -10, top: -20,
                fontFamily: "var(--font-display)", fontWeight: 900,
                fontSize: 120, color: "var(--fg-3)", opacity: 0.05,
                lineHeight: 1, userSelect: "none",
              }}>
                {cat.num}
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                <div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: 10, color: "var(--red)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 8, fontWeight: 600 }}>
                    {cat.num}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.15rem, 2.5vw, 1.35rem)", fontWeight: 700, color: "var(--fg)", letterSpacing: "-0.02em" }}>
                    {cat.title}
                  </h3>
                </div>
                <div style={{ width: 36, height: 36, borderRadius: 0, background: "transparent", border: `1px solid var(--border-2)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <div style={{ width: 14, height: 14, borderRadius: "50%", background: "var(--red)" }} />
                </div>
              </div>

              <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: 0.3 + i * 0.1 } } }}
                style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
              >
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={{ hidden: { opacity: 0, scale: 0.7 }, visible: { opacity: 1, scale: 1 } }}
                    whileHover={{ scale: 1.08, borderColor: "var(--red)", color: "var(--red)" }}
                    className="tag text-[0.7rem] md:text-[0.75rem]"
                    style={{ cursor: "default", border: "1px solid var(--border-2)", color: "var(--fg-2)", background: "transparent" }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
