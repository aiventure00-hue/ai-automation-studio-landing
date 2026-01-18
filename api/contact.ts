export interface ContactItem {
  label: string
  title: string
  description: string
  pills: string[]
}

export const contactData: ContactItem = {
  label: 'Contact',
  title: 'Start with a short note',
  description: 'Send us a few lines about your current process, tools and what you would like to improve. We will reply with a short assessment and suggest concrete next steps.',
  pills: [
    'Typical reply within 1–2 business days',
    'English or German',
    'Email-first, no calls required'
  ]
}
