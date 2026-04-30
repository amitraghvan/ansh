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

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const clipPath = useMotionTemplate`circle(clamp(80px, 15vw, 250px) at ${cursorX}px ${cursorY}px)`;

  return (
    <section ref={ref} id="about" style={{ 
      backgroundColor: "#111111",
      position: "relative", 
      overflow: "hidden",
      padding: "10rem 0",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }}>
      {/* ── BASE LAYER (Dark background, Beige text) ── */}
      <div className="section-wrap" style={{ padding: "0 5%", position: "relative", zIndex: 1 }}>
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
            marginBottom: "3rem",
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
            fontSize: "clamp(2.5rem, 6vw, 6.5rem)",
            fontWeight: 700, // Thicker font
            lineHeight: 1.05,
            letterSpacing: "-0.05em", // Tighter tracking like the screenshot
            color: "#dcd6c8",
            maxWidth: "95%",
            margin: 0
          }}
        >
          I&apos;m a <span style={{ color: "#eb5939" }}>selectively skilled</span> product<br className="hidden md:block" />
          designer with strong focus on<br className="hidden md:block" />
          producing high quality &amp;<br className="hidden md:block" />
          impactful digital experience.
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
            marginTop: "10rem",
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
        <div className="section-wrap" style={{ padding: "0 5%" }}>
          <div
            style={{ 
              fontFamily: "var(--font-sans)", 
              fontSize: "0.75rem", 
              letterSpacing: "0.3em", 
              color: "#111111", 
              textTransform: "uppercase", 
              marginBottom: "3rem",
              fontWeight: 600,
              opacity: inView ? 1 : 0,
            }}
          >
            ABOUT ME
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 6.5rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.05em",
              color: "#111111",
              maxWidth: "95%",
              margin: 0,
              opacity: inView ? 1 : 0,
            }}
          >
            I&apos;m a visual designer<br className="hidden md:block" />
            haven&apos;t been<br className="hidden md:block" />
            (pret) - making<br className="hidden md:block" />
            paycheck.
          </h2>

          <div
            style={{ 
              fontFamily: "var(--font-sans)", 
              fontSize: "0.75rem", 
              letterSpacing: "0.3em", 
              color: "#111111", 
              textTransform: "uppercase", 
              marginTop: "10rem",
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
