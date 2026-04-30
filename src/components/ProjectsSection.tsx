"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const PROJECTS = [
  {
    num: "01",
    title: "Cinematic Beats Hub",
    category: "AI Music Platform",
    description: "An immersive platform where sound meets soul. Featuring AI-generated soundtracks and a premium dark studio aesthetic.",
    tags: ["React Three Fiber", "AI/LLM", "TypeScript", "Tailwind"],
    image: "/proj-cinematic.png",
    link: "https://cinematic-beats-hub.vercel.app/",
    stat: "3D & AI",
  },
  {
    num: "02",
    title: "Secura AI",
    category: "AI Career Platform",
    description: "A next-generation career platform using AI to optimize resumes, track applications, and provide intelligent interview coaching.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    image: "/proj-campus.png",
    link: "https://campus-careers-mate-948h.vercel.app/",
    stat: "Career Hub",
  },
  {
    num: "03",
    title: "Vastrika Group",
    category: "Industrial E-Commerce",
    description: "Full-stack supply chain and digital storefront for Yadav Traders, facilitating government and institutional supplies at scale.",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Tailwind"],
    image: "/proj-vastrika.png",
    link: "https://vastrika-prime-hub.vercel.app/",
    stat: "B2B Portal",
  },
  {
    num: "04",
    title: "DG Travel",
    category: "Travel & Tourism",
    description: "A premium travel booking engine featuring dynamic itineraries, high-res destination discovery, and seamless checkout.",
    tags: ["Next.js", "React", "Node.js", "Stripe API"],
    image: "/proj-dgtravel.png",
    link: "https://www.dgtravel.in/",
    stat: "Live Site",
  },
  {
    num: "05",
    title: "Astro AI",
    category: "Digital Growth Infrastructure",
    description: "Intelligent systems designed to scale digital operations and safeguard growth against market shifts using predictive AI.",
    tags: ["Full-Stack", "AI/LLM", "React", "Next.js"],
    image: "/proj-astroai.png",
    link: "https://astro-ai-two-weld.vercel.app/",
    stat: "AI Growth",
  },
  {
    num: "06",
    title: "Desi Chaos Engine",
    category: "Game Development",
    description: "A robust 2D game engine built in Unity to simulate the chaotic and humorous elements of daily life in Indian environments.",
    tags: ["Unity 2D", "C#", "Game Physics", "AI"],
    image: "/proj-ai-obs.png", // Using as fallback for the game
    link: "#",
    stat: "Game Tech",
  },
];

export default function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section ref={ref} id="projects" style={{ background: "var(--bg)", position: "relative", overflow: "hidden" }}>
      <div className="section-wrap section-spacing">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "4rem", flexWrap: "wrap", gap: "2rem" }}
        >
          <div>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", letterSpacing: "0.3em", color: "#888888", textTransform: "uppercase", fontWeight: 600 }}>Selected Work</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 700, letterSpacing: "-0.05em", color: "var(--fg)", margin: "16px 0 0 0", lineHeight: 1 }}>
              Projects built<br />
              <span style={{ color: "var(--red)" }}>with purpose.</span>
            </h2>
          </div>
          <motion.a
            href="https://github.com/amitraghvan"
            target="_blank" rel="noreferrer"
            className="btn-ghost"
            whileHover={{ scale: 1.04 }}
          >
            GitHub ↗
          </motion.a>
        </motion.div>

        {/* Project cards — Flat Brutalist */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "1.5rem" }}>
          {PROJECTS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              style={{ height: "100%" }}
            >
              <a
                href={p.link}
                target={p.link !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="glass"
                style={{
                  display: "flex", flexDirection: "column",
                  textDecoration: "none",
                  height: "100%", transition: "all 0.3s",
                  borderColor: hovered === i ? "var(--red)" : "var(--border)",
                }}
              >
                {/* Image */}
                <div style={{ position: "relative", paddingBottom: "56.25%", overflow: "hidden", borderBottom: "1px solid var(--border)" }}>
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    style={{ objectFit: "cover", transition: "transform 0.7s ease, filter 0.5s", filter: hovered === i ? "grayscale(0%)" : "grayscale(100%) contrast(1.2)" }}
                    className={hovered === i ? "scale-105" : "scale-100"}
                    sizes="40vw"
                  />
                  {/* Stat badge */}
                  <div style={{
                    position: "absolute", top: 16, right: 16,
                    padding: "6px 12px",
                    background: "var(--red)", color: "#111",
                    fontFamily: "var(--font-sans)", fontSize: 10,
                    letterSpacing: "0.1em", fontWeight: 800,
                    textTransform: "uppercase"
                  }}>
                    {p.stat}
                  </div>
                  <div style={{
                    position: "absolute", top: 16, left: 16,
                    fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 800,
                    color: "var(--red)",
                  }}>
                    {p.num}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "2rem", flex: 1, display: "flex", flexDirection: "column", background: "var(--bg)" }}>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: 10, color: "var(--fg-3)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12, fontWeight: 600 }}>
                    {p.category}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700, color: "var(--fg)", letterSpacing: "-0.04em", marginBottom: 16 }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: "1rem", color: "var(--fg-3)", lineHeight: 1.6, flex: 1 }}>{p.description}</p>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 24 }}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                      {p.tags.map(t => (
                        <span key={t} className="tag" style={{ border: "1px solid var(--border-2)", color: "var(--fg-2)", background: "transparent" }}>{t}</span>
                      ))}
                    </div>
                    <motion.div
                      animate={hovered === i ? { rotate: 45, backgroundColor: "var(--red)", color: "#111" } : { rotate: 0, backgroundColor: "transparent", color: "var(--fg-3)" }}
                      style={{ width: 40, height: 40, border: `1px solid var(--border-2)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.3s" }}
                    >
                      <ArrowUpRight size={18} />
                    </motion.div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
