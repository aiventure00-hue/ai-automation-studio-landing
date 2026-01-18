import { NextResponse } from 'next/server'
import { ContactForm } from '@/types'

export async function POST(request: Request) {
  try {
    const body: ContactForm = await request.json()
    
    const { name, email, message, company } = body
    
    if (!name || !email || !message) {
      return NextResponse.json({
        success: false,
        message: 'Name, email, and message are required'
      }, { status: 400 })
    }
    
    console.log('Contact form submission:', { name, email, message, company })
    
    return NextResponse.json({
      success: true,
      message: 'Thank you for your message. We will get back to you soon!'
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Failed to submit contact form'
    }, { status: 500 })
  }
}
