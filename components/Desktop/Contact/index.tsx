import styles from './index.module.css'
import { contactData } from '@/api/contact'
import { Button, MailIcon } from '@/components/Shared'

export default function Contact() {
    const handleContactClick = () => {
        // Open email client for static site
        const subject = encodeURIComponent('Contact from Cortexline Studio')
        const body = encodeURIComponent('Hello, I would like to discuss a project with you.')
        const mailtoLink = `mailto:hello@cortexline.com?subject=${subject}&body=${body}`
        window.open(mailtoLink, '_blank')
    }

    return (
        <section className={styles.section} id="contact">
            <div className={styles.sectionHeader}>
                <div className={styles.sectionLabel}>{contactData.label}</div>
                <div className={styles.sectionTitle}>{contactData.title}</div>
            </div>
            <div className={styles.sectionBody}>
                <p className={styles.aboutText}>
                    {contactData.description}
                </p>
                <div className={styles.pillList}>
                    {contactData.pills.map((pill, index) => (
                        <span key={index} className={styles.pillItem}>{pill}</span>
                    ))}
                </div>
                
                <div className={styles.contactActions}>
                    <Button onClick={handleContactClick}>
                        <MailIcon />
                        <span>Get in Touch</span>
                    </Button>
                    <p className={styles.contactNote}>
                        Click to open your email client and send us a message.
                    </p>
                </div>
            </div>
        </section>
    )
}
