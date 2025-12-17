import './App.css'
import { useState, useEffect, useRef } from 'react'

const GLITCH_CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`█▓▒░'
const TEXT_1 = 'This space is mine. You cannot sanitize it'
const TEXT_2 = 'MORE SOON'

function App() {
  const [displayText, setDisplayText] = useState(TEXT_1)
  const [isDeconstructing, setIsDeconstructing] = useState(false)
  const [isDecoding, setIsDecoding] = useState(false)
  const timeoutsRef = useRef<NodeJS.Timeout[]>([])

  const transitionToText = (fromText: string, toText: string, onComplete?: () => void) => {
    setIsDeconstructing(true)

    let deconstructIteration = 0
    const deconstructLength = fromText.length

    const deconstructInterval = setInterval(() => {
      setDisplayText(() => {
        return fromText.split('')
          .map((char, index) => {
            // Show random characters for positions that have been deconstructed
            if (index >= fromText.length - deconstructIteration) {
              return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
            }
            return char
          })
          .join('')
      })

      deconstructIteration += 1 / 3

      if (deconstructIteration >= deconstructLength) {
        clearInterval(deconstructInterval)
        setIsDeconstructing(false)

        // Start decoding to new text
        setTimeout(() => {
          setIsDecoding(true)

          let iteration = 0
          const targetLength = toText.length

          const interval = setInterval(() => {
            setDisplayText(() => {
              return toText.split('')
                .map((char, index) => {
                  if (index < iteration) {
                    return char
                  }
                  return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
                })
                .join('')
            })

            iteration += 1 / 3

            if (iteration >= targetLength) {
              clearInterval(interval)
              setDisplayText(toText)
              setIsDecoding(false)

              // Call completion callback after animation finishes
              if (onComplete) {
                onComplete()
              }
            }
          }, 50)
        }, 200)
      }
    }, 50)
  }

  useEffect(() => {
    // Transition to TEXT_2 after 4s
    const t1 = setTimeout(() => {
      transitionToText(TEXT_1, TEXT_2)
    }, 4000)
    timeoutsRef.current.push(t1)

    // Transition back to TEXT_1 after 4s (display) + 3s (transition) + 4s (display TEXT_2)
    const t2 = setTimeout(() => {
      transitionToText(TEXT_2, TEXT_1)
    }, 4000 + 3000 + 4000)
    timeoutsRef.current.push(t2)

    // Set up continuous loop - full cycle is 14s (4s + 3s + 4s + 3s)
    const loopInterval = setInterval(() => {
      // Transition to TEXT_2
      transitionToText(TEXT_1, TEXT_2)

      // Then transition back to TEXT_1 after 4s display + 3s transition
      const innerTimeout = setTimeout(() => {
        transitionToText(TEXT_2, TEXT_1)
      }, 4000 + 3000)
      timeoutsRef.current.push(innerTimeout)
    }, 14000) // One complete cycle

    timeoutsRef.current.push(loopInterval as any)

    return () => {
      timeoutsRef.current.forEach(clearTimeout)
      timeoutsRef.current = []
    }
  }, [])

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
          <span className={`status-text ${isDeconstructing ? 'decoding' : ''} ${isDecoding ? 'decoding' : ''}`}>{displayText}</span>
          <span className="bracket">]</span>
        </div>
      </div>
    </div>
  )
}

export default App
