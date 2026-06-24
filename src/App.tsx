import { useState } from 'react'
import { SplashScreen } from '../components/SplashScreen'
import { FinalLogo } from '../components/FinalLogo'
import { Favicon } from '../components/Favicon'

const tabs = ['Splash Screen', 'Logo', 'Favicon'] as const
type Tab = typeof tabs[number]

export default function App() {
  const [active, setActive] = useState<Tab>('Splash Screen')

  return (
    <div style={{ minHeight: '100vh', background: '#020509' }}>
      {/* Nav */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: 'rgba(2,5,9,0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #0f2d3d',
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          padding: '0 24px',
          height: 52,
        }}
      >
        <span
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontWeight: 700,
            fontSize: '0.9rem',
            background: 'linear-gradient(110deg, #e0f2fe 0%, #38bdf8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginRight: 24,
            letterSpacing: '-0.03em',
          }}
        >
          StreamMate
        </span>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '6px 14px',
              borderRadius: 6,
              fontSize: '0.78rem',
              fontFamily: "'Inter', system-ui, sans-serif",
              letterSpacing: '0.04em',
              color: active === tab ? '#38bdf8' : '#334155',
              background: active === tab ? 'rgba(6,182,212,0.08)' : 'transparent',
              transition: 'color 0.15s, background 0.15s',
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ paddingTop: 52 }}>
        {active === 'Splash Screen' && <SplashScreen />}
        {active === 'Logo' && <FinalLogo />}
        {active === 'Favicon' && <Favicon />}
      </div>
    </div>
  )
}
