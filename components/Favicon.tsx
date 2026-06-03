function FaviconMark({ size, bg = "#0a0a14" }: { size: number; bg?: string }) {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`fg-${size}`} x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" rx="22" fill={bg} />
        <text x="50" y="68" textAnchor="middle" fontFamily="'Segoe UI', system-ui, sans-serif" fontWeight="800" fontSize="68" fill={`url(#fg-${size})`} letterSpacing="-4">S</text>
        <rect x="28" y="78" width="44" height="4" rx="2" fill={`url(#fg-${size})`} opacity="0.7" />
      </svg>
    );
  }

  export function Favicon() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a14]">
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-2">
            <p style={{ color: "#475569", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 8 }}>Favicon — sve veličine</p>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 28 }}>
              {[{ size: 16, label: "16×16" }, { size: 32, label: "32×32" }, { size: 64, label: "64×64" }, { size: 96, label: "96×96" }, { size: 180, label: "180×180\niOS" }].map(({ size, label }) => (
                <div key={size} className="flex flex-col items-center gap-3">
                  <FaviconMark size={size} />
                  <span style={{ color: "#475569", fontSize: "0.6rem", textAlign: "center", whiteSpace: "pre" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: "#1e293b", borderRadius: 10, padding: "10px 18px", display: "flex", alignItems: "center", gap: 8, border: "1px solid #334155" }}>
            <FaviconMark size={16} />
            <span style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", fontWeight: 500, fontSize: "0.8rem", color: "#e2e8f0" }}>StreamMate</span>
            <span style={{ color: "#475569", fontSize: "0.75rem" }}>×</span>
          </div>
        </div>
      </div>
    );
  }