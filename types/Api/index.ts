export interface ApiEndpoints {
  features: '/api/features'
  pricing: '/api/pricing'
  testimonials: '/api/testimonials'
  faq: '/api/faq'
  contact: '/api/contact'
}

export interface PaginationParams {
  page: number
  limit: number
  total?: number
}

export interface SearchParams {
  query?: string
  filters?: Record<string, any>
  sort?: string
  order?: 'asc' | 'desc'
}

export interface Feature {
  id: string
  title: string
  description: string
  icon: string
  category: string
}

export interface PricingPlan {
  id: string
  name: string
  price: number
  currency: string
  period: 'monthly' | 'yearly'
  features: string[]
  popular?: boolean
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  avatar: string
  content: string
  rating: number
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

export interface ContactForm {
  name: string
  email: string
  message: string
  company?: string
}
