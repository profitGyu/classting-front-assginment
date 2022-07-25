import styles from './header.module.scss'

import { ReactNode } from 'react'

import { Classting } from 'assets/icons'
import { NavLink } from 'react-router-dom'

interface props {
  children: ReactNode
}

const HeaderContainer = ({ children }: props) => {
  return (
    <header className={styles.header}>
      <NavLink to='/'>
        <Classting />
      </NavLink>
      {children}
    </header>
  )
}

export default HeaderContainer
