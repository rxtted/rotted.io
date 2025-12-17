import './App.css'

function App() {
  return (
    <div className="terminal-container">
      <div className="scanlines"></div>

      <div className="content-grid">
        <header className="terminal-header">
          <div className="header-bar">
            <span className="prompt">[root@rotted.io ~]$</span>
            <span className="cursor">_</span>
          </div>
        </header>

        <main className="main-content">
          <div className="logo-section">
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
              <span className="status-text">CORPORATE SOVEREIGNTY</span>
              <span className="bracket">]</span>
            </div>
          </div>

          <div className="info-panel">
            <div className="panel-border"></div>
            <div className="panel-content">
              <p className="manifesto-text">
                &gt; RECLAIMING DIGITAL FREEDOM<br/>
                &gt; SELF-HOSTED. UNMONETIZED. UNSANITIZED.<br/>
                &gt; ETERNAL FREEDOM.
              </p>

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
          </div>
        </main>

        <footer className="terminal-footer">
          <div className="footer-noise"></div>
          <span className="footer-text"></span>
        </footer>
      </div>
    </div>
  )
}

export default App
