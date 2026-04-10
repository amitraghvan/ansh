"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white pt-20 pb-0 overflow-hidden relative border-t border-[var(--border-subtle)]">
      <div className="section-wrap relative z-10">
        
        {/* Top Split Area */}
        <div className="grid lg:grid-cols-[auto_1fr_1fr] gap-12 lg:gap-20 pb-20 border-b border-white/10">
          
          {/* 1. Portrait */}
          <div className="relative w-48 h-56 md:w-64 md:h-72 rounded-xl overflow-hidden shrink-0">
             <Image 
               src="/profile.png" 
               alt="Amit Kumar"
               fill
               className="object-cover"
               sizes="300px"
             />
             {/* Signature absolute */}
             <div className="absolute -bottom-8 -right-8 w-40 aspect-square opacity-70 pointer-events-none rotate-[-10deg]">
                <span className="font-signature text-6xl text-[var(--accent)]">Amit</span>
             </div>
          </div>

          {/* 2. Intro Text */}
          <div className="flex flex-col justify-center gap-12 max-w-sm">
             <p className="text-sm md:text-base font-medium text-white/90">
               Let&apos;s create something extraordinary together.
             </p>
             <p className="text-xs md:text-sm text-white/50 leading-relaxed">
               Hit me up if you are looking for a fast, reliable AI & Full-Stack Engineer who can bring your intelligent system visions to life.
             </p>
          </div>

          {/* 3. Massive Email Pill */}
          <div className="flex items-center lg:justify-end">
             <a href="mailto:amit@example.com" className="inline-flex items-center justify-center w-full lg:w-auto px-8 md:px-12 py-6 md:py-8 bg-white/5 hover:bg-white/10 transition-colors border border-white/10 rounded-[3rem] group">
                <span className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold tracking-tighter text-white group-hover:text-[var(--accent)] transition-colors">
                  Hey<span className="text-[var(--accent)]">@</span>Amit.ai
                </span>
             </a>
          </div>

        </div>

        {/* Links Area */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
           
           <div className="space-y-6">
              <h4 className="text-[10px] font-mono tracking-widest text-[#555] uppercase">Quick Links</h4>
              <nav className="flex flex-col gap-4">
                 <a href="#about" className="text-xs font-bold text-white/70 hover:text-white uppercase tracking-wider transition-colors">About</a>
                 <a href="#projects" className="text-xs font-bold text-white/70 hover:text-white uppercase tracking-wider transition-colors">Works</a>
                 <a href="#skills" className="text-xs font-bold text-white/70 hover:text-white uppercase tracking-wider transition-colors">Services</a>
                 <a href="#journey" className="text-xs font-bold text-[var(--accent)] hover:text-white uppercase tracking-wider transition-colors drop-shadow-[0_0_8px_rgba(232,83,62,0.5)]">Journey</a>
              </nav>
           </div>

           <div className="space-y-6">
              <h4 className="text-[10px] font-mono tracking-widest text-[#555] uppercase">Portfolio</h4>
              <nav className="flex flex-col gap-4">
                 <a href="#" className="text-xs font-bold text-white/70 hover:text-white uppercase tracking-wider transition-colors">GitHub</a>
                 <a href="#" className="text-xs font-bold text-white/70 hover:text-white uppercase tracking-wider transition-colors">Open Source</a>
                 <a href="#" className="text-xs font-bold text-white/70 hover:text-white uppercase tracking-wider transition-colors">AI Models</a>
              </nav>
           </div>

           <div className="space-y-6">
              <h4 className="text-[10px] font-mono tracking-widest text-[#555] uppercase">Social</h4>
              <nav className="flex flex-col gap-4">
                 <a href="#" className="text-xs font-bold text-white/70 hover:text-white uppercase tracking-wider transition-colors">LinkedIn</a>
                 <a href="#" className="text-xs font-bold text-white/70 hover:text-white uppercase tracking-wider transition-colors">Twitter &quot;X&quot;</a>
                 <a href="#" className="text-xs font-bold text-white/70 hover:text-white uppercase tracking-wider transition-colors">Instagram</a>
              </nav>
           </div>

        </div>

      </div>

      {/* Massive Background Text */}
      <div className="relative mt-8 select-none pointer-events-none w-full overflow-hidden flex justify-center translate-y-12">
         <h1 className="text-[22vw] font-extrabold text-white/[0.04] whitespace-nowrap tracking-tighter leading-none">
            Amit Kumar
         </h1>
      </div>
    </footer>
  );
}
