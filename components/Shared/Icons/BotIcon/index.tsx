import styles from './index.module.css'

interface BotIconProps {
  className?: string
}

export default function BotIcon({ className = styles.icon }: BotIconProps) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M12 8V4H8"></path>
        <rect width="16" height="12" x="4" y="8" rx="2"></rect>
        <path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path>
      </g>
    </svg>
  )
}
