import { useState, useEffect, useRef } from 'react'
import type { Surprise } from '../data/types'

interface BelieveSurpriseProps {
  clusterId: number
  surprise: Surprise
}

export const BelieveSurprise = ({ clusterId, surprise }: BelieveSurpriseProps) => {
  const [hoverVisible, setHoverVisible] = useState(false)
  const [embedOpen, setEmbedOpen]       = useState(false)
  const [mobileVisible, setMobileVisible] = useState(false)
  const [mobileFading, setMobileFading]   = useState(false)
  const [cursorPos, setCursorPos]         = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile]           = useState(false)
  const triggerRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 960px)')
    setIsMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // Auto-fade mobile popup after 2s (text and gif)
  useEffect(() => {
    if (!mobileVisible || surprise.type === 'embed') return
    setMobileFading(false)
    const fadeTimer = setTimeout(() => setMobileFading(true), 1200)
    const hideTimer = setTimeout(() => { setMobileVisible(false); setMobileFading(false) }, 1700)
    return () => { clearTimeout(fadeTimer); clearTimeout(hideTimer) }
  }, [mobileVisible, surprise.type])

  // Follow cursor globally when embed is open
  useEffect(() => {
    if (!embedOpen) return
    const onMove = (e: MouseEvent) => setCursorPos({ x: e.clientX + 16, y: e.clientY + 16 })
    const onClickAway = () => setEmbedOpen(false)
    document.addEventListener('mousemove', onMove)
    document.addEventListener('click', onClickAway)
    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('click', onClickAway)
    }
  }, [embedOpen])

  // ── Desktop handlers ──────────────────────────────────────
  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX + 16, y: e.clientY + 16 })
  }

  const handleDesktopClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (surprise.type === 'embed') setEmbedOpen(v => !v)
  }

  // ── Mobile handlers ───────────────────────────────────────
  const handleMobileClick = () => {
    if (surprise.type === 'embed' && surprise.href) {
      window.open(surprise.href, '_blank', 'noopener,noreferrer')
      return
    }
    setMobileVisible(v => !v)
  }

  return (
    <span className="believe-wrapper">
      <span
        ref={triggerRef}
        id={`i-believe-${clusterId}`}
        className="i-believe-trigger"
        onMouseEnter={!isMobile ? () => setHoverVisible(true)  : undefined}
        onMouseLeave={!isMobile ? () => setHoverVisible(false) : undefined}
        onMouseMove={!isMobile ? handleMouseMove : undefined}
        onClick={isMobile ? handleMobileClick : handleDesktopClick}
      >
        I believe
      </span>

      {/* Mobile: text or gif — absolute above trigger, scrolls with page, fades after 2s */}
      {isMobile && mobileVisible && surprise.type !== 'embed' && (
        <span className={`surprise-mobile-popup${mobileFading ? ' fading' : ''}`}>
          {surprise.type === 'gif'
            ? <img src={surprise.content} alt="" />
            : <span className="surprise-subtitle">{surprise.content}</span>
          }
        </span>
      )}

      {/* Desktop: hover popup */}
      {!isMobile && hoverVisible && !embedOpen && (
        <div className="surprise-popup" style={{ left: cursorPos.x, top: cursorPos.y }}>
          {surprise.type === 'gif' && <img src={surprise.content} alt="" />}
          {(surprise.type === 'text' || surprise.type === 'embed') && (
            <span className="surprise-subtitle">{surprise.content}</span>
          )}
        </div>
      )}

      {/* Desktop: embed iframe following cursor */}
      {!isMobile && surprise.type === 'embed' && embedOpen && (
        <div className="surprise-popup surprise-embed" style={{ left: cursorPos.x, top: cursorPos.y }}>
          <iframe
            src={surprise.embedUrl}
            width="320"
            height="180"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      )}
    </span>
  )
}
