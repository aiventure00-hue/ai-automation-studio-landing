// Static data for GitHub Pages deployment
// API routes are not supported on static hosting

export interface ContactFormData {
  name: string
  email: string
  message: string
}

// Mock contact form handler for static site
export const submitContactForm = async (data: ContactFormData) => {
  // For static GitHub Pages, we'll use a simple mailto link
  // In production, this would connect to a real backend service
  console.log('Contact form submission:', data)
  
  // Create mailto link (fallback for static sites)
  const subject = encodeURIComponent(`Contact from ${data.name}`)
  const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`)
  const mailtoLink = `mailto:hello@cortexline.com?subject=${subject}&body=${body}`
  
  // Open email client
  window.open(mailtoLink, '_blank')
  
  return { success: true, message: 'Email client opened' }
}

// FAQ data
export const faqData = [
  {
    id: '1',
    question: 'What services do you offer?',
    answer: 'We specialize in AI integration, business process automation, web scraping, and custom software development.'
  },
  {
    id: '2',
    question: 'How long does a typical project take?',
    answer: 'Projects typically range from 4-8 weeks for MVPs, with ongoing iteration support available.'
  },
  {
    id: '3',
    question: 'What technologies do you work with?',
    answer: 'We work with modern web stacks, AI/ML frameworks, automation tools like n8n, and cloud platforms.'
  }
]

// Features data
export const featuresData = [
  {
    id: '1',
    title: 'AI-Powered Workflows',
    description: 'Intelligent automation that learns from your business processes',
    icon: 'AIIcon'
  },
  {
    id: '2',
    title: 'Custom Integrations',
    description: 'Connect your existing tools and systems seamlessly',
    icon: 'IntegrationIcon'
  },
  {
    id: '3',
    title: 'Real-time Monitoring',
    description: 'Track your automations and get alerts when issues arise',
    icon: 'MonitorIcon'
  }
]
