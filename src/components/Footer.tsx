"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)", position: "relative", overflow: "hidden" }}>

      <div className="section-wrap" style={{ padding: "4rem 6rem 3rem" }}>
        {/* Big CTA */}
        <div style={{ textAlign: "center", marginBottom: "4rem", paddingBottom: "4rem", borderBottom: "1px solid var(--border)" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-3)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 20 }}>
            Ready to collaborate?
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "3rem", flexWrap: "wrap", alignItems: "center" }}>
            <a
              href="mailto:amitraghvan7488@gmail.com"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 4rem)",
                fontWeight: 800, letterSpacing: "-0.05em",
                color: "var(--red)",
                textDecoration: "none",
                display: "inline-block",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              amit@studio.ai
            </a>
            <span style={{ color: "var(--border)", fontSize: "2rem" }}>|</span>
            <a
              href="https://wa.me/917488698672"
              target="_blank" rel="noreferrer"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 4rem)",
                fontWeight: 800, letterSpacing: "-0.05em",
                color: "#25D366", // WhatsApp color
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
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
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 32, height: 32, borderRadius: 0, background: "var(--red)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 15, color: "#111" }}>A</div>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--fg)", fontSize: 15, letterSpacing: "-0.01em" }}>Amit Kumar</span>
          </div>

          <nav style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
            {["About", "Works", "Skills", "Journey", "Contact"].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`}
                style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg-3)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-3)")}
              >
                {l}
              </a>
            ))}
          </nav>

          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-3)", letterSpacing: "0.1em" }}>
            © {year} · Made with ♥ in India
          </span>
        </div>
      </div>
    </footer>
  );
}
