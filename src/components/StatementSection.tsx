"use client";
import { motion } from "framer-motion";

export default function StatementSection() {
  return (
    <section className="bg-[#0f0f0f] text-white py-24 md:py-40 overflow-hidden relative border-t border-b border-[#222]">
      <div className="section-wrap relative">
        <div className="absolute top-0 right-4 text-right text-[10px] font-mono tracking-widest text-white/50 uppercase hidden md:block">
          {new Date().getFullYear()}, LATEST BUILD<br/>
          REMOTE WORK (IN)<br/>
          AI & SYSTEMS
        </div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[clamp(2.5rem,6vw,6rem)] font-extrabold leading-[0.95] tracking-tighter max-w-[90vw]"
        >
          Pushing boundaries<br />
          <span className="text-white/60">with artificial intelligence and a relentless<br /></span>
          passion one line of code at a time.
        </motion.h2>
      </div>
      
      {/* Background massive faded text (like 'Something I've dreamed of' in screenshot) */}
      <div className="absolute -bottom-10 left-0 right-0 overflow-hidden select-none pointer-events-none z-0 opacity-[0.03]">
        <h1 className="text-[15vw] font-extrabold whitespace-nowrap tracking-tighter">
          INTELLIGENT SYSTEMS
        </h1>
      </div>
    </section>
  );
}
