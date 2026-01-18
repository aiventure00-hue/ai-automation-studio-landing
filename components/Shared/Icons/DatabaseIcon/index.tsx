import styles from './index.module.css'

interface DatabaseIconProps {
  className?: string
}

export default function DatabaseIcon({ className = styles.icon }: DatabaseIconProps) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M3 5v14a9 3 0 0 0 18 0V5"></path>
          <path d="M3 12a9 3 0 0 0 18 0"></path>
        </g>
    </svg>
  )
}
