import Link from 'next/link'
import styles from './index.module.css'
import { Button, ArrowRightIcon } from '@/components/Shared'
import { headerData } from '@/api/header'

const iconMap = {
    ArrowRightIcon
} as const

export default function Header() {
    const IconComponent = headerData.cta.icon ? iconMap[headerData.cta.icon as keyof typeof iconMap] : null

    return (
        <header className={styles.landingHeader}>
            <Link href="/" className={styles.logoBlock}>
                <div className={styles.logoMark}>
                    <div className={styles.logoMarkInner}></div>
                </div>
                <div>
                    <div className={styles.logoTextMain}>{headerData.logo.mainText}</div>
                    <div className={styles.logoTextSub}>{headerData.logo.subText}</div>
                </div>
            </Link>
            <nav className={styles.headerNav}>
                {headerData.navigation.map((link) => (
                    <Link 
                        key={link.id} 
                        href={link.href} 
                        className={styles.headerLink}
                        {...link.attributes}
                    >
                        {link.text}
                    </Link>
                ))}
                <Button className={styles[headerData.cta.className || '']}>
                    <span>{headerData.cta.text}</span>
                    {IconComponent && <IconComponent className={styles.headerCtaIcon} />}
                </Button>
            </nav>
        </header>
    )
}
