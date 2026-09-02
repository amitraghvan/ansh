"use client";
import { Send, MapPin, Clock } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, WhatsAppIcon } from "./SocialIcons";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const SOCIALS = [
  { icon: GithubIcon,   href: "https://github.com/anshv9218-max", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://linkedin.com/in/ansh-verma", label: "LinkedIn" },
  { icon: WhatsAppIcon, href: "https://wa.me/919120850085", label: "WhatsApp" },
];

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section ref={ref} id="contact" style={{ background: "var(--bg)", position: "relative", overflow: "hidden" }}>
      <div className="section-wrap section-spacing">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: "center", marginBottom: "5rem" }}
        >
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", letterSpacing: "0.3em", color: "#888888", textTransform: "uppercase", fontWeight: 600 }}>Get in Touch</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 700, letterSpacing: "-0.05em", color: "var(--fg)", margin: "16px 0 0 0", lineHeight: 1 }}>
            Let&apos;s build something<br />
            <span style={{ color: "var(--red)" }}>world-class.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-16 items-start">

          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            {/* Info cards */}
            {[
              { icon: MapPin, label: "Location",  value: "Phagwara, Punjab · LPU" },
              { icon: Clock,  label: "Response",  value: "Usually within 24 hours" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="p-4 md:p-5" style={{ display: "flex", alignItems: "center", gap: 14, border: "1px solid var(--border)" }}>
                <div style={{ width: 40, height: 40, borderRadius: 0, background: "transparent", border: `1px solid var(--border-2)`, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--red)", flexShrink: 0 }}>
                  <Icon size={18} />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: 10, color: "var(--fg-3)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 2, fontWeight: 600 }}>{label}</div>
                  <div style={{ fontWeight: 600, color: "var(--fg)", fontSize: "0.9rem" }}>{value}</div>
                </div>
              </div>
            ))}

            {/* Availability badge */}
            <div className="p-4 md:p-5" style={{ borderLeft: "3px solid var(--red)", background: "var(--bg)", border: "1px solid var(--border)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--red)" }} />
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 10, color: "var(--red)", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600 }}>Available Now</span>
              </div>
              <p style={{ fontSize: "0.88rem", color: "var(--fg-2)", lineHeight: 1.65 }}>
                Open to software engineering internships, entry-level developer roles, and practical full-stack &amp; IoT projects.
              </p>
            </div>

            {/* Socials */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label} href={href} target="_blank" rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  title={label}
                  style={{ width: 44, height: 44, borderRadius: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--fg-2)", textDecoration: "none", border: "1px solid var(--border)", transition: "color 0.2s, border-color 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.color = "var(--red)"; e.currentTarget.style.borderColor = "var(--red)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "var(--fg-2)"; e.currentTarget.style.borderColor = "var(--border)"; }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="p-6 md:p-10"
            style={{ border: "1px solid var(--border)", background: "var(--bg)" }}
          >
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Name",  type: "text",  placeholder: "Your name",    id: "name"  },
                  { label: "Email", type: "email", placeholder: "your@email.com", id: "email" },
                ].map(f => (
                  <div key={f.id}>
                    <label htmlFor={f.id} style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-3)", marginBottom: 6 }}>
                      {f.label}
                    </label>
                    <input id={f.id} type={f.type} placeholder={f.placeholder} required className="input-field" />
                  </div>
                ))}
              </div>

              <div>
                <label htmlFor="subject" style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-3)", marginBottom: 6 }}>
                  Subject
                </label>
                <input id="subject" type="text" placeholder="What's this about?" className="input-field" />
              </div>

              <div>
                <label htmlFor="message" style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-3)", marginBottom: 6 }}>
                  Message
                </label>
                <textarea id="message" rows={4} placeholder="Tell me about your project..." required className="input-field" style={{ resize: "none" }} />
              </div>

              <motion.button
                type="submit"
                className="btn-primary"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                disabled={sending || sent}
                style={{ width: "100%", opacity: sending ? 0.7 : 1, gap: 10, position: "relative", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", padding: "0.9rem 2rem" }}
              >
                {sent ? (
                  <span>✓ Message Sent!</span>
                ) : sending ? (
                  <span>Sending...</span>
                ) : (
                  <>Send Message <Send size={16} /></>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
