'use client'

import DeviceLayout from '@/components/DeviceLayout'
import DesktopFooter from '@/components/Desktop/Footer'
import TabletFooter from '@/components/Tablet/Footer'
import MobileFooter from '@/components/Mobile/Footer'
import { useDeviceContext } from '@/contexts/Device'

export default function Terms() {
  const { device } = useDeviceContext()
  const FooterComponent = device.isDesktop ? DesktopFooter : device.isTablet ? TabletFooter : MobileFooter

  return (
    <DeviceLayout>
      <div className="privacy-content">
        <h1>Terms of Service</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <section>
          <h2>Services</h2>
          <p>Cortexline Studio provides software development, automation, and AI integration services to businesses and individuals.</p>
        </section>

        <section>
          <h2>Payment Terms</h2>
          <p>Payment is required before commencement of services. We accept various payment methods as specified in our proposals.</p>
          <ul>
            <li>50% payment required to start project work</li>
            <li>Final 50% payment required upon project completion</li>
            <li>All payments are non-refundable once work has commenced</li>
          </ul>
        </section>

        <section>
          <h2>Client Responsibilities</h2>
          <p>Clients are responsible for:</p>
          <ul>
            <li>Providing timely feedback and approvals</li>
            <li>Providing necessary access to systems and data</li>
            <li>Testing delivered solutions promptly</li>
            <li>Payment of invoices within agreed terms</li>
          </ul>
        </section>

        <section>
          <h2>Intellectual Property</h2>
          <p>Upon full payment, clients own all intellectual property rights to custom deliverables created specifically for their project.</p>
          <p>We retain rights to our pre-existing tools, libraries, and methodologies.</p>
        </section>

        <section>
          <h2>Limitation of Liability</h2>
          <p>Our liability is limited to the amount paid for our services. We are not liable for indirect, consequential, or punitive damages.</p>
        </section>

        <section>
          <h2>Termination</h2>
          <p>Either party may terminate the agreement with written notice. Client is responsible for payment for all work completed up to termination date.</p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>For questions about these Terms of Service, please contact us at:</p>
          <p><strong>Email:</strong> legal@cortexline.com</p>
        </section>
      </div>
      <FooterComponent />
    </DeviceLayout>
  )
}
