import styles from './index.module.css'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'ghost'
  onClick?: () => void
  className?: string
}

export default function Button({ children, variant = 'primary', onClick, className }: ButtonProps) {
  const buttonClass = variant === 'primary' ? styles.buttonPrimary : styles.buttonGhost
  
  return (
    <button 
      className={`${buttonClass} ${className || ''}`}
      onClick={onClick}
      data-media-type="banani-button"
    >
      {children}
    </button>
  )
}
