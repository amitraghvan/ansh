"use client";
import { motion } from "framer-motion";

const TIMELINE = [
  {
    chapter: "01",
    title: "The Awakening",
    desc: "Growing up with limited resources, I discovered programming. Started with a basic phone, transitioning to C++, and immersed myself in Data Structures and Algorithms.",
    tech: ["C++", "DSA", "Problem Solving"],
  },
  {
    chapter: "02",
    title: "Building the Foundation",
    desc: "Realized the power of creating real products. Shifted deep into full-stack development, mastering the modern web ecosystem from scratch to production.",
    tech: ["React.js", "Node.js", "MongoDB", "Tailwind"],
  },
  {
    chapter: "03",
    title: "Full-Stack Mastery",
    desc: "Architected heavily optimized platforms like DGTravel, pushing boundaries of UX. Connected complex PostgreSQL databases with blazing-fast Next.js frontends.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
  },
  {
    chapter: "04",
    title: "The AI Horizon",
    desc: "Pivoting to intelligent systems — building AI-first applications using LLMs, Python, LangChain. My trajectory is becoming a world-class AI Engineer.",
    tech: ["Python", "TensorFlow", "LangChain", "OpenAI"],
  },
];

export default function TimelineSection() {
  return (
    <section
      id="journey"
      className="section-spacing section-wrap border-t border-[var(--border-subtle)]"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <span className="label-mono">The Journey</span>
        <h2 className="headline-section mt-4">
          Evolution of<br />
          an Engineer.
        </h2>
      </motion.div>

      <div className="space-y-0">
        {TIMELINE.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="grid md:grid-cols-[100px_1fr] gap-4 md:gap-10 py-10 border-t border-[var(--border-subtle)] group"
          >
            {/* Number */}
            <div className="text-5xl md:text-6xl font-extrabold text-[var(--surface-elevated)] group-hover:text-[var(--accent)] transition-colors tracking-tighter leading-none">
              {item.chapter}
            </div>

            {/* Content */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[var(--text-primary)] mb-3">
                {item.title}
              </h3>
              <p className="body-base mb-5 max-w-lg">{item.desc}</p>

              <div className="flex flex-wrap gap-2">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 text-xs font-medium bg-[var(--surface)] border border-[var(--border-subtle)] text-[var(--text-tertiary)] rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
