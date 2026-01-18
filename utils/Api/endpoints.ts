import { ApiEndpoints, Feature, PricingPlan, Testimonial, FAQ, ContactForm } from '@/types'

export const apiEndpoints: ApiEndpoints = {
  features: '/api/features',
  pricing: '/api/pricing',
  testimonials: '/api/testimonials',
  faq: '/api/faq',
  contact: '/api/contact'
}

export async function fetchFeatures(): Promise<Feature[]> {
  const response = await fetch(apiEndpoints.features)
  const result = await response.json()
  return result.data
}

export async function fetchPricing(): Promise<PricingPlan[]> {
  const response = await fetch(apiEndpoints.pricing)
  const result = await response.json()
  return result.data
}

export async function fetchTestimonials(): Promise<Testimonial[]> {
  const response = await fetch(apiEndpoints.testimonials)
  const result = await response.json()
  return result.data
}

export async function fetchFAQ(): Promise<FAQ[]> {
  const response = await fetch(apiEndpoints.faq)
  const result = await response.json()
  return result.data
}

export async function submitContactForm(data: ContactForm): Promise<any> {
  const response = await fetch(apiEndpoints.contact, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return response.json()
}
