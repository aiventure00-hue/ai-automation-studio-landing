import styles from './index.module.css'

interface CodeIconProps {
  className?: string
}

export default function CodeIcon({ className = styles.icon }: CodeIconProps) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="m18 16l4-4l-4-4M6 8l-4 4l4 4m8.5-12l-5 16"></path>
      </g>
    </svg>
  )
}
