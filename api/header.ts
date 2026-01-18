export interface HeaderLink {
  id: string
  href: string
  text: string
  attributes?: Record<string, string>
}

export interface HeaderButton {
  id: string
  text: string
  icon?: string
  className?: string
}

export interface HeaderLogo {
  mainText: string
  subText: string
}

export interface HeaderItem {
  logo: HeaderLogo
  navigation: HeaderLink[]
  cta: HeaderButton
}

export const headerData: HeaderItem = {
  logo: {
    mainText: 'Cortexline Studio',
    subText: 'AI, automation & software solutions'
  },
  navigation: [
    {
      id: 'about',
      href: '/about',
      text: 'About',
      attributes: {
        'data-media-type': 'banani-button'
      }
    },
    {
      id: 'expertise',
      href: '/expertise',
      text: 'Expertise',
      attributes: {
        'data-media-type': 'banani-button'
      }
    },
    {
      id: 'services',
      href: '/services',
      text: 'Services',
      attributes: {
        'data-media-type': 'banani-button'
      }
    },
    {
      id: 'contact',
      href: '/contact',
      text: 'Contact',
      attributes: {
        'data-media-type': 'banani-button'
      }
    }
  ],
  cta: {
    id: 'start-project',
    text: 'Start a project',
    icon: 'ArrowRightIcon',
    className: 'headerCta'
  }
}
