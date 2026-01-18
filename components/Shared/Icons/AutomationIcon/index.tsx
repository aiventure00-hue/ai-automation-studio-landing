import styles from './index.module.css'

interface AutomationIconProps {
  className?: string
}

export default function AutomationIcon({ className = styles.icon }: AutomationIconProps) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="var(--foreground)" strokeWidth="2"/>
      <path d="M15 3v18" stroke="var(--foreground)" strokeWidth="2"/>
    </svg>
  )
}
