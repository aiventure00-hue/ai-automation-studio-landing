'use client'

import DeviceLayout from '@/components/DeviceLayout'
import DesktopHero from '@/components/Desktop/Hero'
import DesktopAbout from '@/components/Desktop/About'
import DesktopExpertise from '@/components/Desktop/Expertise'
import DesktopServices from '@/components/Desktop/Services'
import DesktopContact from '@/components/Desktop/Contact'
import DesktopCTA from '@/components/Desktop/CTA'
import TabletHero from '@/components/Tablet/Hero'
import TabletAbout from '@/components/Tablet/About'
import TabletExpertise from '@/components/Tablet/Expertise'
import TabletServices from '@/components/Tablet/Services'
import TabletContact from '@/components/Tablet/Contact'
import TabletCTA from '@/components/Tablet/CTA'
import MobileHero from '@/components/Mobile/Hero'
import MobileAbout from '@/components/Mobile/About'
import MobileExpertise from '@/components/Mobile/Expertise'
import MobileServices from '@/components/Mobile/Services'
import MobileContact from '@/components/Mobile/Contact'
import MobileCTA from '@/components/Mobile/CTA'
import { useDeviceContext } from '@/contexts/Device'

export default function Home() {
  const { device } = useDeviceContext()

  const HeroComponent = device.isDesktop ? DesktopHero : device.isTablet ? TabletHero : MobileHero
  const AboutComponent = device.isDesktop ? DesktopAbout : device.isTablet ? TabletAbout : MobileAbout
  const ExpertiseComponent = device.isDesktop ? DesktopExpertise : device.isTablet ? TabletExpertise : MobileExpertise
  const ServicesComponent = device.isDesktop ? DesktopServices : device.isTablet ? TabletServices : MobileServices
  const ContactComponent = device.isDesktop ? DesktopContact : device.isTablet ? TabletContact : MobileContact
  const CTAComponent = device.isDesktop ? DesktopCTA : device.isTablet ? TabletCTA : MobileCTA

  return (
    <DeviceLayout>
      <HeroComponent />
      <AboutComponent />
      <ExpertiseComponent />
      <ServicesComponent />
      <ContactComponent />
      <CTAComponent />
    </DeviceLayout>
  )
}