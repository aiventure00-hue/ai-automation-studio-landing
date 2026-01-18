export interface CTAItem {
  title: string
  subtitle: string
  buttons: {
    text: string
    variant?: string
    icon?: string
  }[]
}

export const ctaData: CTAItem = {
  title: 'Ready to explore an automation or AI idea?',
  subtitle: 'One concise message is enough to get started. We will keep it technical and to the point.',
  buttons: [
    {
      text: 'Contact us',
      icon: 'MailIcon'
    },
    {
      text: 'Download company details (PDF)',
      variant: 'ghost'
    }
  ]
}
