import styles from './header.module.scss'

import { ReactNode } from 'react'

import { Classting } from 'assets/icons'

interface props {
  children: ReactNode
}

const HeaderContainer = ({ children }: props) => {
  return (
    <header className={styles.header}>
      <Classting />
      {children}
    </header>
  )
}

export default HeaderContainer
