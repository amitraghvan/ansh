"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

const PROJECTS = [
  {
    title: "Open Source Vanguard",
    category: "Global Contributions",
    description:
      "Significant contributions to large-scale enterprise repositories, writing production-grade code that impacts thousands of developers globally.",
    tags: ["C++", "Python", "Git", "CI/CD"],
    image: "/proj-opensource.png",
    link: "https://github.com/amitraghvan",
  },
  {
    title: "AI Model Observatory",
    category: "Machine Learning",
    description:
      "Intelligent system for tracking and training machine learning models. Built with advanced prompt engineering using LangChain and Python.",
    tags: ["Python", "TensorFlow", "FastAPI", "React"],
    image: "/proj-ai-obs.png",
    link: "#",
  },
  {
    title: "Agentic Portfolio",
    category: "Immersive UI/UX",
    description:
      "A highly engineered digital environment utilizing modern web capabilities to serve as a premium showcase of technical proficiency.",
    tags: ["Next.js", "React 19", "Tailwind", "Motion"],
    image: "/proj-portfolio.png",
    link: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section-spacing section-wrap border-t border-[var(--border-subtle)]"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-end justify-between mb-14"
      >
        <div>
          <span className="label-mono">Selected Work</span>
          <h2 className="headline-section mt-4">
            Projects Built<br />
            With Purpose.
          </h2>
        </div>
      </motion.div>

      <div className="space-y-6">
        {PROJECTS.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <TiltCard>
              <a
                href={p.link}
                target={p.link !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex flex-col md:flex-row gap-6 p-6 md:p-8 border border-[var(--border-subtle)] rounded-2xl hover:border-[var(--border-strong)] bg-[var(--surface)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all cursor-pointer h-full"
              >
            {/* Image */}
            <div className="relative aspect-video md:aspect-[4/3] w-full md:w-2/5 rounded-xl overflow-hidden bg-[var(--surface-elevated)] shrink-0">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-[0.22,1,0.36,1]"
                sizes="(max-width: 768px) 100vw, 35vw"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between py-2 flex-1 md:w-3/5">
              <div>
                <div className="text-[11px] font-mono text-[var(--text-muted)] tracking-wider uppercase mb-2">
                  {p.category}
                </div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                  {p.title}
                </h3>
                <p className="body-base text-sm md:text-base max-w-md">
                  {p.description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-6">
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-[var(--surface)] border border-[var(--border-subtle)] text-[var(--text-tertiary)] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="w-10 h-10 rounded-full border border-[var(--border-strong)] flex items-center justify-center group-hover:bg-[var(--text-primary)] group-hover:text-white group-hover:border-transparent transition-all shrink-0 ml-4">
                  <ArrowUpRight size={16} />
                </div>
              </div>
              </div>
            </a>
          </TiltCard>
        </motion.div>
        ))}
      </div>
    </section>
  );
}
