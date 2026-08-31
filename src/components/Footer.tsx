"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)", position: "relative", overflow: "hidden" }}>

      <div className="section-wrap" style={{ padding: "clamp(3rem, 6vw, 4.5rem) 1.5rem clamp(2rem, 4vw, 3rem)" }}>
        {/* Big CTA */}
        <div style={{ textAlign: "center", marginBottom: "clamp(2.5rem, 5vw, 4rem)", paddingBottom: "clamp(2.5rem, 5vw, 4rem)", borderBottom: "1px solid var(--border)" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-3)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>
            Ready to collaborate?
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "clamp(1rem, 3vw, 2.5rem)", flexWrap: "wrap", alignItems: "center" }}>
            <a
              href="mailto:amitraghvan7488@gmail.com"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 4vw, 3.5rem)",
                fontWeight: 800, letterSpacing: "-0.04em",
                color: "var(--red)",
                textDecoration: "none",
                display: "inline-block",
                transition: "opacity 0.2s",
                wordBreak: "break-word"
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              amitraghvan7488@gmail.com
            </a>
            <span className="hidden sm:inline" style={{ color: "var(--border)", fontSize: "1.8rem" }}>|</span>
            <a
              href="https://wa.me/917488698672"
              target="_blank" rel="noreferrer"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 4vw, 3.5rem)",
                fontWeight: 800, letterSpacing: "-0.04em",
                color: "#25D366",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              WhatsApp ↗
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 32, height: 32, borderRadius: 0, background: "var(--red)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 15, color: "#111" }}>A</div>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--fg)", fontSize: 15, letterSpacing: "-0.01em" }}>Amit</span>
          </div>

          <nav style={{ display: "flex", gap: "clamp(1rem, 2.5vw, 2rem)", flexWrap: "wrap", justifyContent: "center" }}>
            {["About", "Works", "Skills", "Contact"].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`}
                style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg-3)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-3)")}
              >
                {l}
              </a>
            ))}
          </nav>

          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--fg-3)", letterSpacing: "0.1em", textAlign: "center" }}>
            © {year} · Made with ♥ in India
          </span>
        </div>
      </div>
    </footer>
  );
}
