export interface AboutItem {
  label: string
  title: string
  description: string[]
  pills: string[]
}

export const aboutData: AboutItem = {
  label: 'About us',
  title: 'Small, focused IT team',
  description: [
    'We are a compact group of developers who enjoy working close to real workflows. No layers of management – just direct collaboration with the people who use the systems we build.',
    'Our background is in <span class="highlight">backend engineering, automation and AI tooling</span>. We prefer small, well-scoped projects that can be iterated on over time.'
  ],
  pills: [
    'Remote-first, EU-based',
    'Engineering-led, no sales team',
    'Clear, predictable delivery'
  ]
}
