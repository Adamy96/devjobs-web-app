'use client'
import Image from 'next/image'
import Cookies from 'js-cookie'
import { useTheme } from '@hooks'
import styles from './styles.module.scss'

const ToggleTheme = () => {
  const { toggleTheme, currentTheme } = useTheme()
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    toggleTheme()
  }

  return (
    <div className={styles.toggleTheme}>
      <Image src='/icons/icon-sun.svg' height={18.6} width={20} alt='sun'/>
      <button onClick={(e) => handleClick(e)}>
        <span className={currentTheme === 'contrast' ? styles.active : styles.default} />
      </button>
      <Image src='/icons/icon-moon.svg' height={12} width={12} alt='moon'/>
    </div>
  )
}

export default ToggleTheme