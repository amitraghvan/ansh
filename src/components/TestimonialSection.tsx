"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function TestimonialSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <div className="section-wrap section-spacing">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", letterSpacing: "0.3em", color: "#888888", textTransform: "uppercase", fontWeight: 600 }}>Endorsements</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 700, letterSpacing: "-0.05em", color: "var(--fg)", margin: "16px 0 0 0", lineHeight: 1 }}>
            What they&apos;re <span style={{ color: "var(--red)" }}>saying.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: "relative", overflow: "hidden", borderRadius: 0, border: "1px solid var(--border)" }}
        >
          <div style={{ position: "relative", width: "100%", paddingBottom: "42%", minHeight: 280 }}>
            <Image src="/testimonial.png" alt="Testimonial" fill style={{ objectFit: "cover", filter: "brightness(0.8) grayscale(100%)" }} sizes="90vw" />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, var(--bg) 0%, transparent 50%)" }} />

            {/* Play button */}
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  width: 80, height: 80, borderRadius: 0,
                  background: "var(--red)",
                  border: "none", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                <div style={{ width: 0, height: 0, borderTop: "12px solid transparent", borderBottom: "12px solid transparent", borderLeft: "20px solid #111", marginLeft: 6 }} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
