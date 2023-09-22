import { Logo, ToggleTheme } from '@components'
import styles from './styles.module.scss'

const Header = () => {

  return (
    <header className={styles.header}>
      <Logo />
      <ToggleTheme />
    </header>
  )
}

export default Header