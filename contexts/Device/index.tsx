'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { DeviceType } from '@/types'

interface DeviceContextType {
  device: DeviceType
  isClient: boolean
}

const DeviceContext = createContext<DeviceContextType | undefined>(undefined)

export function DeviceProvider({ children }: { children: React.ReactNode }) {
  const [device, setDevice] = useState<DeviceType>({
    isDesktop: false,
    isTablet: false,
    isMobile: false,
  })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    const checkDevice = () => {
      const width = window.innerWidth
      
      setDevice({
        isDesktop: width >= 1200,
        isTablet: width >= 768 && width < 1200,
        isMobile: width < 768,
      })
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)
    
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  return (
    <DeviceContext.Provider value={{ device, isClient }}>
      {children}
    </DeviceContext.Provider>
  )
}

export function useDeviceContext() {
  const context = useContext(DeviceContext)
  if (context === undefined) {
    throw new Error('useDeviceContext must be used within a DeviceProvider')
  }
  return context
}
