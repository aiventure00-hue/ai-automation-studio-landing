export interface ExpertiseItem {
  id: string
  icon: string
  title: string
  description: string
  tags: string
}

export const expertiseData: ExpertiseItem[] = [
  {
    id: 'ai',
    icon: 'AIIcon',
    title: 'Artificial intelligence & LLMs',
    description: 'Designing prompts, tools and orchestration around modern language models to support your internal workflows.',
    tags: 'OpenAI • embeddings • retrieval'
  },
  {
    id: 'automation',
    icon: 'AutomationIcon',
    title: 'Business process automation',
    description: 'Building and maintaining flows in n8n and similar tools to connect CRMs, ticketing, communication and internal systems.',
    tags: 'n8n • webhooks • APIs'
  },
  {
    id: 'scraping',
    icon: 'ScrapingIcon',
    title: 'Web scraping & data extraction',
    description: 'Stable scraping setups for public web data, with monitoring, storage and export into the tools you already use.',
    tags: 'Headless browsers • queues'
  },
  {
    id: 'integration',
    icon: 'IntegrationIcon',
    title: 'Custom integrations & workflows',
    description: 'When off-the-shelf tools are not enough, we build the missing glue so data can move reliably between systems.',
    tags: 'REST APIs • webhooks • events'
  }
]
