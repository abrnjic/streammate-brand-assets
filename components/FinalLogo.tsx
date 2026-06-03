export function FinalLogo() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a14]">
        <div className="flex flex-col items-center gap-10">
          {/* Tamna pozadina */}
          <div className="flex flex-col items-center gap-3">
            <p style={{ color: "#334155", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 6 }}>Tamna pozadina</p>
            <div style={{ display: "flex", alignItems: "baseline" }}>
              <span style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", fontWeight: 800, fontSize: "3.2rem", letterSpacing: "-0.05em", background: "linear-gradient(120deg, #c4b5fd 0%, #818cf8 50%, #67e8f9 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Stream</span>
              <span style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", fontWeight: 300, fontSize: "3.2rem", letterSpacing: "-0.05em", color: "#cbd5e1" }}>Mate</span>
            </div>
          </div>
          <div style={{ width: 1, height: 32, background: "linear-gradient(to bottom, transparent, #334155, transparent)" }} />
          {/* Svijetla pozadina */}
          <div className="flex flex-col items-center gap-3">
            <p style={{ color: "#94a3b8", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 6 }}>Svijetla pozadina</p>
            <div style={{ background: "#f8fafc", padding: "20px 44px", borderRadius: 16, display: "flex", alignItems: "baseline" }}>
              <span style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", fontWeight: 800, fontSize: "3.2rem", letterSpacing: "-0.05em", background: "linear-gradient(120deg, #7c3aed 0%, #4f46e5 50%, #0891b2 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Stream</span>
              <span style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", fontWeight: 300, fontSize: "3.2rem", letterSpacing: "-0.05em", color: "#475569" }}>Mate</span>
            </div>
          </div>
          <div style={{ width: 1, height: 32, background: "linear-gradient(to bottom, transparent, #334155, transparent)" }} />
          {/* PNG Transparent */}
          <div className="flex flex-col items-center gap-3">
            <p style={{ color: "#94a3b8", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 6 }}>PNG Transparent</p>
            <div style={{ padding: "20px 44px", borderRadius: 16, display: "flex", alignItems: "baseline", position: "relative", overflow: "hidden", backgroundImage: "linear-gradient(45deg,#2a2a2a 25%,transparent 25%),linear-gradient(-45deg,#2a2a2a 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#2a2a2a 75%),linear-gradient(-45deg,transparent 75%,#2a2a2a 75%)", backgroundSize: "16px 16px", backgroundPosition: "0 0,0 8px,8px -8px,-8px 0px", backgroundColor: "#1a1a1a", border: "1px solid #2a2a2a" }}>
              <span style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", fontWeight: 800, fontSize: "3.2rem", letterSpacing: "-0.05em", background: "linear-gradient(120deg, #c4b5fd 0%, #818cf8 50%, #67e8f9 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", position: "relative", zIndex: 1 }}>Stream</span>
              <span style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", fontWeight: 300, fontSize: "3.2rem", letterSpacing: "-0.05em", color: "rgba(255,255,255,0.85)", position: "relative", zIndex: 1 }}>Mate</span>
            </div>
          </div>
          <div style={{ width: 1, height: 32, background: "linear-gradient(to bottom, transparent, #334155, transparent)" }} />
          {/* Paleta boja */}
          <div className="flex flex-col items-center gap-3">
            <p style={{ color: "#334155", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>Paleta boja</p>
            <div style={{ display: "flex", gap: 12 }}>
              {[{ hex: "#7c3aed", label: "Primary" }, { hex: "#4f46e5", label: "Mid" }, { hex: "#06b6d4", label: "Accent" }, { hex: "#0a0a14", label: "Dark BG" }, { hex: "#f8fafc", label: "Light BG" }].map(({ hex, label }) => (
                <div key={hex} className="flex flex-col items-center gap-2">
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: hex, border: hex === "#f8fafc" ? "1px solid #e2e8f0" : "none", boxShadow: hex !== "#f8fafc" && hex !== "#0a0a14" ? `0 0 14px ${hex}66` : "none" }} />
                  <span style={{ color: "#475569", fontSize: "0.6rem" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }