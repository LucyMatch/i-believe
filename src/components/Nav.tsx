import { useState } from 'react'

export const Nav = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        className={`hamburger${open ? ' is-open' : ''}`}
        onClick={() => setOpen(v => !v)}
        aria-label="Menu"
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`sidebar${open ? ' is-open' : ''}`}>
        <p className="sidebar-title">GOT YA</p>
        <p>there isn't a menu here</p>
      </div>

      {open && <div className="sidebar-overlay" onClick={() => setOpen(false)} />}
    </>
  )
}
