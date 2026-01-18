'use client'

import DeviceLayout from '@/components/DeviceLayout'
import DesktopAbout from '@/components/Desktop/About'
import TabletAbout from '@/components/Tablet/About'
import MobileAbout from '@/components/Mobile/About'
import { useDeviceContext } from '@/contexts/Device'

export default function About() {
  const { device } = useDeviceContext()
  const AboutComponent = device.isDesktop ? DesktopAbout : device.isTablet ? TabletAbout : MobileAbout

  return (
    <DeviceLayout>
      <AboutComponent />
    </DeviceLayout>
  )
}
