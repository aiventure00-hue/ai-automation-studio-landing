import styles from './index.module.css'

interface WorkflowIconProps {
  className?: string
}

export default function WorkflowIcon({ className = styles.icon }: WorkflowIconProps) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <rect width="8" height="8" x="3" y="3" rx="2"></rect>
        <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
        <rect width="8" height="8" x="13" y="3" rx="2"></rect>
        <path d="M17 11v4a2 2 0 0 1-2 2h-4"></path>
      </g>
    </svg>
  )
}
