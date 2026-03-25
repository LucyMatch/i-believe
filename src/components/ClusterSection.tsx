import { useState, useEffect } from 'react'
import type { ClusterData } from '../data/types'
import { GiveMeMore } from './GiveMeMore'
import { BelieveSurprise } from './BelieveSurprise'
import { ExampleWindow, type WindowData } from './ExampleWindow'
import { MobileExampleModal } from './MobileExampleModal'

interface ClusterSectionProps {
  cluster: ClusterData
}

function renderText(text: string) {
  const parts = text.split(/\[\[|\]\]/)
  return parts.map((part, i) =>
    i % 2 === 1 ? <span key={i} className="highlight">{part}</span> : part
  )
}


const BASE_Z = 500
const STAGGER_MS = 120
const OFFSET = 35

function basePos() {
  return {
    x: Math.max(60, window.innerWidth  * 0.3),
    y: Math.max(60, window.innerHeight * 0.15),
  }
}

function isMobile() {
  return window.matchMedia('(max-width: 960px)').matches
}

export const ClusterSection = ({ cluster }: ClusterSectionProps) => {
  const [myWorkWindows, setMyWorkWindows]   = useState<WindowData[]>([])
  const [worldWindows,  setWorldWindows]    = useState<WindowData[]>([])
  const [_nextZ, setNextZ] = useState(BASE_Z)
  const [mobileMyWorkOpen, setMobileMyWorkOpen] = useState(false)
  const [mobileWorldOpen,  setMobileWorldOpen]  = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 960px)')
    const onChange = () => {
      if (!mq.matches) {
        setMobileMyWorkOpen(false)
        setMobileWorldOpen(false)
      } else {
        setMyWorkWindows([])
        setWorldWindows([])
      }
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const bumpZ = (id: string, setter: React.Dispatch<React.SetStateAction<WindowData[]>>) => {
    setNextZ(z => {
      const newZ = z + 1
      setter(prev => prev.map(w => w.id === id ? { ...w, zIndex: newZ } : w))
      return newZ
    })
  }

  const openGroup = (
    items: typeof cluster.ownWork,
    prefix: string,
    setter: React.Dispatch<React.SetStateAction<WindowData[]>>,
    current: WindowData[],
    mobileToggle: () => void,
    _mobileOpen: boolean,
  ) => {
    if (isMobile()) {
      mobileToggle()
      return
    }
    if (current.length > 0) { setter([]); return }
    const base = basePos()
    items.forEach((item, i) => {
      setTimeout(() => {
        setter(prev => [...prev, {
          ...item,
          id:     `${prefix}-${i}`,
          pos:    { x: base.x + i * OFFSET, y: base.y + i * OFFSET },
          zIndex: BASE_Z + i,
        }])
      }, i * STAGGER_MS)
    })
  }

  const closeWindow = (id: string, setter: React.Dispatch<React.SetStateAction<WindowData[]>>) => {
    setter(prev => prev.filter(w => w.id !== id))
  }

  const workItems  = cluster.ownWork
  const worldItems = cluster.outsideExamples

  return (
    <section id={cluster.slug}>
      <div className="section-inner">

        <div className="section-heading">
          <p className="handlebar-copy">0{cluster.id} — {cluster.handlebar}</p>
          <h2 className="believe-title">
            <BelieveSurprise clusterId={cluster.id} surprise={cluster.surprise} />{' '}
            {cluster.title.split('\n').map((line, i, arr) => (
              <span key={i} className="title-text">{line}{i < arr.length - 1 && <br />}</span>
            ))}
          </h2>
        </div>

        <div className="section-columns">
          <div className="section-left">
            <div className="description">
              <p>{renderText(cluster.provocation)}</p>
              <p>{renderText(cluster.definition)}</p>
              <GiveMeMore>
                <p className="give-me-more-text">{renderText(cluster.practical)}</p>
              </GiveMeMore>
            </div>
          </div>

          <div className="section-right">
            <h3>Examples</h3>
            <div className="example-triggers">
              {cluster.ownWork.length > 0 && (
                <span
                  className={`example-trigger${myWorkWindows.length > 0 || mobileMyWorkOpen ? ' is-open' : ''}`}
                  onClick={() => openGroup(workItems, `work-${cluster.id}`, setMyWorkWindows, myWorkWindows, () => setMobileMyWorkOpen(v => !v), mobileMyWorkOpen)}
                >
                  {myWorkWindows.length > 0 || mobileMyWorkOpen ? 'Close all these boxes' : 'In my work'}
                </span>
              )}
              {cluster.outsideExamples.length > 0 && (
                <span
                  className={`example-trigger${worldWindows.length > 0 || mobileWorldOpen ? ' is-open' : ''}`}
                  onClick={() => openGroup(worldItems, `world-${cluster.id}`, setWorldWindows, worldWindows, () => setMobileWorldOpen(v => !v), mobileWorldOpen)}
                >
                  {worldWindows.length > 0 || mobileWorldOpen ? 'Close all these boxes' : 'In the world'}
                </span>
              )}
            </div>
          </div>
        </div>

      </div>

      {myWorkWindows.map(w => (
        <ExampleWindow
          key={w.id} {...w}
          onClose={id => closeWindow(id, setMyWorkWindows)}
          onFocus={id => bumpZ(id, setMyWorkWindows)}
        />
      ))}
      {worldWindows.map(w => (
        <ExampleWindow
          key={w.id} {...w}
          onClose={id => closeWindow(id, setWorldWindows)}
          onFocus={id => bumpZ(id, setWorldWindows)}
        />
      ))}
      {mobileMyWorkOpen && (
        <MobileExampleModal
          groupTitle="In my work"
          items={workItems}
          onClose={() => setMobileMyWorkOpen(false)}
        />
      )}
      {mobileWorldOpen && (
        <MobileExampleModal
          groupTitle="In the world"
          items={worldItems}
          onClose={() => setMobileWorldOpen(false)}
        />
      )}

      <hr />
    </section>
  )
}
