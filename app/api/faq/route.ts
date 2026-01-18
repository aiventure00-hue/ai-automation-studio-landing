import { NextResponse } from 'next/server'
import { FAQ } from '@/types'

const mockFAQ: FAQ[] = [
  {
    id: '1',
    question: 'What is AI Automation Studio?',
    answer: 'AI Automation Studio is a comprehensive platform that allows you to create, manage, and optimize automated workflows using artificial intelligence and machine learning technologies.',
    category: 'general'
  },
  {
    id: '2',
    question: 'How does the visual workflow builder work?',
    answer: 'Our drag-and-drop interface lets you create complex workflows by connecting different nodes and actions. Each node represents a specific action or decision point, and you can configure them without writing any code.',
    category: 'features'
  },
  {
    id: '3',
    question: 'What integrations are available?',
    answer: 'We support over 100 popular integrations including Slack, Google Workspace, Microsoft 365, Salesforce, HubSpot, and many more. New integrations are added regularly.',
    category: 'integrations'
  },
  {
    id: '4',
    question: 'Is my data secure?',
    answer: 'Yes, we use bank-level encryption and security measures. All data is encrypted in transit and at rest. We are SOC 2 Type II certified and comply with GDPR, CCPA, and other major privacy regulations.',
    category: 'security'
  },
  {
    id: '5',
    question: 'Can I customize workflows for my business?',
    answer: 'Absolutely! Our platform is designed to be flexible. You can create custom workflows, use conditional logic, and even build custom integrations using our API.',
    category: 'customization'
  },
  {
    id: '6',
    question: 'What kind of support do you offer?',
    answer: 'We offer email support for all plans, priority support for Professional plans, and 24/7 phone support with a dedicated account manager for Enterprise plans.',
    category: 'support'
  },
  {
    id: '7',
    question: 'Is there a free trial available?',
    answer: 'Yes, we offer a 14-day free trial with full access to all Professional plan features. No credit card required to start.',
    category: 'pricing'
  },
  {
    id: '8',
    question: 'Can I change or cancel my plan anytime?',
    answer: 'Yes, you can upgrade, downgrade, or cancel your subscription at any time. Changes take effect at the next billing cycle.',
    category: 'billing'
  }
]

export async function GET() {
  return NextResponse.json({
    data: mockFAQ,
    success: true
  })
}
