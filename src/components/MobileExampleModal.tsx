import { useEffect } from 'react'
import type { RichExample } from '../data/types'
import { FishDrawing } from './FishDrawing'

interface MobileExampleModalProps {
  groupTitle: string
  items: RichExample[]
  onClose: () => void
}

export const MobileExampleModal = ({ groupTitle, items, onClose }: MobileExampleModalProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div className="mobile-modal-overlay" onClick={onClose}>
      <div className="mobile-modal" onClick={e => e.stopPropagation()}>
        <div className="window-toolbar">
          <span className="window-title">{groupTitle}</span>
          <button className="window-close" onClick={onClose}>✕</button>
        </div>
        <div className="mobile-modal-body">
          {items.map((item, i) => (
            <div key={i}>
              {i > 0 && <hr className="mobile-modal-divider" />}
              <div className="mobile-modal-item">
                <p className="mobile-modal-title">{item.title}</p>
                {item.label && <p className="window-label">{item.label}</p>}
                <p className="window-body-text">{item.description}</p>
                {item.url && (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="window-link">
                    {item.url}
                  </a>
                )}
                {item.links && item.links.length > 0 && (
                  <div className="window-links">
                    {item.links.map((l, j) => (
                      <a key={j} href={l.url} target="_blank" rel="noopener noreferrer" className="window-link">
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
                {item.component === 'fish-drawing' && <FishDrawing />}
                {item.media && item.media.length > 0 && (
                  <div className="window-media">
                    {item.media.map((m, j) => (
                      <figure key={j} className="window-media-item">
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
          ))}
        </div>
      </div>
    </div>
  )
}
