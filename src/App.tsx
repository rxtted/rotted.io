import './App.css'
import { useState, useEffect, useRef } from 'react'

const GLITCH_CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`█▓▒░'

// Add as many status texts as you want here
const STATUS_TEXTS = [
  'This space is mine.',
  'You cannot sanitize it.',
  // Add more texts here - they'll automatically cycle
]

function App() {
  const [displayText, setDisplayText] = useState(
    STATUS_TEXTS[0].split('').map(() => GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]).join('')
  )
  const [isDeconstructing, setIsDeconstructing] = useState(false)
  const [isDecoding, setIsDecoding] = useState(true)
  const timeoutsRef = useRef<NodeJS.Timeout[]>([])
  const currentIndexRef = useRef(0)

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
    // Decode first text immediately on page load
    let iteration = 0
    const firstText = STATUS_TEXTS[0]
    const targetLength = firstText.length

    const initialDecodeInterval = setInterval(() => {
      setDisplayText(() => {
        return firstText.split('')
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
        clearInterval(initialDecodeInterval)
        setDisplayText(firstText)
        setIsDecoding(false)

        // After initial decode completes, start the cycle
        const scheduleNextTransition = () => {
          const timeout = setTimeout(() => {
            // Get current and next text
            const currentIndex = currentIndexRef.current
            const nextIndex = (currentIndex + 1) % STATUS_TEXTS.length
            const fromText = STATUS_TEXTS[currentIndex]
            const toText = STATUS_TEXTS[nextIndex]

            transitionToText(fromText, toText, () => {
              // Update index for next cycle
              currentIndexRef.current = nextIndex

              // Schedule next transition
              scheduleNextTransition()
            })
          }, 4000)

          timeoutsRef.current.push(timeout)
        }

        // Start the cycle
        scheduleNextTransition()
      }
    }, 50)

    return () => {
      clearInterval(initialDecodeInterval)
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
