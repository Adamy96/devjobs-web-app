import styles from './styles.module.scss'

const Button = ({ children, className, size, onClick, variant = 'default' }: IButton) => {
  const getClasses = () => {
    let classes = `${styles.btn} ${styles[`size-${size}`]} ${styles[`size-${size}`]} ${styles[`variant-${variant}`]}`
    className && (classes += ` ${className}`)
    return classes
  }

  return (
    <button className={getClasses()}>
      <div className={styles.content}>
        {children}
      </div>
    </button>
  )
}

interface IButton {
  children: React.ReactNode | string
  className?: string
  size: 'sm' | 'md' | 'lg'
  onClick: (e?: any) => any
  variant?: 'default' | 'transparent'
}

export default Button