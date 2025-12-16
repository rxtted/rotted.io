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
              <img
                src="/bannerlogo.svg"
                alt="ROTTED.IO"
                className="banner-logo"
              />
            </div>
            <div className="status-line">
              <span className="bracket">[</span>
              <span className="status-text">DIGITAL SOVEREIGNTY</span>
              <span className="bracket">]</span>
            </div>
          </div>

          <div className="info-panel">
            <div className="panel-border"></div>
            <div className="panel-content">
              <p className="manifesto-text">
                &gt; RECLAIMING DIGITAL TERRITORY<br/>
                &gt; SELF-HOSTED. UNMONETIZED. UNOPTIMIZED.<br/>
                &gt; THIS SPACE IS MINE.
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
          <span className="footer-text">ANTI-CORPORATE DIGITAL SPACE</span>
        </footer>
      </div>
    </div>
  )
}

export default App
