import type { ClusterData } from '../data/types'
import { GiveMeMore } from './GiveMeMore'
import { BelieveSurprise } from './BelieveSurprise'

interface ClusterSectionProps {
  cluster: ClusterData
}

function renderText(text: string) {
  const parts = text.split(/\[\[|\]\]/)
  return parts.map((part, i) =>
    i % 2 === 1 ? <span key={i} className="highlight">{part}</span> : part
  )
}

export const ClusterSection = ({ cluster }: ClusterSectionProps) => {
  return (
    <section id={cluster.slug}>
      <div className="section-inner">

        <div className="section-heading">
          <p className="handlebar-copy">0{cluster.id} — {cluster.handlebar}</p>
          <h2 className="believe-title">
            <BelieveSurprise clusterId={cluster.id} surprise={cluster.surprise} />{' '}
            {cluster.title.split('\n').map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
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
            {cluster.ownWork.length > 0 && (
              <div>
                <h3>In my work</h3>
                <ul>
                  {cluster.ownWork.map((ex, i) => (
                    <li key={i}>
                      {ex.label && <strong>{ex.label}: </strong>}
                      {ex.url ? (
                        <a href={ex.url} target="_blank" rel="noopener noreferrer">
                          {ex.text}
                        </a>
                      ) : (
                        ex.text
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {cluster.outsideExamples.length > 0 && (
              <div>
                <h3>In the world</h3>
                <ul>
                  {cluster.outsideExamples.map((ex, i) => (
                    <li key={i}>{ex.text}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

      </div>
      <hr />
    </section>
  )
}
