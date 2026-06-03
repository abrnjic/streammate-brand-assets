export function SplashScreen() {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "linear-gradient(145deg, #08051a 0%, #0d0b28 40%, #080f24 70%, #050d1a 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)", top: "10%", left: "15%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)", bottom: "15%", right: "10%", pointerEvents: "none" }} />
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.04 }} xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="#a78bfa" strokeWidth="0.5"/></pattern></defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="flex flex-col items-center" style={{ gap: 0, zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <span style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", fontWeight: 800, fontSize: "4rem", letterSpacing: "-0.06em", background: "linear-gradient(120deg, #c4b5fd 0%, #818cf8 50%, #67e8f9 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", filter: "drop-shadow(0 0 30px rgba(124,58,237,0.5))" }}>Stream</span>
            <span style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", fontWeight: 300, fontSize: "4rem", letterSpacing: "-0.06em", color: "#94a3b8" }}>Mate</span>
          </div>
          <svg width="260" height="20" viewBox="0 0 260 20" fill="none" style={{ marginTop: 4 }}>
            <defs><linearGradient id="sw1" x1="0" y1="0" x2="260" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#7c3aed" stopOpacity="0" /><stop offset="30%" stopColor="#7c3aed" /><stop offset="70%" stopColor="#06b6d4" /><stop offset="100%" stopColor="#06b6d4" stopOpacity="0" /></linearGradient></defs>
            <path d="M0 10 Q32.5 2 65 10 Q97.5 18 130 10 Q162.5 2 195 10 Q227.5 18 260 10" stroke="url(#sw1)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
          <p style={{ color: "#475569", fontSize: "0.78rem", letterSpacing: "0.28em", textTransform: "uppercase", marginTop: 20 }}>Watch Together · Live Together</p>
          <div style={{ display: "flex", gap: 8, marginTop: 48 }}>
            {[0, 1, 2].map(i => (<div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: i === 1 ? "linear-gradient(135deg,#a78bfa,#22d3ee)" : "transparent", border: i !== 1 ? "1px solid #334155" : "none" }} />))}
          </div>
          <p style={{ color: "#1e293b", fontSize: "0.6rem", marginTop: 48, letterSpacing: "0.1em" }}>v1.0.0</p>
        </div>
      </div>
    );
  }