"use client";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { useRef, useEffect } from "react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "./SocialIcons";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  
  // Parallax effect for the background image
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  // Parallax for text
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  // Mouse tracking for red circle
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 120 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Initial center position
    if (typeof window !== "undefined") {
      mouseX.set(window.innerWidth * 0.5);
      mouseY.set(window.innerHeight * 0.45);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseX.set(e.touches[0].clientX);
        mouseY.set(e.touches[0].clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchstart", handleTouchMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouchMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [mouseX, mouseY]);

  // Framer Motion template to dynamically update the clip path
  const clipPath = useMotionTemplate`circle(clamp(70px, 16vw, 240px) at ${cursorX}px ${cursorY}px)`;

  return (
    <section ref={ref} style={{
      position: "relative",
      height: "100svh", // Use modern small viewport height for mobile browsers
      minHeight: "560px",
      width: "100%",
      overflow: "hidden",
      backgroundColor: "#111111",
      color: "#e3dfc8",
      fontFamily: "var(--font-display)",
    }}>

      {/* ── BACKGROUND IMAGE ── */}
      <motion.div style={{ position: "absolute", inset: 0, zIndex: 0, y: yBg, opacity: 0.55 }}>
        <Image
          src="/ansh-profile.png"
          alt="Ansh Verma - Full-Stack Developer"
          fill
          unoptimized
          style={{
            objectFit: "cover",
            objectPosition: "center 28%",
            filter: "grayscale(100%) contrast(1.15) brightness(0.7)",
          }}
          priority
        />
        {/* Vignette/Fade to black on edges */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(circle at center, transparent 20%, #111111 85%)"
        }} />
      </motion.div>

      {/* ── SIDEBAR SOCIALS (Left) ── */}
      <div className="absolute bottom-6 left-5 md:bottom-10 md:left-10 z-30 flex md:flex-col gap-4 md:gap-6 text-[#e3dfc8]">
        <a href="https://wa.me/919120850085" target="_blank" rel="noreferrer" className="opacity-60 hover:opacity-100 transition-opacity p-1"><WhatsAppIcon size={18} /></a>
        <a href="https://github.com/anshv9218-max" target="_blank" rel="noreferrer" className="opacity-60 hover:opacity-100 transition-opacity p-1"><GithubIcon size={18} /></a>
        <a href="https://linkedin.com/in/ansh-verma" target="_blank" rel="noreferrer" className="opacity-60 hover:opacity-100 transition-opacity p-1"><LinkedinIcon size={18} /></a>
      </div>

      {/* ── SCROLL / SOUND LABEL (Right) - Desktop only ── */}
      <div className="hidden md:block absolute bottom-20 -right-5 z-30 -rotate-90 origin-center-right font-sans text-[11px] font-semibold tracking-[0.2em] text-[#666]">
        SOUND ON
      </div>

      {/* ── GIANT TYPOGRAPHY & OVERLAY EFFECT ── */}
      {/* The Text Block Template */}
      <motion.div style={{
        position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 10, y: yText, pointerEvents: "none", padding: "0 1rem"
      }}>
        <h1 style={{
          fontSize: "clamp(3.4rem, 14vw, 15rem)",
          fontWeight: 800,
          lineHeight: 0.88,
          letterSpacing: "-0.05em",
          textAlign: "center",
          margin: 0,
          textTransform: "uppercase"
        }}>
          I AM<br />
          ANSH<br />
          <span style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            fontSize: "clamp(1.1rem, 3.8vw, 3.2rem)",
            letterSpacing: "0.06em",
            display: "block",
            marginTop: "clamp(0.6rem, 1.8vw, 1.4rem)",
            color: "var(--fg-2)"
          }}>
            FULL STACK DEV
          </span>
        </h1>
      </motion.div>

      {/* Red Circle + Clipped Black Text */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        style={{
          position: "absolute", inset: 0, zIndex: 20, pointerEvents: "none",
          clipPath
        }}
      >
        {/* The Red Background inside the circle */}
        <div style={{ position: "absolute", inset: 0, backgroundColor: "#eb5939" }} />

        {/* The exact same Text Block, but Black */}
        <motion.div style={{
          position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
          y: yText, padding: "0 1rem"
        }}>
          <h1 style={{
            fontSize: "clamp(3.4rem, 14vw, 15rem)",
            fontWeight: 800,
            lineHeight: 0.88,
            letterSpacing: "-0.05em",
            textAlign: "center",
            margin: 0,
            color: "#111111",
            textTransform: "uppercase"
          }}>
            I AM<br />
            ANSH<br />
            <span style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: "clamp(1.1rem, 3.8vw, 3.2rem)",
              letterSpacing: "0.06em",
              display: "block",
              marginTop: "clamp(0.6rem, 1.8vw, 1.4rem)",
              color: "#111111"
            }}>
              FULL STACK DEV
            </span>
          </h1>
        </motion.div>
      </motion.div>

    </section>
  );
}
