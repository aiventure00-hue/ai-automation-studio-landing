'use client'

import DeviceLayout from '@/components/DeviceLayout'
import DesktopContact from '@/components/Desktop/Contact'
import TabletContact from '@/components/Tablet/Contact'
import MobileContact from '@/components/Mobile/Contact'
import { useDeviceContext } from '@/contexts/Device'

export default function Contact() {
  const { device } = useDeviceContext()
  const ContactComponent = device.isDesktop ? DesktopContact : device.isTablet ? TabletContact : MobileContact

  return (
    <DeviceLayout>
      <ContactComponent />
    </DeviceLayout>
  )
}