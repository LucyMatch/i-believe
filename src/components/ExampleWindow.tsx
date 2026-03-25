import { useState, useEffect, useRef } from 'react'
import type { RichExample } from '../data/types'
import { FishDrawing } from './FishDrawing'

export interface WindowData extends RichExample {
  id: string
  pos: { x: number; y: number }
  zIndex: number
}

interface ExampleWindowProps extends WindowData {
  onClose: (id: string) => void
  onFocus: (id: string) => void
}

export const ExampleWindow = ({ id, title, description, label, url, links, media, component, pos: initialPos, zIndex, onClose, onFocus }: ExampleWindowProps) => {
  const [pos, setPos] = useState(initialPos)
  const dragging = useRef(false)
  const dragOffset = useRef({ x: 0, y: 0 })

  const handleToolbarMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.window-close')) return
    onFocus(id)
    dragging.current = true
    dragOffset.current = { x: e.clientX - pos.x, y: e.clientY - pos.y }
  }

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!dragging.current) return
      setPos({ x: e.clientX - dragOffset.current.x, y: e.clientY - dragOffset.current.y })
    }
    const onUp = () => { dragging.current = false }
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onUp)
    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup', onUp)
    }
  }, [])

  return (
    <div
      className="example-window"
      style={{ left: pos.x, top: pos.y, zIndex }}
      onMouseDown={() => onFocus(id)}
    >
      <div className="window-toolbar" onMouseDown={handleToolbarMouseDown}>
        <span className="window-title">{title}</span>
        <button className="window-close" onMouseDown={e => e.stopPropagation()} onClick={() => onClose(id)}>✕</button>
      </div>
      <div className="window-body">
        {label && <p className="window-label">{label}</p>}
        <p className="window-body-text">{description}</p>
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer" className="window-link">
            {url}
          </a>
        )}
        {links && links.length > 0 && (
          <div className="window-links">
            {links.map((l, i) => (
              <a key={i} href={l.url} target="_blank" rel="noopener noreferrer" className="window-link">
                {l.label}
              </a>
            ))}
          </div>
        )}
        {component === 'fish-drawing' && <FishDrawing />}
        {media && media.length > 0 && (
          <div className="window-media">
            {media.map((m, i) => (
              <figure key={i} className="window-media-item">
                {(m.type === 'vimeo' || m.type === 'youtube') ? (
                  <iframe
                    src={m.src}
                    width="100%"
                    style={{ aspectRatio: '16/9', border: 'none' }}
                    allow="fullscreen"
                    allowFullScreen
                  />
                ) : m.type === 'video' ? (
                  <video src={m.src} controls width="100%" style={{ display: 'block' }} />
                ) : (
                  <img src={m.src} alt={m.alt || ''} />
                )}
                {m.caption && <figcaption>{m.caption}</figcaption>}
              </figure>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
