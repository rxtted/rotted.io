import './App.css'
import { useState, useEffect, useRef } from 'react'

const GLITCH_CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`█▓▒░'

// Type definition for status text configuration
type StatusTextConfig =
  | string  // Backward compatible: simple string for full-sentence transitions
  | {
      text: string
      useWordDiff?: boolean  // Enable word-diff for transition TO this text
    }

// Add as many status texts as you want here
const STATUS_TEXTS: StatusTextConfig[] = [
  'I am nobodys property.',
  'You cannot sanitize me.',
  { text: 'You cannot monetize me.', useWordDiff: true },
  { text: 'You cannot own me.', useWordDiff: true },
  'More coming soon.'
  // Add more texts here - they'll automatically cycle
]

// Helper function to normalize string|object entries
function getTextConfig(config: StatusTextConfig) {
  return typeof config === 'string'
    ? { text: config, useWordDiff: false }
    : config
}

// Tokenize text into alternating word/non-word segments
function tokenizeText(text: string): Array<{text: string, isWord: boolean}> {
  const tokens: Array<{text: string, isWord: boolean}> = []
  let current = ''
  let isCurrentWord = false

  for (let i = 0; i < text.length; i++) {
    const char = text[i]
    const isWord = /[a-zA-Z0-9]/.test(char)

    if (i === 0) {
      current = char
      isCurrentWord = isWord
    } else if (isWord === isCurrentWord) {
      current += char
    } else {
      tokens.push({ text: current, isWord: isCurrentWord })
      current = char
      isCurrentWord = isWord
    }
  }

  if (current) {
    tokens.push({ text: current, isWord: isCurrentWord })
  }

  return tokens
}

// Compare two texts and mark changed/unchanged tokens
function computeWordDiff(fromText: string, toText: string): {
  fromTokens: Array<{text: string, changed: boolean}>
  toTokens: Array<{text: string, changed: boolean}>
} {
  const fromTokenized = tokenizeText(fromText)
  const toTokenized = tokenizeText(toText)

  const fromTokens = fromTokenized.map((token, i) => ({
    text: token.text,
    changed: !toTokenized[i] || toTokenized[i].text !== token.text
  }))

  const toTokens = toTokenized.map((token, i) => ({
    text: token.text,
    changed: !fromTokenized[i] || fromTokenized[i].text !== token.text
  }))

  return { fromTokens, toTokens }
}

function App() {
  const [displayText, setDisplayText] = useState(() => {
    const firstConfig = getTextConfig(STATUS_TEXTS[0])
    return firstConfig.text.split('').map(() => GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]).join('')
  })
  const [isDeconstructing, setIsDeconstructing] = useState(false)
  const [isDecoding, setIsDecoding] = useState(true)
  const [displayTokens, setDisplayTokens] = useState<Array<{text: string, isAnimating: boolean}>>([])
  const [useTokenDisplay, setUseTokenDisplay] = useState(false)
  const timeoutsRef = useRef<NodeJS.Timeout[]>([])
  const currentIndexRef = useRef(0)

  const transitionToText = (
    fromText: string,
    toText: string,
    useWordDiff: boolean = false,
    onComplete?: () => void
  ) => {
    // Full-sentence mode - instant scramble, then character-by-character decode
    if (!useWordDiff) {
      setIsDeconstructing(true)

      let deconstructIteration = 0
      const deconstructLength = fromText.length

      const deconstructInterval = setInterval(() => {
        setDisplayText(() => {
          // Scramble all characters at once
          return fromText.split('')
            .map(() => GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)])
            .join('')
        })

        deconstructIteration += 1.5  // Slower scramble - still quick but not rushed

        if (deconstructIteration >= deconstructLength) {
          clearInterval(deconstructInterval)
          setIsDeconstructing(false)

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

                if (onComplete) {
                  onComplete()
                }
              }
            }, 50)
          }, 200)
        }
      }, 50)
      return
    }

    // Word-diff mode (new behavior)
    const { fromTokens, toTokens } = computeWordDiff(fromText, toText)

    // Enable token display mode
    setUseTokenDisplay(true)
    setIsDeconstructing(true)

    // Initialize display tokens
    setDisplayTokens(fromTokens.map(token => ({
      text: token.text,
      isAnimating: token.changed
    })))

    // Phase 1: Deconstruct changed tokens
    const changedFromTokens = fromTokens.filter(t => t.changed)
    const maxDeconstructLength = Math.max(...changedFromTokens.map(t => t.text.length), 0)

    let deconstructIteration = 0
    const deconstructInterval = setInterval(() => {
      setDisplayTokens(fromTokens.map(token => {
        if (!token.changed) {
          return { text: token.text, isAnimating: false }
        }

        const scrambledText = token.text.split('').map((char, idx) => {
          if (idx >= token.text.length - deconstructIteration) {
            return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
          }
          return char
        }).join('')

        return { text: scrambledText, isAnimating: true }
      }))

      deconstructIteration += 1 / 3

      if (deconstructIteration >= maxDeconstructLength) {
        clearInterval(deconstructInterval)
        setIsDeconstructing(false)

        // Phase 2: Decode changed tokens to toText
        setTimeout(() => {
          setIsDecoding(true)

          const changedToTokens = toTokens.filter(t => t.changed)
          const maxDecodeLength = Math.max(...changedToTokens.map(t => t.text.length), 0)

          let decodeIteration = 0
          const decodeInterval = setInterval(() => {
            setDisplayTokens(toTokens.map(token => {
              if (!token.changed) {
                return { text: token.text, isAnimating: false }
              }

              const decodedText = token.text.split('').map((char, idx) => {
                if (idx < decodeIteration) return char
                return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
              }).join('')

              return { text: decodedText, isAnimating: true }
            }))

            decodeIteration += 1 / 3

            if (decodeIteration >= maxDecodeLength) {
              clearInterval(decodeInterval)
              setIsDecoding(false)

              // Finalize and disable token display mode
              setDisplayTokens(toTokens.map(token => ({
                text: token.text,
                isAnimating: false
              })))
              setUseTokenDisplay(false)
              setDisplayText(toText)

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
    const firstConfig = getTextConfig(STATUS_TEXTS[0])
    const firstText = firstConfig.text

    let iteration = 0
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
            // Get current and next text with configuration
            const currentIndex = currentIndexRef.current
            const nextIndex = (currentIndex + 1) % STATUS_TEXTS.length

            const fromConfig = getTextConfig(STATUS_TEXTS[currentIndex])
            const toConfig = getTextConfig(STATUS_TEXTS[nextIndex])

            transitionToText(
              fromConfig.text,
              toConfig.text,
              toConfig.useWordDiff || false,  // Read word-diff config from target text
              () => {
                // Update index for next cycle
                currentIndexRef.current = nextIndex

                // Schedule next transition
                scheduleNextTransition()
              }
            )
          }, 1000)

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
      {/* Digital Necrosis - Background decay layers */}
      <div className="necrosis-grid"></div>
      <div className="necrosis-particles"></div>
      <div className="necrosis-glitch-blocks"></div>

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
          <span className="status-text-wrapper">
            {useTokenDisplay ? (
              displayTokens.map((token, idx) => (
                <span
                  key={idx}
                  className={`status-token${token.isAnimating && (isDeconstructing || isDecoding) ? ' decoding' : ''}`}
                >
                  {token.text}
                </span>
              ))
            ) : (
              <span className={`status-text-content${isDeconstructing || isDecoding ? ' decoding' : ''}`}>
                {displayText}
              </span>
            )}
          </span>
          <span className="bracket">]</span>
        </div>
      </div>
    </div>
  )
}

export default App
