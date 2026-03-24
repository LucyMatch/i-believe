import type { ClusterData } from './types'

// NOTE: Cluster 5 title has three options — finalise at design stage:
// Option A (current): "Invisible Is Never Neutral"
// Option B: "Every Invisible Interaction Was A Choice"
// Option C: "We Are What We Design"

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
    ownWork: [
      {
        text: 'Charge Up Wall — body as input, energy made visible in real time. Ancient interaction logic: you move, the world responds.',
        url: 'https://lucymatch.com/charge-up-wall',
        label: 'New Balance / Sub Rosa',
      },
      {
        text: 'Wired Always On Store — physical presence triggers LEDs. You approach, it responds.',
        url: 'https://lucymatch.com/wired',
        label: 'Condé Nast / Sub Rosa',
      },
      {
        text: 'Luminaries — children returning day after day to the conductor\'s stand. The instrument responding to what they\'d learned.',
        url: 'https://lucymatch.com/luminarues',
        label: 'LAB at Rockwell',
      },
    ],
    outsideExamples: [
      {
        text: 'The hand axe (c. 1.75 million years ago) — the oldest known designed tool, shaped ergonomically to fit the human hand. Interaction design at its most fundamental.',
      },
      {
        text: 'The loom — inherently complex, inherently physical. You can\'t fake mastery of a loom. The interaction between body, thread, and tension IS the craft.',
      },
      {
        text: 'Pencil on paper — the haptic feedback of the tool on the surface. A felt interaction that billions of people still choose over digital alternatives.',
      },
      {
        text: 'Hand-clapping games — pure interaction, no technology. Learned through repetition, mastered through time. Joyful, social, embodied.',
      },
    ],
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
    ownWork: [
      {
        text: 'CNN Upfronts — Bourdain bell jars: lift a jar, smell cedar, hear Bourdain describe a wine with cedar notes. You understood the content immediately, sensorially, memorably. The interaction carried the meaning.',
        url: 'https://lucymatch.com/cnn-exp',
        label: 'CNN / Sub Rosa',
      },
      {
        text: 'CNN Great Big Story torch activation — artifacts revealed by shining a light on them. The interaction was the literal metaphor for the show\'s premise. The medium and the message were the same thing.',
        url: 'https://lucymatch.com/cnn-exp',
        label: 'CNN / Sub Rosa',
      },
      {
        text: 'Speakeasy451 — walking through an archway revealed banned book text. Your body was the trigger. The act of moving through the space was the act of uncovering censored information.',
        url: 'https://lucymatch.com/f451',
        label: 'HBO / Sub Rosa',
      },
      {
        text: 'Hush × Uber — data streams as beams of light travelling through building architecture and assembling into narratives. The data wasn\'t displayed — it was experienced as movement through space.',
        url: 'https://lucymatch.com/hush-x-uber',
        label: 'Uber / Hush',
      },
    ],
    outsideExamples: [
      {
        text: 'Film — tension through music, revelation through light, moral weight through pacing. HOW something is experienced shapes WHAT is understood. Digital interaction designers have largely not applied this thinking.',
      },
      {
        text: 'Open-world RPGs (The Witcher, Red Dead Redemption) — the agency, the time investment, the moral choices — creates depth of connection to story that passive media rarely achieves. You remember because you were IN it.',
      },
      {
        text: 'Bandersnatch (Black Mirror, 2018) — attempted interactive storytelling but lacked genuine agency. A lesson in what happens when you add interactivity without adding meaning to the interaction.',
      },
    ],
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
    ownWork: [
      {
        text: 'Luminaries — built stages into the gesture system so there were always more effects to discover. Kids returned day after day. Eventually they weren\'t just using the instrument — they were creating with it. The mastery arc visible in real time.',
        url: 'https://lucymatch.com/luminarues',
        label: 'LAB at Rockwell',
      },
      {
        text: 'Creative coding experiments — built OpenCV tools to make things I couldn\'t make otherwise. I was my own user. The tools amplified my creativity. I made things I couldn\'t have imagined before building the tool. That\'s IA embodied.',
        url: 'https://lucymatch.com/872003262329',
        label: 'Personal practice',
      },
    ],
    outsideExamples: [
      {
        text: 'Open-world RPGs — the time you invest in a character produces an amplified connection to the story that simply cannot exist without that investment. We expect this from games. We don\'t expect it from most software. We should.',
      },
      {
        text: 'Photoshop — staged complexity as a design philosophy. Beginner can do quite a lot. Advanced changes everything. The payoff compounds. That\'s mastery as a product design principle.',
      },
      {
        text: 'SLR cameras — people still learn them despite iPhones. Manual control isn\'t a limitation, it\'s the point. That\'s the difference between using a tool and mastering one.',
      },
      {
        text: 'ChatGPT used like Google — the interface looked like a search engine, so people used it like one, got disappointed, and left. The interface set the wrong mental model. The tool was never the problem.',
      },
    ],
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
    ownWork: [
      {
        text: 'Luminaries — built-in effect stages. The stages ARE the sandbox. Limited enough to start, open enough that returning visitors always found something new.',
        url: 'https://lucymatch.com/luminarues',
        label: 'LAB at Rockwell',
      },
      {
        text: 'MoMath / Mind Over Measure — get this many balls into this canister. The goal is constrained. The problem-solving is open. Kids iterate, fail, try differently. The constraint creates the engagement.',
        url: 'https://lucymatch.com/momath',
        label: 'MoMath',
      },
      {
        text: 'CNN Great Big Story — simple constraint: shine light ON things. That constraint produces exploratory behaviour. The interaction rewards curiosity by design.',
        url: 'https://lucymatch.com/cnn-exp',
        label: 'CNN / Sub Rosa',
      },
      {
        text: 'OpenCV creative coding tools — built constrained creative environments. The outputs constantly surprised me and pushed me further. The constraints produced creativity I couldn\'t have planned.',
        url: 'https://lucymatch.com/872003262329',
        label: 'Personal practice',
      },
    ],
    outsideExamples: [
      {
        text: '"I\'m making medieval music" is the constraint. It eliminated the paralysis of infinite choice. Teenage Engineering\'s medieval synth — the constraint was the on-ramp.',
      },
      {
        text: 'Reddit r/place — a shared pixel canvas with a time constraint. Communities, strategies, murals. None of it was designed in. All of it emerged from the constraints.',
      },
      {
        text: '"Draw a fish." Faced with blank paper, people freeze. Given a constraint, they draw immediately. Everyone\'s fish is different. The constraint removed the blocker, not the individuality.',
      },
      {
        text: 'GenAI image generators right now — infinite prompt + blank input = paralysis. Better sandboxed interaction design would change what people make and how quickly they feel capable. This is a live, unsolved problem.',
      },
    ],
    color: '#7B5EA7',
    surprise: { type: 'text', content: '[ ♪ 90s auto tune ♪ ]' },
  },
  {
    id: 5,
    slug: 'invisible-is-never-neutral',
    // ALT TITLES — finalise at design/layout stage:
    // "Every Invisible Interaction Was A Choice"
    // "We Are What We Design"
    title: 'Invisible Is Never Neutral.',
    belief: 'I believe Invisible Is Never Neutral.',
    handlebar: 'What happens when we DON\'T — invisible by default is not neutral',
    provocation: 'Every frictionless interface was a decision. Most of them were made without asking what we were giving up.',
    definition:
      '[[Interface decisions shape behaviour.]] We\'ve known this for decades. Facebook\'s design choices had measurable social effects within five years of launch — and continued anyway. [[Making interaction invisible isn\'t neutral]] or benign — it\'s a choice that says speed, efficiency, and commerce are the values that matter, and curiosity, reflection, and connection are not.',
    practical:
      'The argument isn\'t that everything should be loud or demanding. Some interactions should be invisible — friction where there should be none is just bad design. But the decision to make everything invisible, to optimise for total frictionlessness, has consequences we can measure. [[It should be a conscious decision, not the default.]]',
    ownWork: [
      {
        text: 'Speakeasy451 — hidden cameras, a CCTV wall of vintage TVs, banned book text revealed by where your body stood in space. The entire project is about making the invisible visible. The interaction was revelation.',
        url: 'https://lucymatch.com/f451',
        label: 'HBO / Sub Rosa',
      },
      {
        text: 'Charge Up Wall — made the invisible visible: your effort, your speed, your energy output, beautiful on a 30-foot LED wall. The runner saw their own momentum reflected back.',
        url: 'https://lucymatch.com/charge-up-wall',
        label: 'New Balance / Sub Rosa',
      },
      {
        text: 'CNN Bourdain bell jars — made the invisible qualities of content tangible through smell. What it feels like, not just what it is.',
        url: 'https://lucymatch.com/cnn-exp',
        label: 'CNN / Sub Rosa',
      },
    ],
    outsideExamples: [
      {
        text: 'Facebook — social effects were being studied within 5 years of launch. The designers knew. The choices continued. Those interface decisions changed how people relate to each other and to information.',
      },
      {
        text: '"Don\'t Make Me Think" (Steve Krug, 2000) — defined a generation of web design. Important in certain contexts. Applied universally, it arguably set non-thinking as the cultural design ideal.',
      },
      {
        text: 'MySpace, GeoCities, Flash — messy, effortful, weird. People learned to code customising their profiles. The inverse of invisible. It produced people who understood the web as something they could shape, not just consume.',
      },
      {
        text: 'Design singularity → multiplicity — standardisation (Bauhaus, flat UI, the Squarespace era) gives way to multiplicity when new technology enables more things to be built differently. We\'re at that inflection point now.',
      },
    ],
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
    ownWork: [
      {
        text: 'Creative coding experiments — no explanation needed. Just the outputs. Visual evidence of wonder.',
        url: 'https://lucymatch.com/872003262329',
        label: 'Personal practice',
      },
      {
        text: 'Xena installation — a miniature diorama, a buried chakram, a looping scene. Lift the chakram and Xena makes her decision. No client, no brief. Technology and craft and story as the same thing.',
        label: 'Personal work',
      },
      {
        text: 'Papier-mâché lamps and sculptures — manufactured waste made into singular objects. Modern clay. The same impulse that made humans form things from mud, applied to the materials of now. Craft and tech are not opposites.',
        label: 'Personal practice',
      },
    ],
    outsideExamples: [
      {
        text: 'Stumble Upon — not a search, not an algorithm. A surprise. The internet as a place of unexpected encounter. Gone, but mourned.',
      },
      {
        text: 'Tumblr early days — finding community, expression, and humour in a genuinely exploratory space. The platform felt alive because it was built for multiplicity, not optimisation.',
      },
      {
        text: 'Teenage Engineering — hardware that is beautiful, strange, and invites you in. They understand that wonder is a product feature.',
      },
      {
        text: 'VR first contact — the specific moment of picking up a virtual object and your body believing it. That gap between what your brain knows and what your body feels is where wonder lives. Interaction design can create that gap deliberately.',
      },
    ],
    color: '#3BAF7E',
    surprise: { type: 'embed', content: 'click for vibes', href: 'https://youtu.be/nZXRV4MezEw?si=aAj7cGGRG0_zCsHe', embedUrl: 'https://www.youtube.com/embed/nZXRV4MezEw?autoplay=1' },
  },
]
