import { useEffect, useState } from 'react'

export const Header = () => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < 150)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header>
      <div className="header-inner">
        <div className="header-columns">
          <div className="header-left">
            <p>what i believe by</p>
            <h1>Lucy Matchett</h1>
            <p>Design Engineer &amp;<br />Creative Technologist</p>
          </div>
          <div className="header-right">
            <p>
              I believe the way we design <span className="highlight">interaction shapes how people feel, learn, and create.</span> The following are the six things I keep coming back to.
            </p>
          </div>
        </div>
      </div>
      <div className="scroll-hint" style={{ opacity: visible ? 1 : 0 }}>
        <p>wow content is below the fold</p>
        <span>↓</span>
      </div>
    </header>
  )
}
