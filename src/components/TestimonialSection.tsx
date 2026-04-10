"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TestimonialSection() {
  return (
    <section className="section-spacing section-wrap bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <span className="label-mono text-[var(--accent)] text-[10px] uppercase tracking-widest leading-none mb-4 block">✦ ENDORSEMENTS</span>
        <h2 className="headline-mega leading-[0.95] tracking-tighter">
          See what they are<br />
          Saying about me
        </h2>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl md:rounded-3xl overflow-hidden bg-[var(--surface-elevated)]"
      >
        <Image
          src="/testimonial.png"
          alt="Testimonial Video Placeholder"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 90vw"
        />
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           <div className="w-16 h-16 md:w-24 md:h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all border border-white/20 pointer-events-auto shadow-2xl">
             <div className="w-0 h-0 border-y-[8px] border-y-transparent border-l-[14px] md:border-y-[12px] md:border-l-[20px] border-l-white ml-2 drop-shadow-md"></div>
           </div>
        </div>
      </motion.div>
    </section>
  );
}
