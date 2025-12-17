import './App.css'

function App() {
  return (
    <div className="terminal-container diagonal-split-layout">
      {/* Global scanlines */}
      <div className="scanlines"></div>

      {/* Diagonal split background zones */}
      <div className="decay-zone">
        <div className="weathered-texture"></div>
        <div className="rust-overlay"></div>
        <div className="scratch-marks"></div>
      </div>

      <div className="cyber-zone">
        <div className="grid-plane"></div>
        <div className="data-stream"></div>
        <div className="circuit-pattern"></div>
      </div>

      {/* Harsh diagonal divide line */}
      <div className="diagonal-divide"></div>

      {/* Top-left decay panel - rotated */}
      <div className="decay-panel panel-rotated">
        <div className="panel-weathered-border"></div>
        <div className="manifesto-text">
          &gt; RECLAIMING DIGITAL FREEDOM<br/>
          &gt; SELF-HOSTED. UNMONETIZED.<br/>
          &gt; UNSANITIZED.<br/>
          &gt; ETERNAL FREEDOM.
        </div>
      </div>

      {/* Logo at diagonal intersection - CENTERED */}
      <div className="logo-section-diagonal">
        <div className="logo-wrapper">
          <div className="logo-scanlines"></div>
          <div className="logo-crt-overlay"></div>
          <div className="logo-static"></div>
          <div className="logo-corruption-overlay"></div>

          {/* Multi-layer glitch system */}
          <div className="logo-glitch-container">
            {/* Chromatic layers - always offset */}
            <img
              src="/bannerlogo.svg"
              alt=""
              className="banner-logo banner-logo-red"
              aria-hidden="true"
            />
            <img
              src="/bannerlogo.svg"
              alt=""
              className="banner-logo banner-logo-cyan"
              aria-hidden="true"
            />

            {/* Sliced glitch layers - pixel displacement */}
            <img
              src="/bannerlogo.svg"
              alt=""
              className="banner-logo banner-logo-slice-1"
              aria-hidden="true"
            />
            <img
              src="/bannerlogo.svg"
              alt=""
              className="banner-logo banner-logo-slice-2"
              aria-hidden="true"
            />
            <img
              src="/bannerlogo.svg"
              alt=""
              className="banner-logo banner-logo-slice-3"
              aria-hidden="true"
            />
            <img
              src="/bannerlogo.svg"
              alt=""
              className="banner-logo banner-logo-slice-4"
              aria-hidden="true"
            />

            {/* Main layer */}
            <img
              src="/bannerlogo.svg"
              alt="ROTTED.IO"
              className="banner-logo banner-logo-main"
            />
          </div>

          <div className="decay-particles"></div>
        </div>
        <div className="status-line">
          <span className="bracket">[</span>
          <span className="status-text">FUCK YOUR CONTROL</span>
          <span className="bracket">]</span>
        </div>
      </div>

      {/* Bottom-right cyber panel - counter-rotated */}
      <div className="cyber-panel panel-counter-rotated">
        <div className="terminal-header-mini">[SYSTEM STATUS]</div>
        <pre className="ascii-status">
┌─────────────────┐
│ NGINX      [OK] │
│ POSTGRES   [OK] │
│ UPTIME   142d3h │
└─────────────────┘
        </pre>
        <div className="system-status">
          <div className="status-item">
            <span className="indicator active">■</span>
            <span className="label">INFRASTRUCTURE</span>
            <span className="value">[ONLINE]</span>
          </div>
          <div className="status-item">
            <span className="indicator building">■</span>
            <span className="label">SERVICES</span>
            <span className="value">[BUILDING]</span>
          </div>
          <div className="status-item">
            <span className="indicator active">■</span>
            <span className="label">RESISTANCE</span>
            <span className="value">[ACTIVE]</span>
          </div>
        </div>
      </div>

      {/* Additional floating element on decay side */}
      <div className="decay-panel panel-small">
        <pre className="ascii-skull">
  ___
 /   \
| X X |
 \___/
        </pre>
      </div>
    </div>
  )
}

export default App
