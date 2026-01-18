export interface HeroItem {
  id: string
  kicker: string[]
  title: string
  subtitle: string
  actions: HeroAction[]
  meta: HeroMetaItem[]
  visual: HeroVisual
}

export interface HeroAction {
  id: string
  text: string
  variant: 'primary' | 'ghost'
  icon?: string
}

export interface HeroMetaItem {
  id: string
  icon: string
  text: string
}

export interface HeroVisual {
  title: string
  main: string
  image: {
    src: string
    alt: string
    aspectRatio: string
    query: string
  }
}

export const heroData: HeroItem = {
  id: 'hero',
  kicker: ['Independent IT studio', '•', 'AI, automation & software'],
  title: 'We build calm, reliable systems powered by AI and automation.',
  subtitle: 'Cortexline helps small teams use artificial intelligence, automation and modern web stacks to remove manual work, connect tools and keep data flowing.',
  actions: [
    {
      id: 'describe-use-case',
      text: 'Describe your use case',
      variant: 'primary',
      icon: 'SparklesIcon'
    },
    {
      id: 'see-what-we-work-with',
      text: 'See what we work with',
      variant: 'ghost',
      icon: 'CodeIcon'
    }
  ],
  meta: [
    {
      id: 'llm-workflows',
      icon: 'BotIcon',
      text: 'LLM-powered workflows'
    },
    {
      id: 'n8n-automations',
      icon: 'WorkflowIcon',
      text: 'n8n & custom automations'
    },
    {
      id: 'data-pipelines',
      icon: 'DatabaseIcon',
      text: 'Data pipelines & scraping'
    }
  ],
  visual: {
    title: 'Typical engagement',
    main: 'Map process → design flow → ship automation',
    image: {
      src: '/a4225a9a-20e1-4a72-8e80-59b750be26df.jpg',
      alt: 'Abstract illustration of AI automation pipelines',
      aspectRatio: '16:9',
      query: 'dark github-inspired abstract illustration of AI data flows and automation pipelines, nodes and connections, minimal lines and soft gradients, charcoal and dark gray background with muted blue and teal accents, modern tech aesthetic'
    }
  }
}
