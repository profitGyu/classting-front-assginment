import styles from './layout.module.scss'

import { Outlet } from 'react-router-dom'
import GNB from './GNB'

const Layout = () => {
  return (
    <div className={styles.layout}>
      <main className={styles.main}>
        <Outlet />
        <GNB />
      </main>
    </div>
  )
}

export default Layout
