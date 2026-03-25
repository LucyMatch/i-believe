// Types for the I Believe manifesto site

export interface RichMedia {
  type: 'image' | 'gif' | 'vimeo' | 'youtube' | 'video'
  src: string          // image/gif: path relative to /public — vimeo/youtube: embed URL — video: path relative to /public
  alt?: string
  caption?: string
}

export interface RichLink {
  label: string
  url: string
}

export interface RichExample {
  title: string
  description: string
  label?: string           // client / context e.g. "New Balance / Sub Rosa"
  url?: string             // primary link
  links?: RichLink[]       // additional links
  media?: RichMedia[]      // images, gifs, vimeo, youtube, video
  component?: 'fish-drawing'  // interactive component override
}

export interface ClusterExamples {
  ownWork: RichExample[]
  outsideExamples: RichExample[]
}

export interface Surprise {
  type: 'text' | 'gif' | 'embed'
  content: string
  href?: string
  embedUrl?: string
}

export interface ClusterData {
  id: number
  slug: string
  title: string
  belief: string
  handlebar: string
  provocation: string
  definition: string
  practical: string
  ownWork: RichExample[]
  outsideExamples: RichExample[]
  color: string
  surprise: Surprise
}
