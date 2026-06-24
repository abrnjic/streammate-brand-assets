export function SplashScreen() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(160deg, #020509 0%, #040d14 45%, #020b12 75%, #010608 100%)",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
      }}
    >
      {/* Subtle grid */}
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.035 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#38bdf8" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Top-left glow */}
      <div
        style={{
          position: "absolute",
          width: 480,
          height: 480,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.09) 0%, transparent 68%)",
          top: "-10%",
          left: "-8%",
          pointerEvents: "none",
        }}
      />

      {/* Bottom-right glow */}
      <div
        style={{
          position: "absolute",
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(14,165,233,0.07) 0%, transparent 68%)",
          bottom: "-5%",
          right: "-5%",
          pointerEvents: "none",
        }}
      />

      {/* Horizontal scan line accent */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "50%",
          height: 1,
          background:
            "linear-gradient(90deg, transparent 0%, rgba(6,182,212,0.08) 30%, rgba(6,182,212,0.14) 50%, rgba(6,182,212,0.08) 70%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      <div className="flex flex-col items-center" style={{ zIndex: 1, gap: 0 }}>
        {/* Icon mark */}
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" style={{ marginBottom: 28 }}>
          <defs>
            <linearGradient id="icon-grad" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          {/* Play triangle — stream symbol */}
          <polygon points="14,10 14,34 34,22" fill="url(#icon-grad)" opacity="0.92" />
          {/* Right bar */}
          <rect x="36" y="10" width="4" height="24" rx="2" fill="url(#icon-grad)" opacity="0.6" />
        </svg>

        {/* Logo wordmark */}
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <span
            style={{
              fontWeight: 700,
              fontSize: "3.6rem",
              letterSpacing: "-0.055em",
              background: "linear-gradient(110deg, #e0f2fe 0%, #38bdf8 55%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 24px rgba(6,182,212,0.35))",
              lineHeight: 1,
            }}
          >
            Stream
          </span>
          <span
            style={{
              fontWeight: 300,
              fontSize: "3.6rem",
              letterSpacing: "-0.055em",
              color: "#334155",
              lineHeight: 1,
            }}
          >
            Mate
          </span>
        </div>

        {/* Thin divider line */}
        <div
          style={{
            width: 220,
            height: 1,
            marginTop: 18,
            background:
              "linear-gradient(90deg, transparent 0%, rgba(6,182,212,0.35) 40%, rgba(6,182,212,0.35) 60%, transparent 100%)",
          }}
        />

        <p
          style={{
            color: "#1e3a4a",
            fontSize: "0.7rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginTop: 16,
          }}
        >
          Watch Together &middot; Live Together
        </p>

        {/* Loading indicator */}
        <div style={{ display: "flex", gap: 6, marginTop: 52 }}>
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                width: i === 1 || i === 2 ? 20 : 5,
                height: 3,
                borderRadius: 2,
                background:
                  i === 1 || i === 2
                    ? "linear-gradient(90deg, #0ea5e9, #06b6d4)"
                    : "rgba(6,182,212,0.15)",
              }}
            />
          ))}
        </div>

        <p
          style={{
            color: "#0f2d3d",
            fontSize: "0.58rem",
            marginTop: 44,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          v1.0.0
        </p>
      </div>
    </div>
  );
}
