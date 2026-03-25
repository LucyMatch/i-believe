import type { ClusterData } from './types'
import { cluster1Examples } from './examples/cluster-1'
import { cluster2Examples } from './examples/cluster-2'
import { cluster3Examples } from './examples/cluster-3'
import { cluster4Examples } from './examples/cluster-4'
import { cluster5Examples } from './examples/cluster-5'
import { cluster6Examples } from './examples/cluster-6'

export const clusters: ClusterData[] = [
  {
    id: 1,
    slug: 'interaction-is-ancient',
    title: 'Interaction Is Ancient.',
    belief: 'I believe Interaction Is Ancient.',
    handlebar: 'What interaction IS — and has always been',
    provocation:
      'We\'ve been crafting interactions since the first hand axe was shaped to fit a human palm. So why are we designing them like they don\'t matter?',
    definition:
      '[[Interaction isn\'t a digital design problem. It\'s a human one.]] It predates screens, predates computers, predates electricity — it\'s the fundamental way we exist in the world and communicate with each other and the things around us.',
    practical:
      'When we design digital interactions as if they\'re invisible infrastructure, we\'re working against something ancient and innate. Traditional UI/UX conventions for digital products have tended to optimise away from felt, memorable interaction — toward frictionless, forgettable ones. That\'s a choice, not a given.',
    ...cluster1Examples,
    color: '#E8C547',
    surprise: { type: 'text', content: '[ ♪ in Cher voice ♪ ]' },
  },
  {
    id: 2,
    slug: 'interaction-is-a-communication-medium',
    title: 'Interaction Is A Communication Medium.',
    belief: 'I believe Interaction Is A Communication Medium.',
    handlebar: 'What interaction can DO — when treated as more than a pipe',
    provocation:
      'We\'ve spent decades perfecting how fast content gets delivered. We haven\'t spent nearly enough time on how it lands.',
    definition:
      '[[The way we design interaction shapes how meaning lands.]] It\'s not just a vehicle for content — it\'s the experiential layer through which content is understood, felt, and remembered. A film score doesn\'t deliver story, it makes story hit harder. Interaction design can do the same thing — and mostly, we\'ve chosen not to.',
    practical:
      'We\'ve been building digital products as if meaning only transfers through content. It doesn\'t. The act of engaging with something — the way you move through it, what it asks of you, what it gives back — shapes what you take away. When we treat interaction as invisible plumbing, we waste the most powerful part of the toolkit.',
    ...cluster2Examples,
    color: '#E8734A',
    surprise: { type: 'text', content: '[ ... in life after love ]' },
  },
  {
    id: 3,
    slug: 'agency-mastery-amplification',
    title: 'In Agency, Mastery, And Amplification.',
    belief: 'I believe In Agency, Mastery, And Amplification.',
    handlebar: 'What good interaction PRODUCES — and why the three are inseparable',
    provocation:
      'The most powerful tools don\'t just help you do something — [[they change what you\'re capable of doing.]] Those are a different kind of tool.',
    definition:
      'Agency, mastery, and amplification are inseparable. You can\'t reach amplification without mastery. You can\'t build mastery without agency. And you can\'t have genuine agency without an interaction that respects your intelligence and gives you room to grow. This is Intelligence Amplification — Douglas Engelbart\'s term for technology that makes humans more capable, not technology that replaces human effort.',
    practical:
      'The payoff isn\'t speed or ease. It\'s the moment you realise you can do something you couldn\'t do before — because you spent time with a tool, learned its edges, and made it yours. [[A few users who master your tool are worth more than many who use it quickly and drop it.]]',
    ...cluster3Examples,
    color: '#4A90D9',
    surprise: { type: 'gif', content: 'https://media1.tenor.com/m/sqEBEFcgaygAAAAd/beautiful-pretty.gif' },
  },
  {
    id: 4,
    slug: 'sandboxes-and-constraint',
    title: 'In Sandboxes And Constraint.',
    belief: 'I believe In Sandboxes And Constraint.',
    handlebar: 'How to BUILD for agency — constraints as the mechanism that unlocks mastery',
    provocation: 'The blank canvas is the enemy of the beginner. The sandbox is the friend of everyone.',
    definition:
      '[[Constraints aren\'t limitations — they\'re handles.]] A defined sandbox, even an arbitrary one, gives you something to push against. It reduces the fear of starting, which is often the biggest barrier between a person and a tool they could eventually master. The best interactions build in just enough structure to launch you, with enough openness to surprise you — and surprise is how mastery begins.',
    practical:
      '[[This is how you design toward agency, mastery, and amplification.]] Sandboxes give users the foothold to begin — and that first foothold is what makes mastery possible. You can\'t master something you were too intimidated to start.',
    ...cluster4Examples,
    color: '#7B5EA7',
    surprise: { type: 'text', content: '[ ♪ 90s auto tune ♪ ]' },
  },
  {
    id: 5,
    slug: 'invisible-is-never-neutral',
    title: 'Invisible Is Never Neutral.',
    belief: 'I believe Invisible Is Never Neutral.',
    handlebar: 'What happens when we DON\'T — invisible by default is not neutral',
    provocation: 'Every frictionless interface was a decision. Most of them were made without asking what we were giving up.',
    definition:
      '[[Interface decisions shape behaviour.]] We\'ve known this for decades. Facebook\'s design choices had measurable social effects within five years of launch — and continued anyway. [[Making interaction invisible isn\'t neutral]] or benign — it\'s a choice that says speed, efficiency, and commerce are the values that matter, and curiosity, reflection, and connection are not.',
    practical:
      'The argument isn\'t that everything should be loud or demanding. Some interactions should be invisible — friction where there should be none is just bad design. But the decision to make everything invisible, to optimise for total frictionlessness, has consequences we can measure. [[It should be a conscious decision, not the default.]]',
    ...cluster5Examples,
    color: '#E84E5E',
    surprise: { type: 'gif', content: 'https://media.tenor.com/C8_Y8Bx9siAAAAAj/disco-mirror-ball-djrobe.gif' },
  },
  {
    id: 6,
    slug: 'technology-is-magic',
    title: 'Technology Is Magic.\nAnd We\'re All Witches.',
    belief: 'I believe Technology Is Magic. And We\'re All Witches.',
    handlebar: 'What\'s possible if we DO — the moment we\'re in right now',
    provocation: 'We\'ve spent years building extraordinary things and forgetting to notice.',
    definition:
      '[[Technology throughout human history IS what we called magic.]] We dreamed of flying, of seeing someone halfway around the world, of creating something from nothing — and we built all of it ourselves. [[The wonder of that matters.]] It drives curiosity, connection, and the willingness to imagine what hasn\'t been made yet. We\'ve let that wonder get buried under familiarity, doom, and commerce. We can choose to nurture it instead.',
    practical:
      'Right now, [[we\'re at an inflection point.]] AI means we can build faster, prototype more, and create interfaces that are hyper-specific to individual people. Hamburger menus don\'t have to be universal. Every person could have an interface that actually serves how they think. This is the moment to inject wonder back in — not double down on efficiency. The tools exist. The question is what we choose to build with them.',
    ...cluster6Examples,
    color: '#3BAF7E',
    surprise: { type: 'embed', content: 'click for vibes', href: 'https://youtu.be/nZXRV4MezEw?si=aAj7cGGRG0_zCsHe', embedUrl: 'https://www.youtube.com/embed/nZXRV4MezEw?autoplay=1' },
  },
]
