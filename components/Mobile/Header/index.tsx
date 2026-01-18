import { useState } from 'react'
import Link from 'next/link'
import styles from './index.module.css'
import { headerData } from '@/api/header'
import { MenuIcon, CloseIcon } from '@/components/Shared'

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className={styles.mobileHeader}>
        <Link href="/" className={styles.logoBlock}>
          <div className={styles.logoMark}>
            <div className={styles.logoMarkInner}></div>
          </div>
          <div>
            <div className={styles.logoTextMain}>{headerData.logo.mainText}</div>
            <div className={styles.logoTextSub}>{headerData.logo.subText}</div>
          </div>
        </Link>
        <div className={styles.mobileHeaderActions}>
          <div className={styles.mobileCtaChip} data-media-type="banani-button">
            {headerData.cta.text}
          </div>
          <button 
            className={styles.mobileMenuButton} 
            data-media-type="banani-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon />
          </button>
        </div>
      </header>
      
      <div className={`${styles.mobileMenuOverlay} ${isMenuOpen ? styles.open : ''}`} onClick={() => setIsMenuOpen(false)}>
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`} onClick={(e) => e.stopPropagation()}>
          <button 
            className={styles.mobileMenuCloseButton}
            onClick={() => setIsMenuOpen(false)}
          >
            <CloseIcon />
          </button>
          <nav className={styles.mobileMenuNav}>
            {headerData.navigation.map((link) => (
              <Link 
                key={link.id} 
                href={link.href} 
                className={styles.mobileMenuLink}
                {...link.attributes}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}
