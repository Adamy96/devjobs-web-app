'use client'
import { Icon } from '@components'
import styles from './styles.module.scss'

const Input = ({ value, children, name, onChange, placeholder, iconName }: IInput) => {
  const getClasses = () => {
    let classes = styles.inputContainer
    iconName && (classes += ` ${styles.withIcon}`)
    return classes
  }

  return (
    <div className={getClasses()}>
      <Icon name={iconName} size={'sm'} className={styles.icon} />
      <input
        value={value}
        name={name}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        className={styles.input}
      />
      {children && children}
    </div>
  )
}

interface IInput {
  children?: React.ReactNode
  name: string
  value: any
  onChange: (e?: any) => void
  placeholder?: string
  iconName?: string
}

export default Input