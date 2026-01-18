'use client'

import DeviceLayout from '@/components/DeviceLayout'
import DesktopFooter from '@/components/Desktop/Footer'
import TabletFooter from '@/components/Tablet/Footer'
import MobileFooter from '@/components/Mobile/Footer'
import { useDeviceContext } from '@/contexts/Device'

export default function Privacy() {
  const { device } = useDeviceContext()
  const FooterComponent = device.isDesktop ? DesktopFooter : device.isTablet ? TabletFooter : MobileFooter

  return (
    <DeviceLayout>
      <div className="privacy-content">
        <h1>Privacy Policy</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <section>
          <h2>Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you contact us through our website or email.</p>
        </section>

        <section>
          <h2>How We Use Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and maintain our services</li>
            <li>Respond to your inquiries and support requests</li>
            <li>Improve our services and develop new features</li>
            <li>Communicate with you about our services</li>
          </ul>
        </section>

        <section>
          <h2>Data Protection</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
        </section>

        <section>
          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your personal data</li>
            <li>Object to processing of your data</li>
          </ul>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p><strong>Email:</strong> privacy@cortexline.com</p>
        </section>
      </div>
      <FooterComponent />
    </DeviceLayout>
  )
}
