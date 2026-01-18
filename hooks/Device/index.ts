import { useState, useEffect } from 'react'
import { DeviceType } from '@/types'

export function useDevice(): DeviceType {
  const [device, setDevice] = useState<DeviceType>({
    isDesktop: false,
    isTablet: false,
    isMobile: false,
  })

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth
      
      setDevice({
        isDesktop: width >= 1024,
        isTablet: width >= 768 && width < 1024,
        isMobile: width < 768,
      })
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)
    
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  return device
}
