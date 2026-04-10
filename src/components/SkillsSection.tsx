"use client";
import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "Core Computer Science",
    skills: ["C++", "Java", "C", "Data Structures", "Algorithms", "Object-Oriented Programming (OOP)", "Operating Systems", "Computer Networks", "DBMS", "System Design"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["Python", "TensorFlow", "PyTorch", "Pandas", "NumPy", "Scikit-Learn", "Computer Vision", "NLP", "LangChain", "OpenAI APIs", "Hugging Face"],
  },
  {
    title: "Full-Stack Development",
    skills: ["Next.js", "React 19", "TypeScript", "JavaScript", "Node.js", "Express", "HTML/CSS", "Tailwind CSS", "REST APIs", "GraphQL"],
  },
  {
    title: "Database, Cloud & Tools",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma ORM", "Git/GitHub", "Linux/Bash", "Docker", "AWS", "Vercel", "Figma"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-spacing section-wrap border-t border-[var(--border-subtle)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <span className="label-mono">Services & Skills</span>
        <h2 className="headline-section mt-4">
          Simplicity<br />
          through design<br />
          & Strategy.
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {SKILL_CATEGORIES.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="p-8 border border-[var(--border-subtle)] bg-[var(--surface)] rounded-2xl hover:border-[var(--border-strong)] hover:shadow-xl transition-all group"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold tracking-tight text-[var(--text-primary)]">
                {cat.title}
              </h3>
              <span className="text-[11px] font-mono text-[var(--text-muted)] tracking-wider">
                0{i + 1}
              </span>
            </div>

            <motion.div 
              className="flex flex-wrap gap-2.5 mt-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: i * 0.1 + 0.2
                  }
                }
              }}
            >
              {cat.skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 12 } }
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-white border border-[var(--border-subtle)] text-[var(--text-secondary)] text-sm font-medium rounded-full hover:bg-[var(--text-primary)] hover:text-white hover:border-transparent transition-colors cursor-default shadow-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
