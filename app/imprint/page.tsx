'use client'

import DeviceLayout from '@/components/DeviceLayout'
import DesktopFooter from '@/components/Desktop/Footer'
import TabletFooter from '@/components/Tablet/Footer'
import MobileFooter from '@/components/Mobile/Footer'
import { useDeviceContext } from '@/contexts/Device'

export default function Imprint() {
  const { device } = useDeviceContext()
  const FooterComponent = device.isDesktop ? DesktopFooter : device.isTablet ? TabletFooter : MobileFooter

  return (
    <DeviceLayout>
      <div className="privacy-content">
        <h1>Imprint</h1>
        
        <section>
          <h2>Company Information</h2>
          <p><strong>Company Name:</strong> Cortexline Studio</p>
          <p><strong>Business Type:</strong> Software Development & IT Services</p>
        </section>

        <section>
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> hello@cortexline.com</p>
          <p><strong>Website:</strong> https://cortexline.com</p>
        </section>

        <section>
          <h2>Services</h2>
          <p>We specialize in:</p>
          <ul>
            <li>Artificial Intelligence & LLM integration</li>
            <li>Business process automation</li>
            <li>Web scraping & data extraction</li>
            <li>Custom software development</li>
          </ul>
        </section>

        <section>
          <h2>Legal Information</h2>
          <p>This imprint is provided in accordance with applicable legal requirements for online service providers.</p>
          <p>All content on this website is the property of Cortexline Studio unless otherwise stated.</p>
        </section>

        <section>
          <h2>Disclaimer</h2>
          <p>We reserve the right to modify, supplement, or delete all or parts of the content of this website without prior notice.</p>
        </section>
      </div>
      <FooterComponent />
    </DeviceLayout>
  )
}
