export interface ServiceItem {
  id: string
  title: string
  description: string
  meta: string
}

export const servicesData: ServiceItem[] = [
  {
    id: 'discovery',
    title: 'Discovery & mapping',
    description: 'Short workshops to map your current process, tools and constraints, and identify realistic automation or AI opportunities.',
    meta: '1–2 weeks • remote sessions'
  },
  {
    id: 'prototype',
    title: 'Prototype & MVP',
    description: 'Focused builds that validate a single workflow or use case end-to-end before rolling out to a wider team.',
    meta: '4–8 weeks • fixed scope'
  },
  {
    id: 'iteration',
    title: 'Ongoing iteration',
    description: 'Lightweight retainers to maintain, extend and keep your automations and AI integrations healthy over time.',
    meta: 'Monthly • flexible hours'
  }
]
