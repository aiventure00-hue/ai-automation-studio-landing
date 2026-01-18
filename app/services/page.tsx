'use client'

import DeviceLayout from '@/components/DeviceLayout'
import DesktopServices from '@/components/Desktop/Services'
import TabletServices from '@/components/Tablet/Services'
import MobileServices from '@/components/Mobile/Services'
import { useDeviceContext } from '@/contexts/Device'

export default function Services() {
  const { device } = useDeviceContext()
  const ServicesComponent = device.isDesktop ? DesktopServices : device.isTablet ? TabletServices : MobileServices

  return (
    <DeviceLayout>
      <ServicesComponent />
    </DeviceLayout>
  )
}
