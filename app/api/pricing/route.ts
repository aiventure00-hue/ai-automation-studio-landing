import { NextResponse } from 'next/server'
import { PricingPlan } from '@/types'

const mockPricing: PricingPlan[] = [
  {
    id: '1',
    name: 'Starter',
    price: 29,
    currency: 'USD',
    period: 'monthly',
    features: [
      'Up to 1,000 tasks per month',
      'Basic integrations',
      'Email support',
      '5 workflows',
      '1 team member'
    ]
  },
  {
    id: '2',
    name: 'Professional',
    price: 79,
    currency: 'USD',
    period: 'monthly',
    features: [
      'Up to 10,000 tasks per month',
      'Advanced integrations',
      'Priority support',
      'Unlimited workflows',
      '5 team members',
      'Custom analytics',
      'API access'
    ],
    popular: true
  },
  {
    id: '3',
    name: 'Enterprise',
    price: 199,
    currency: 'USD',
    period: 'monthly',
    features: [
      'Unlimited tasks',
      'All integrations',
      '24/7 phone support',
      'Unlimited workflows',
      'Unlimited team members',
      'Advanced analytics',
      'Custom API development',
      'Dedicated account manager',
      'SLA guarantee',
      'Custom training'
    ]
  }
]

export async function GET() {
  return NextResponse.json({
    data: mockPricing,
    success: true
  })
}
