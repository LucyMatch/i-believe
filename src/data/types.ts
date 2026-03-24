// Types for the I Believe manifesto site

export interface Example {
  text: string
  url?: string
  label?: string // e.g. "Own work" | "Outside example"
}

export interface Surprise {
  type: 'text' | 'gif' | 'embed'
  content: string    // subtitle text or gif URL
  href?: string      // mobile: open this URL
  embedUrl?: string  // desktop: YouTube embed src for iframe
}

export interface ClusterData {
  id: number
  slug: string
  title: string                  // e.g. "Interaction Is Ancient"
  belief: string                 // Full "I believe..." statement
  handlebar: string              // Orientation line
  provocation: string            // One-line friction statement
  definition: string             // WHAT is this?
  practical: string              // SO WHAT?
  ownWork: Example[]
  outsideExamples: Example[]
  color: string                  // Accent color for this cluster
  surprise: Surprise
}
