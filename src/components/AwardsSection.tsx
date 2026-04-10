"use client";
import { motion } from "framer-motion";

const AWARDS = [
  { count: "3x", title: "Open Source Champion", desc: "Recognized for significant contributions to enterprise-level repositories, improving performance and security." },
  { count: "5+", title: "Hackathon Winner", desc: "Secured top positions in national level coding hackathons for building innovative AI solutions." },
  { count: "1x", title: "GSoC Aspirant", desc: "Actively contributing and preparing for Google Summer of Code, demonstrating mastery in complex codebases." },
];

const LOGOS = ["React", "Next.js", "TypeScript", "Python", "TensorFlow", "PostgreSQL", "MongoDB", "Framer", "LangChain"];

export default function AwardsSection() {
  return (
    <section className="bg-white border-t border-[var(--border-subtle)]">
      {/* Awards Section */}
      <div className="section-spacing section-wrap grid md:grid-cols-2 gap-12 md:gap-20">
        <div>
           <span className="label-mono text-[var(--accent)] text-[10px] uppercase tracking-widest">✦ FEATURED & RECOGNIZED</span>
           <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold tracking-tighter leading-[0.95] mt-6">
             Awards &<br />
             Recognitions
           </h2>
        </div>
        
        <div className="space-y-12 mt-4 md:mt-16">
          {AWARDS.map((award, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              whileHover={{ x: 10, transition: { duration: 0.2 } }}
              className="p-4 -mx-4 rounded-xl hover:bg-[var(--surface)] transition-colors cursor-default"
            >
               <div className="text-[var(--accent)] font-mono text-[10px] mb-2 tracking-widest">0{i+1}</div>
               <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2">
                 {award.title} ({award.count})
               </h3>
               <p className="text-[var(--text-tertiary)] text-sm leading-relaxed max-w-sm">
                 {award.desc}
               </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee Section */}
      <div className="bg-[#0f0f0f] text-white py-10 overflow-hidden flex whitespace-nowrap">
         <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex gap-12 items-center px-12 shrink-0"
         >
            {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
              <span key={i} className="text-xl font-bold tracking-tight text-white/50 hover:text-white transition-colors cursor-default">
                {logo}
              </span>
            ))}
         </motion.div>
      </div>
    </section>
  );
}
