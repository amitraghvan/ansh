"use client";
import { motion, useInView, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { useRef, useEffect } from "react";

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  // Mouse tracking for red circle reveal
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 120 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (typeof window !== "undefined") {
      mouseX.set(window.innerWidth * 0.5);
      mouseY.set(window.innerHeight * 0.5);
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (ref.current && e.touches.length > 0) {
        const rect = ref.current.getBoundingClientRect();
        mouseX.set(e.touches[0].clientX - rect.left);
        mouseY.set(e.touches[0].clientY - rect.top);
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

  const clipPath = useMotionTemplate`circle(clamp(70px, 16vw, 240px) at ${cursorX}px ${cursorY}px)`;

  return (
    <section ref={ref} id="about" style={{ 
      backgroundColor: "#111111",
      position: "relative", 
      overflow: "hidden",
      padding: "clamp(4.5rem, 10vw, 9rem) 0",
      minHeight: "80vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }}>
      {/* ── BASE LAYER (Dark background, Beige text) ── */}
      <div className="section-wrap" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ 
            fontFamily: "var(--font-sans)", 
            fontSize: "0.75rem", 
            letterSpacing: "0.3em", 
            color: "#888888", 
            textTransform: "uppercase", 
            marginBottom: "clamp(1.5rem, 3vw, 2.5rem)",
            fontWeight: 600
          }}
        >
          ABOUT ME
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.85rem, 5.5vw, 5.5rem)",
            fontWeight: 700,
            lineHeight: 1.12,
            letterSpacing: "-0.04em",
            color: "#dcd6c8",
            maxWidth: "100%",
            margin: 0
          }}
        >
          Hi, I&apos;m <span style={{ color: "#eb5939" }}>Ansh Verma</span> — a Computer Science &amp; Engineering student and Full-Stack Developer passionate about building practical, scalable, and user-focused digital solutions.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ 
            fontFamily: "var(--font-sans)", 
            fontSize: "0.75rem", 
            letterSpacing: "0.3em", 
            color: "#888888", 
            textTransform: "uppercase", 
            marginTop: "clamp(3rem, 6vw, 6rem)",
            fontWeight: 600
          }}
        >
          WHAT I DO
        </motion.div>
      </div>

      {/* ── HOVER REVEAL LAYER (Red background, Black text) ── */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 10,
          pointerEvents: "none",
          clipPath,
          backgroundColor: "#eb5939",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <div className="section-wrap">
          <div
            style={{ 
              fontFamily: "var(--font-sans)", 
              fontSize: "0.75rem", 
              letterSpacing: "0.3em", 
              color: "#111111", 
              textTransform: "uppercase", 
              marginBottom: "clamp(1.5rem, 3vw, 2.5rem)",
              fontWeight: 600,
              opacity: inView ? 1 : 0,
            }}
          >
            ABOUT ME
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.85rem, 5.5vw, 5.5rem)",
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: "-0.04em",
              color: "#111111",
              maxWidth: "100%",
              margin: 0,
              opacity: inView ? 1 : 0,
            }}
          >
            I enjoy turning ideas into functional products, from full-stack web applications to IoT and AI-driven projects.
          </h2>

          <div
            style={{ 
              fontFamily: "var(--font-sans)", 
              fontSize: "0.75rem", 
              letterSpacing: "0.3em", 
              color: "#111111", 
              textTransform: "uppercase", 
              marginTop: "clamp(3rem, 6vw, 6rem)",
              fontWeight: 600,
              opacity: inView ? 1 : 0,
            }}
          >
            WHAT I DO
          </div>
        </div>
      </motion.div>
    </section>
  );
}
