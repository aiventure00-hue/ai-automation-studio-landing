import styles from './index.module.css'

interface ScrapingIconProps {
  className?: string
}

export default function ScrapingIcon({ className = styles.icon }: ScrapingIconProps) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="var(--foreground)" strokeWidth="2"/>
      <path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20" stroke="var(--foreground)" strokeWidth="2"/>
    </svg>
  )
}
