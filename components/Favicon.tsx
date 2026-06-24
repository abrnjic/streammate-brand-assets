function FaviconMark({ size, bg = "#020509" }: { size: number; bg?: string }) {
  const id = `fg-${size}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>

      {/* Background tile */}
      <rect width="100" height="100" rx="20" fill={bg} />

      {/* Play triangle */}
      <polygon points="26,26 26,74 72,50" fill={`url(#${id})`} opacity="0.95" />

      {/* Pause/stream bars on the right */}
      <rect x="76" y="26" width="8" height="19" rx="3" fill={`url(#${id})`} opacity="0.55" />
      <rect x="76" y="55" width="8" height="19" rx="3" fill={`url(#${id})`} opacity="0.55" />
    </svg>
  );
}

export function Favicon() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "#020509", fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif" }}
    >
      <div className="flex flex-col items-center" style={{ gap: 40 }}>

        {/* All sizes */}
        <div className="flex flex-col items-center" style={{ gap: 8 }}>
          <p
            style={{
              color: "#1e3a4a",
              fontSize: "0.62rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            Favicon — sve velicine
          </p>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 24 }}>
            {[
              { size: 16, label: "16×16" },
              { size: 32, label: "32×32" },
              { size: 64, label: "64×64" },
              { size: 96, label: "96×96" },
              { size: 180, label: "180×180\niOS" },
            ].map(({ size, label }) => (
              <div key={size} className="flex flex-col items-center" style={{ gap: 10 }}>
                <FaviconMark size={size} />
                <span
                  style={{
                    color: "#1e3a4a",
                    fontSize: "0.58rem",
                    textAlign: "center",
                    whiteSpace: "pre",
                    letterSpacing: "0.05em",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Browser tab mock */}
        <div
          style={{
            background: "#0c1929",
            borderRadius: 8,
            padding: "10px 18px",
            display: "flex",
            alignItems: "center",
            gap: 8,
            border: "1px solid #0f2d3d",
          }}
        >
          <FaviconMark size={16} />
          <span
            style={{
              fontWeight: 500,
              fontSize: "0.78rem",
              color: "#cbd5e1",
              letterSpacing: "0.01em",
            }}
          >
            StreamMate
          </span>
          <span style={{ color: "#1e3a4a", fontSize: "0.72rem" }}>×</span>
        </div>

      </div>
    </div>
  );
}
