import styles from './index.module.css'
import Header from '../Header'
import Footer from '../Footer'

interface DesktopLayoutProps {
    children: React.ReactNode
}

export default function DesktopLayout({ children }: DesktopLayoutProps) {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.contentWrapper}>
                {children}
            </div>
            <Footer />
        </div>
    )
}
