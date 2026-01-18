import styles from './index.module.css'
import { Button, BotIcon, WorkflowIcon, DatabaseIcon, SparklesIcon, CodeIcon } from '@/components/Shared'
import { heroData } from '@/api/hero'

const iconMap = {
    BotIcon,
    WorkflowIcon,
    DatabaseIcon,
    SparklesIcon,
    CodeIcon
} as const

export default function MobileHero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <div className={styles.heroKicker}>
                    {heroData.kicker.map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </div>
                <h1 className={styles.heroTitle}>{heroData.title}</h1>
                <p className={styles.heroSubtitle}>{heroData.subtitle}</p>
                <div className={styles.heroActions}>
                    {heroData.actions.map((action) => {
                        const IconComponent = iconMap[action.icon as keyof typeof iconMap]
                        return (
                            <Button key={action.id} variant={action.variant}>
                                <span>{action.text}</span>
                                {action.icon && <IconComponent className={styles.buttonIconWrap} />}
                            </Button>
                        )
                    })}
                </div>
                <div className={styles.heroMeta}>
                    {heroData.meta.map((item) => {
                        const IconComponent = iconMap[item.icon as keyof typeof iconMap]
                        return (
                            <div key={item.id} className={styles.heroMetaItem}>
                                <IconComponent />
                                <span>{item.text}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={styles.heroVisual}>
                <div className={styles.heroCard}>
                    <div className={styles.heroCardTitle}>{heroData.visual.title}</div>
                    <div className={styles.heroCardMain}>{heroData.visual.main}</div>
                    <div className={styles.heroIllustration}>
                        <img 
                            data-aspect-ratio={heroData.visual.image.aspectRatio} 
                            data-query={heroData.visual.image.query} 
                            alt={heroData.visual.image.alt} 
                            src={heroData.visual.image.src}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
