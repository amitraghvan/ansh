"use client";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implementation ready for API
  };

  return (
    <section
      id="contact"
      className="section-spacing section-wrap border-t border-[var(--border-subtle)]"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="label-mono">Get in Touch</span>
          <h2 className="headline-section mt-4 mb-6">
            Let&apos;s Build Something<br />
            World-Class.
          </h2>
          <p className="body-large text-[var(--text-tertiary)] max-w-md mb-8">
            Whether you are looking for an ambitious AI Engineer, a full-stack
            architect, or just want to discuss the future of ML — my inbox
            is open.
          </p>

          <div className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--success)] animate-pulse"></div>
            Remote / Relocation Open
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-10">
            <a
              href="https://github.com/amitraghvan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors hover-underline"
            >
              GitHub
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors hover-underline"
            >
              LinkedIn
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors hover-underline"
            >
              Twitter
            </a>
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-8 md:p-10 border border-[var(--border-subtle)] rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-8 pb-5 border-b border-[var(--border-subtle)]">
            <div className="w-10 h-10 rounded-full bg-[var(--text-primary)] text-white flex items-center justify-center">
              <Send size={16} />
            </div>
            <h3 className="text-lg font-bold text-[var(--text-primary)]">
              Send a Message
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-[11px] font-mono uppercase tracking-widest text-[var(--text-muted)]">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="input-field"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-mono uppercase tracking-widest text-[var(--text-muted)]">
                Email Address
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="input-field"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-mono uppercase tracking-widest text-[var(--text-muted)]">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell me about your project..."
                className="input-field resize-none"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-primary w-full mt-4">
              Send Message
              <Send size={16} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
