import styles from './index.module.css'
import Header from '../Header'
import Footer from '../Footer'

interface TabletLayoutProps {
  children: React.ReactNode
}

export default function TabletLayout({ children }: TabletLayoutProps) {
  return (
    <div className={styles.tabletLayout}>
      <Header />
      <div className={styles.contentWrapper}>
        {children}
      </div>
      <Footer />
    </div>
  )
}
