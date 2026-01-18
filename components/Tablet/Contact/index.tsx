import styles from './index.module.css'
import { contactData } from '@/api/contact'

export default function TabletContact() {
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
            </div>
        </section>
    )
}
