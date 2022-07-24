import styles from './layout.module.scss'

import { Outlet } from 'react-router-dom'
import GNB from '../GNB'
import Header from '../header'

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
        <GNB />
      </main>
    </div>
  )
}

export default Layout
