import styles from './index.module.css'
import { servicesData } from '@/api/services'

export default function MobileServices() {
    return (
        <section className={styles.section} id="services">
            <div className={styles.sectionHeader}>
                <div className={styles.sectionLabel}>Services</div>
                <div className={styles.sectionTitle}>How we typically work</div>
            </div>
            <div className={styles.sectionBody}>
                <div className={styles.servicesGrid}>
                    {servicesData.map((item) => (
                        <article key={item.id} className={styles.serviceCard}>
                            <div className={styles.serviceTitle}>{item.title}</div>
                            <div className={styles.serviceDesc}>
                                {item.description}
                            </div>
                            <div className={styles.serviceMeta}>{item.meta}</div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
