'use client'

import DeviceLayout from '@/components/DeviceLayout'
import DesktopExpertise from '@/components/Desktop/Expertise'
import TabletExpertise from '@/components/Tablet/Expertise'
import MobileExpertise from '@/components/Mobile/Expertise'
import { useDeviceContext } from '@/contexts/Device'

export default function Expertise() {
  const { device } = useDeviceContext()
  const ExpertiseComponent = device.isDesktop ? DesktopExpertise : device.isTablet ? TabletExpertise : MobileExpertise

  return (
    <DeviceLayout>
      <ExpertiseComponent />
    </DeviceLayout>
  )
}
