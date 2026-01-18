export interface FooterLink {
  id: string
  text: string
  href?: string
  attributes?: Record<string, string>
}

export interface FooterLogo {
  text: string
  showLogo?: boolean
}

export interface FooterSection {
  id: string
  type: 'text' | 'links' | 'logo'
  content: string | FooterLink[] | FooterLogo
}

export interface FooterItem {
  sections: FooterSection[]
}

export const footerData: FooterItem = {
  sections: [
    {
      id: 'copyright',
      type: 'text',
      content: '© 2026 Cortexline Studio'
    },
    {
      id: 'links',
      type: 'links',
      content: [
        {
          id: 'terms',
          text: 'Terms of Service',
          href: '/terms',
          attributes: {
            'data-media-type': 'banani-button'
          }
        },
        {
          id: 'privacy',
          text: 'Privacy Policy',
          href: '/privacy',
          attributes: {
            'data-media-type': 'banani-button'
          }
        }
      ]
    }
  ]
}
