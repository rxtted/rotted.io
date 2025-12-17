import './App.css'

function App() {
  return (
    <div className="terminal-container">
      {/* Logo effects applied to background */}
      <div className="logo-scanlines"></div>
      <div className="logo-crt-overlay"></div>
      <div className="logo-static"></div>
      <div className="logo-corruption-overlay"></div>

      {/* Centered logo */}
      <div className="logo-section">
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

        <div className="status-line">
          <span className="bracket">[</span>
          <span className="status-text">FUCK YOUR CONTROL</span>
          <span className="bracket">]</span>
        </div>
      </div>
    </div>
  )
}

export default App
