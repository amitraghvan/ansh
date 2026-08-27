"use client";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { useRef, useEffect } from "react";
import { GithubIcon, LinkedinIcon, TwitterIcon, WhatsAppIcon } from "./SocialIcons";

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
    // Initial center position (fallback for SSR)
    if (typeof window !== "undefined") {
      mouseX.set(window.innerWidth * 0.65);
      mouseY.set(window.innerHeight * 0.45);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Framer Motion template to dynamically update the clip path
  const clipPath = useMotionTemplate`circle(clamp(80px, 15vw, 250px) at ${cursorX}px ${cursorY}px)`;

  return (
    <section ref={ref} style={{
      position: "relative",
      height: "100vh",
      width: "100%",
      overflow: "hidden",
      backgroundColor: "#111111", // Dark background matching the reference
      color: "#e3dfc8",          // Sand/beige text matching the reference
      fontFamily: "var(--font-display)",
    }}>

      {/* ── BACKGROUND IMAGE (Grayscale, dark, high contrast) ── */}
      <motion.div style={{ position: "absolute", inset: 0, zIndex: 0, y: yBg, opacity: 0.5 }}>
        <Image
          src="/profile.jpg"
          alt="Background"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
            filter: "grayscale(100%) contrast(1.2) brightness(0.6)",
          }}
          priority
        />
        {/* Vignette/Fade to black on edges */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(circle at center, transparent 30%, #111111 80%)"
        }} />
      </motion.div>

      {/* ── TOP NAV / LOGO ── */}
      <div style={{
        position: "absolute", top: 40, left: 40, right: 40, zIndex: 50,
        display: "flex", justifyContent: "space-between", alignItems: "flex-start",
        fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em"
      }}>
        {/* Logo */}
        <div style={{
          width: 48, height: 48, borderRadius: "50%",
          backgroundColor: "#e3dfc8", display: "flex", alignItems: "center", justifyContent: "center",
          color: "#111111"
        }}>
          {/* Custom minimal abstract logo resembling the cat/ears */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 20L8 8L12 12L16 8L20 20H4Z" />
          </svg>
        </div>

        {/* Top Center Name */}
        <div style={{ marginTop: 12, letterSpacing: "0.4em", textTransform: "uppercase" }}>
          AMIT KUMAR
        </div>

        {/* Right Nav */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, textAlign: "right", color: "#888" }}>
          <span style={{ color: "#e3dfc8", cursor: "pointer" }}>ABOUT</span>
          <span style={{ cursor: "pointer" }}>WORK</span>
          <span style={{ cursor: "pointer" }}>CONTACT</span>
        </div>
      </div>

      {/* ── SIDEBAR SOCIALS (Left) ── */}
      <div style={{
        position: "absolute", bottom: 40, left: 40, zIndex: 50,
        display: "flex", flexDirection: "column", gap: 24, color: "#e3dfc8"
      }}>
        <a href="#" style={{ opacity: 0.6 }}><TwitterIcon size={20} /></a>
        <a href="https://wa.me/917488698672" target="_blank" rel="noreferrer" style={{ opacity: 0.6 }}><WhatsAppIcon size={20} /></a>
        <a href="https://github.com/amitraghvan" target="_blank" rel="noreferrer" style={{ opacity: 0.6 }}><GithubIcon size={20} /></a>
        <a href="#" style={{ opacity: 0.6 }}><LinkedinIcon size={20} /></a>
      </div>

      {/* ── SCROLL / SOUND LABEL (Right) ── */}
      <div style={{
        position: "absolute", bottom: 80, right: -20, zIndex: 50,
        transform: "rotate(-90deg)", transformOrigin: "center right",
        fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: "0.2em",
        color: "#666"
      }}>
        SOUND ON
      </div>

      {/* ── GIANT TYPOGRAPHY & OVERLAY EFFECT ── */}
      {/* 
        To achieve the exact look where text is beige on black, but black on the red circle,
        we use CSS mix-blend-mode: difference. 
        Wait, for pure precise control like the screenshot, we use two identical text layers.
        Layer 1: Beige Text behind the circle.
        Layer 2: The Red Circle.
        Layer 3: Black Text clipped exactly to the red circle!
      */}

      {/* The Text Block Template */}
      <motion.div style={{
        position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 10, y: yText, pointerEvents: "none"
      }}>
        <h1 style={{
          fontSize: "clamp(6rem, 16vw, 15rem)",
          fontWeight: 800,
          lineHeight: 0.82,
          letterSpacing: "-0.05em",
          textAlign: "center",
          margin: 0,
          textTransform: "uppercase"
        }}>
          I AM<br />
          AMIT<br />
          KUMAR<br />
          <span style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "0.05em", display: "block", marginTop: "1rem" }}>FULL STACK DEV</span>
        </h1>
      </motion.div>

      {/* Red Circle + Clipped Black Text */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        style={{
          position: "absolute", inset: 0, zIndex: 20, pointerEvents: "none",
          clipPath // Dynamic clip path follows mouse
        }}
      >
        {/* The Red Background inside the circle */}
        <div style={{ position: "absolute", inset: 0, backgroundColor: "#eb5939" }} />

        {/* The exact same Text Block, but Black, moving identically */}
        <motion.div style={{
          position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
          y: yText
        }}>
          <h1 style={{
            fontSize: "clamp(6rem, 16vw, 15rem)",
            fontWeight: 800,
            lineHeight: 0.82,
            letterSpacing: "-0.05em",
            textAlign: "center",
            margin: 0,
            color: "#111111", // Black text inside the circle
            textTransform: "uppercase"
          }}>
            I AM<br />
            AMIT<br />
            KUMAR<br />
            <span style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "0.05em", display: "block", marginTop: "1rem" }}>FULL STACK DEV</span>
          </h1>
        </motion.div>
      </motion.div>

    </section>
  );
}
