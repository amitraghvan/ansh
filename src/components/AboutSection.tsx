"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="section-spacing section-wrap border-t border-[var(--border-subtle)]">
      <div className="grid lg:grid-cols-[0.4fr_1fr] gap-12 lg:gap-20 items-start">
        
        {/* Left — Photo + Signature */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-[var(--surface-elevated)]">
            <Image
              src="/profile.png"
              alt="Amit Kumar"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 30vw"
            />
          </div>
          <div className="font-signature text-4xl text-[var(--accent)] mt-4 opacity-70 select-none">
            Amit
          </div>
        </motion.div>

        {/* Right — Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="label-mono">✦ WHO I AM ✦</span>
          </div>

          <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold leading-[1.25] tracking-tight text-[var(--text-primary)] mb-8 max-w-2xl">
            A passionate AI Engineer committed to blending&nbsp;
            creativity with user-focused design, crafting seamless digital experiences that captivate and engage. Skilled in translating concepts into visually striking and intuitive interfaces that leave a lasting impact.
          </h2>

          <a href="#contact" className="btn-ghost group">
            Let&apos;s Chat
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
