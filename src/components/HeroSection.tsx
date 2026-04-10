"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-end relative overflow-hidden pb-8 md:pb-16 pt-24">
      
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5C3A1]/30 via-[#F8E6D4]/20 to-white"></div>
      </div>

      {/* Profile Image — right side */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-0 top-0 bottom-0 w-[45%] hidden lg:block z-0"
        >
          <Image
          src="/profile.png"
          alt="Amit Kumar"
          fill
          className="object-cover object-top"
          priority
          sizes="45vw"
        />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent z-10 transition-opacity duration-1000"></div>
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent z-10"></div>
        </motion.div>

      {/* Content */}
      <div className="section-wrap relative z-10">
        
        {/* Small intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="text-[13px] font-medium text-[var(--text-tertiary)] tracking-wider">
            Hi, I multidisciplinary
          </span>
          <br />
          <span className="text-[13px] font-medium text-[var(--text-tertiary)] tracking-wider">
            AI Engineer & Builder
          </span>
        </motion.div>

        {/* Mega Name */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="headline-mega hover:scale-[1.02] transition-transform duration-500 origin-left">
            Amit
            <br />
            Kumar
          </h1>
        </motion.div>

        {/* Bottom row with location + availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-end justify-between mt-8 md:mt-12 max-w-[55%]"
        >
          <div className="text-[12px] text-[var(--text-tertiary)] leading-relaxed">
            <span className="font-semibold text-[var(--text-secondary)]">Based in India*</span>
            <br />
            Available worldwide
          </div>
          
          {/* Signature */}
          <div className="font-signature text-3xl md:text-5xl text-[var(--accent)] opacity-80 select-none">
            Amit
          </div>
        </motion.div>

      </div>

      {/* Mobile Profile Image */}
      <div className="lg:hidden relative w-full aspect-square max-w-sm mx-auto mt-8 rounded-2xl overflow-hidden">
        <Image
          src="/profile.png"
          alt="Amit Kumar"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

    </section>
  );
}
