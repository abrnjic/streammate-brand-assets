const BASE_FONT = "'Inter', 'Segoe UI', system-ui, sans-serif";

function LogoWordmark({ scale = 1, dark = true }: { scale?: number; dark?: boolean }) {
  const size = 3.2 * scale;
  return (
    <div style={{ display: "flex", alignItems: "baseline" }}>
      <span
        style={{
          fontFamily: BASE_FONT,
          fontWeight: 700,
          fontSize: `${size}rem`,
          letterSpacing: "-0.055em",
          background: dark
            ? "linear-gradient(110deg, #e0f2fe 0%, #38bdf8 55%, #06b6d4 100%)"
            : "linear-gradient(110deg, #0284c7 0%, #0ea5e9 55%, #06b6d4 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          lineHeight: 1,
        }}
      >
        Stream
      </span>
      <span
        style={{
          fontFamily: BASE_FONT,
          fontWeight: 300,
          fontSize: `${size}rem`,
          letterSpacing: "-0.055em",
          color: dark ? "#475569" : "#64748b",
          lineHeight: 1,
        }}
      >
        Mate
      </span>
    </div>
  );
}

function Swatch({ hex, label }: { hex: string; label: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 8,
          background: hex,
          border: hex === "#f8fafc" ? "1px solid #e2e8f0" : hex === "#020509" ? "1px solid #0f2d3d" : "none",
          boxShadow:
            hex !== "#f8fafc" && hex !== "#020509"
              ? `0 0 12px ${hex}55`
              : "none",
        }}
      />
      <span style={{ color: "#475569", fontSize: "0.58rem", letterSpacing: "0.08em" }}>{label}</span>
    </div>
  );
}

function Divider() {
  return (
    <div
      style={{
        width: 1,
        height: 28,
        background: "linear-gradient(to bottom, transparent, #1e3a4a, transparent)",
      }}
    />
  );
}

function Label({ children }: { children: string }) {
  return (
    <p
      style={{
        color: "#1e3a4a",
        fontSize: "0.62rem",
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        marginBottom: 12,
      }}
    >
      {children}
    </p>
  );
}

export function FinalLogo() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "#020509",
        fontFamily: BASE_FONT,
      }}
    >
      <div className="flex flex-col items-center" style={{ gap: 36 }}>

        {/* Dark background variant */}
        <div className="flex flex-col items-center">
          <Label>Tamna pozadina</Label>
          <LogoWordmark dark={true} />
        </div>

        <Divider />

        {/* Light background variant */}
        <div className="flex flex-col items-center">
          <Label>Svijetla pozadina</Label>
          <div
            style={{
              background: "#f8fafc",
              padding: "18px 40px",
              borderRadius: 12,
              border: "1px solid #e2e8f0",
            }}
          >
            <LogoWordmark dark={false} />
          </div>
        </div>

        <Divider />

        {/* Transparent / checkerboard variant */}
        <div className="flex flex-col items-center">
          <Label>PNG Transparent</Label>
          <div
            style={{
              padding: "18px 40px",
              borderRadius: 12,
              position: "relative",
              overflow: "hidden",
              backgroundImage:
                "linear-gradient(45deg,#1a1a1a 25%,transparent 25%),linear-gradient(-45deg,#1a1a1a 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#1a1a1a 75%),linear-gradient(-45deg,transparent 75%,#1a1a1a 75%)",
              backgroundSize: "16px 16px",
              backgroundPosition: "0 0,0 8px,8px -8px,-8px 0px",
              backgroundColor: "#111",
              border: "1px solid #1e3a4a",
            }}
          >
            <LogoWordmark dark={true} />
          </div>
        </div>

        <Divider />

        {/* Colour palette */}
        <div className="flex flex-col items-center">
          <Label>Paleta boja</Label>
          <div style={{ display: "flex", gap: 14 }}>
            {[
              { hex: "#38bdf8", label: "Primary" },
              { hex: "#0ea5e9", label: "Mid" },
              { hex: "#06b6d4", label: "Accent" },
              { hex: "#0f172a", label: "Surface" },
              { hex: "#020509", label: "Dark BG" },
              { hex: "#f8fafc", label: "Light BG" },
            ].map((s) => (
              <Swatch key={s.hex} {...s} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
