import Link from 'next/link'
import styles from './index.module.css'
import { footerData } from '@/api/footer'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {footerData.sections.map((section) => {
        if (section.type === 'text') {
          return <div key={section.id}>{section.content as string}</div>
        }
        
        if (section.type === 'links') {
          const links = section.content as any[]
          return (
            <div key={section.id} className={styles.footerLinks}>
              {links.map((link) => (
                <Link 
                  key={link.id} 
                  href={link.href || '#'}
                  className={styles.footerLink}
                  {...link.attributes}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          )
        }
        
        if (section.type === 'logo') {
          const logo = section.content as any
          return (
            <div key={section.id}>
              {logo.showLogo && <div className={styles.footerLogo}></div>}
              <div>{logo.text}</div>
            </div>
          )
        }
        
        return null
      })}
    </footer>
  )
}
