import styles from './index.module.css'
import { aboutData } from '@/api/about'

export default function About() {
    return (
        <section className={styles.section} id="about">
            <div className={styles.sectionHeader}>
                <div className={styles.sectionLabel}>{aboutData.label}</div>
                <div className={styles.sectionTitle}>{aboutData.title}</div>
            </div>
            <div className={styles.sectionBody}>
                {aboutData.description.map((text, index) => (
                    <p key={index} className={styles.aboutText} dangerouslySetInnerHTML={{ __html: text }} />
                ))}
                <div className={styles.pillList}>
                    {aboutData.pills.map((pill, index) => (
                        <span key={index} className={styles.pillItem}>{pill}</span>
                    ))}
                </div>
            </div>
        </section>
    )
}
