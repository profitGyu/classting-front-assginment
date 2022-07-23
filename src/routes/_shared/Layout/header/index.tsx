import styles from './header.module.scss'

import { Classting } from 'assets/icons'

const Header = () => {
  return (
    <header className={styles.header}>
      <Classting />
      <div>손님</div>
    </header>
  )
}

export default Header
