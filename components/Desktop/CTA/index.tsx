import styles from './index.module.css'
import { Button, MailIcon } from '@/components/Shared'
import { ctaData } from '@/api/cta'

const iconMap = {
    MailIcon
} as const

export default function CTA() {
    return (
        <section className={styles.ctaSection}>
            <div className={styles.ctaMain}>
                <div className={styles.ctaTitle}>{ctaData.title}</div>
                <div className={styles.ctaSubtitle}>{ctaData.subtitle}</div>
            </div>
            <div className={styles.ctaActions}>
                {ctaData.buttons.map((button, index) => {
                    const IconComponent = button.icon ? iconMap[button.icon as keyof typeof iconMap] : null
                    return (
                        <Button key={index} variant={button.variant as any}>
                            <span>{button.text}</span>
                            {IconComponent && <IconComponent className={styles.buttonIconWrap} />}
                        </Button>
                    )
                })}
            </div>
        </section>
    )
}
