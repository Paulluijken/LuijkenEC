export default function Home() {
  return (
    <main style={{ fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif", padding: "4rem", maxWidth: 980, margin: "0 auto" }}>
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, marginBottom: 48 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img src="/logo.svg" alt="LuijkenEC logo" width="40" height="40" />
          <div style={{ fontWeight: 700, letterSpacing: 0.5 }}>Luijken Engineering en Consultancy</div>
        </div>
        <nav style={{ display: "flex", gap: 18, fontWeight: 600 }}>
          <a href="#diensten" style={{ color: "#0f172a", textDecoration: "none" }}>Diensten</a>
          <a href="#over" style={{ color: "#0f172a", textDecoration: "none" }}>Over</a>
          <a href="#contact" style={{ color: "#0f172a", textDecoration: "none" }}>Contact</a>
        </nav>
      </header>

      <section style={{ borderRadius: 20, padding: "48px 42px", background: "linear-gradient(135deg, #0f172a, #020617)", color: "white" }}>
        <h1 style={{ fontSize: 44, lineHeight: 1.1, margin: 0 }}>
          Industrial automation <span style={{ color: "#00b4a0" }}>at the intersection of IT &amp; OT</span>
        </h1>
        <p style={{ fontSize: 18, opacity: 0.9, maxWidth: 760 }}>
          Specialist in industriële automatisering, IT/OT-architectuur, cybersecurity en robuuste industriële netwerken
          (PLC, HMI, SCADA, MES).
        </p>
        <a href="#contact" style={{ display: "inline-block", marginTop: 18, padding: "12px 18px", borderRadius: 999, background: "linear-gradient(135deg, #0a7ea4, #00b4a0)", color: "white", textDecoration: "none", fontWeight: 700 }}>
          Neem contact op
        </a>
      </section>

      <section id="diensten" style={{ marginTop: 64 }}>
        <h2 style={{ fontSize: 30, marginBottom: 10 }}>Diensten</h2>
        <p style={{ marginTop: 0, opacity: 0.8 }}>Zakelijk strak, technisch onderbouwd, gericht op continuïteit.</p>
        <ul style={{ lineHeight: 1.9 }}>
          <li><b>IT/OT Architectuur</b> — veilige, schaalbare industriële netwerk- en systeemarchitecturen.</li>
          <li><b>Industrial Cybersecurity</b> — segmentatie, firewalling, monitoring, IEC 62443-principes.</li>
          <li><b>PLC &amp; SCADA Engineering</b> — ontwikkeling, optimalisatie en migratie van besturing en visualisatie.</li>
          <li><b>Netwerken &amp; Firewalls</b> — VLAN’s, routing, redundantie, industriële firewallconfiguraties.</li>
          <li><b>Consultancy &amp; Advies</b> — onafhankelijk advies bij complexe IT/OT vraagstukken.</li>
          <li><b>Remote Support</b> — snelle troubleshooting en optimalisatie op afstand.</li>
        </ul>
      </section>

      <section id="over" style={{ marginTop: 48 }}>
        <h2 style={{ fontSize: 30, marginBottom: 10 }}>Over</h2>
        <p style={{ marginTop: 0, opacity: 0.85 }}>
          Luijken Engineering en Consultancy helpt organisaties met betrouwbare en veilige industriële automatiseringsoplossingen
          op het snijvlak van IT en OT.
        </p>
      </section>

      <section id="contact" style={{ marginTop: 48, marginBottom: 64 }}>
        <h2 style={{ fontSize: 30, marginBottom: 10 }}>Contact</h2>
        <p style={{ marginTop: 0, opacity: 0.85 }}>
          E-mail: <span style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>info@luijkenec.nl</span> (pas dit aan naar je echte adres)<br/>
          LinkedIn: <span style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>linkedin.com/in/...</span>
        </p>
      </section>

      <footer style={{ paddingTop: 22, borderTop: "1px solid #e5e7eb", opacity: 0.75 }}>
        © {new Date().getFullYear()} Luijken Engineering en Consultancy
      </footer>
    </main>
  );
}
