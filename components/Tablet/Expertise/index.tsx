import styles from './index.module.css'
import { expertiseData } from '@/api/expertise'
import { AIIcon, AutomationIcon, ScrapingIcon, IntegrationIcon } from '@/components/Shared/Icons'

const iconMap = {
    AIIcon,
    AutomationIcon,
    ScrapingIcon,
    IntegrationIcon
} as const

export default function TabletExpertise() {
    return (
        <section className={styles.section} id="expertise">
            <div className={styles.sectionHeader}>
                <div className={styles.sectionLabel}>Expertise</div>
                <div className={styles.sectionTitle}>What we are good at</div>
            </div>
            <div className={styles.sectionBody}>
                <div className={styles.expertiseGrid}>
                    {expertiseData.map((item) => {
                        const IconComponent = iconMap[item.icon as keyof typeof iconMap]
                        return (
                            <article key={item.id} className={styles.expertiseCard}>
                                <div className={styles.expertiseHeader}>
                                    <div className={styles.expertiseIconWrap}>
                                        <IconComponent />
                                    </div>
                                    <div className={styles.expertiseTitle}>{item.title}</div>
                                </div>
                                <div className={styles.expertiseDesc}>
                                    {item.description}
                                </div>
                                <div className={styles.expertiseTag}>{item.tags}</div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
