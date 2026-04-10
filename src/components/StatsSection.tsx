"use client";
import { motion } from "framer-motion";

const STATS = [
  { value: "12+", label: "Projects", desc: "Full-Stack & AI" },
  { value: "30+", label: "OSS PRs", desc: "Open source contributions" },
  { value: "B.Tech", label: "CS", desc: "Computer Science" },
  { value: "GSoC", label: "Aspirant", desc: "Google Summer of Code" },
];

export default function StatsSection() {
  return (
    <section className="border-t border-[var(--border-subtle)] bg-white">
      <div className="section-wrap">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--border-subtle)]">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="py-10 md:py-14 px-4 md:px-8 first:pl-0"
            >
              <div className="text-3xl md:text-5xl font-extrabold tracking-tighter text-[var(--text-primary)] leading-none">
                {stat.value}
              </div>
              <div className="text-lg md:text-2xl font-bold text-[var(--text-primary)] mt-1 tracking-tight">
                {stat.label}
              </div>
              <div className="text-[11px] md:text-xs text-[var(--text-muted)] mt-2 leading-relaxed">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
