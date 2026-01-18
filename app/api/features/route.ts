import { NextResponse } from 'next/server'
import { Feature } from '@/types'

const mockFeatures: Feature[] = [
  {
    id: '1',
    title: 'Visual Workflow Builder',
    description: 'Drag-and-drop interface to create complex automation workflows without coding',
    icon: 'workflow',
    category: 'automation'
  },
  {
    id: '2',
    title: 'AI-Powered Decisions',
    description: 'Smart decision-making powered by machine learning algorithms',
    icon: 'brain',
    category: 'ai'
  },
  {
    id: '3',
    title: 'Multi-Platform Integration',
    description: 'Connect with 100+ popular apps and services seamlessly',
    icon: 'integration',
    category: 'integration'
  },
  {
    id: '4',
    title: 'Real-time Monitoring',
    description: 'Track your automation performance with detailed analytics',
    icon: 'analytics',
    category: 'monitoring'
  },
  {
    id: '5',
    title: 'Team Collaboration',
    description: 'Work together with your team on automation projects',
    icon: 'team',
    category: 'collaboration'
  },
  {
    id: '6',
    title: 'Enterprise Security',
    description: 'Bank-level security to protect your data and workflows',
    icon: 'security',
    category: 'security'
  }
]

export async function GET() {
  return NextResponse.json({
    data: mockFeatures,
    success: true
  })
}
