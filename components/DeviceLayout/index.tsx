'use client'

import { useDeviceContext } from '@/contexts/Device'
import DesktopLayout from '../Desktop/Layout'
import TabletLayout from '../Tablet/Layout'
import MobileLayout from '../Mobile/Layout'
import styles from './index.module.css'

interface DeviceLayoutProps {
  children: React.ReactNode
}

export default function DeviceLayout({ children }: DeviceLayoutProps) {
  const { device } = useDeviceContext()

  if (device.isDesktop) {
    return <DesktopLayout>{children}</DesktopLayout>
  }

  if (device.isTablet) {
    return <TabletLayout>{children}</TabletLayout>
  }

  return <MobileLayout>{children}</MobileLayout>
}
