import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/contexts/Theme'
import { DeviceProvider } from '@/contexts/Device'

export const metadata: Metadata = {
  title: 'AI Automation Studio',
  description: 'Landing page for AI Automation Studio',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <DeviceProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </DeviceProvider>
      </body>
    </html>
  )
}
