import { useState, useEffect, type ReactNode } from 'react'

interface GiveMeMoreProps {
  children: ReactNode
}

export const GiveMeMore = ({ children }: GiveMeMoreProps) => {
  const [revealed, setRevealed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 960px)')
    setIsMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <div
      className="give-me-more"
      onMouseEnter={!isMobile ? () => setRevealed(true) : undefined}
      onMouseLeave={!isMobile ? () => setRevealed(false) : undefined}
    >
      <span
        className={`give-me-more-trigger ${revealed ? 'gmm-hidden' : 'gmm-visible'}`}
        onClick={isMobile && !revealed ? () => setRevealed(true) : undefined}
      >
        {isMobile ? 'I want more!!! click me' : 'I want more!!! hover me'}
      </span>
      <div
        className={`give-me-more-content ${revealed ? 'gmm-visible' : 'gmm-hidden'}`}
        onClick={isMobile && revealed ? () => setRevealed(false) : undefined}
      >
        {children}
      </div>
    </div>
  )
}
