import { NextResponse } from 'next/server'
import { Testimonial } from '@/types'

const mockTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    avatar: '/avatars/sarah.jpg',
    content: 'AI Automation Studio transformed our business processes. We reduced manual work by 80% and increased productivity significantly.',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Operations Manager',
    company: 'Global Logistics',
    avatar: '/avatars/michael.jpg',
    content: 'The visual workflow builder is incredible. Our team can create complex automations without any coding knowledge.',
    rating: 5
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'Creative Agency',
    avatar: '/avatars/emily.jpg',
    content: 'Best investment we made this year. The AI-powered decisions helped us optimize our marketing campaigns automatically.',
    rating: 5
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'CTO',
    company: 'StartupHub',
    avatar: '/avatars/david.jpg',
    content: 'The API access and custom integrations allowed us to build exactly what we needed. Highly recommended!',
    rating: 5
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    role: 'HR Manager',
    company: 'Finance Corp',
    avatar: '/avatars/lisa.jpg',
    content: 'Onboarding new employees used to take weeks. Now it\'s automated and seamless. Game changer for HR.',
    rating: 5
  },
  {
    id: '6',
    name: 'James Wilson',
    role: 'Founder',
    company: 'E-commerce Store',
    avatar: '/avatars/james.jpg',
    content: 'The real-time monitoring helps us track everything. Support team is amazing and always ready to help.',
    rating: 5
  }
]

export async function GET() {
  return NextResponse.json({
    data: mockTestimonials,
    success: true
  })
}
