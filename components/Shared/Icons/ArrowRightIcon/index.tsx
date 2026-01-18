import styles from './index.module.css'

interface ArrowRightIconProps {
  className?: string
}

export default function ArrowRightIcon({ className = styles.icon }: ArrowRightIconProps) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7l-7 7"></path>
    </svg>
  )
}
