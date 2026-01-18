import styles from './index.module.css'
import Header from '../Header'
import Footer from '../Footer'

interface MobileLayoutProps {
  children: React.ReactNode
}

export default function MobileLayout({ children }: MobileLayoutProps) {
  return (
    <div className={styles.mobileLayout}>
      <Header />
      <div className={styles.contentWrapper}>
        {children}
      </div>
      <Footer />
    </div>
  )
}
