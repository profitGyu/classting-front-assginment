import styles from './gnb.module.scss'
import { NavLink } from 'react-router-dom'
import { HomeIcon, QuizIcon } from 'assets/icons'

const GNB_LIST = [
  {
    value: '/',
    src: <HomeIcon />,
    text: '홈',
  },
  {
    value: 'wnote',
    src: <QuizIcon />,
    text: '오답노트',
  },
]
const GNB = () => {
  return (
    <nav className={styles.gnbContainer}>
      <ul>
        {GNB_LIST.map((item) => (
          <li key={item.value}>
            <NavLink to={item.value} className={({ isActive }) => (isActive ? styles.activeNav : styles.nav)}>
              {item.src}
              <div>{item.text}</div>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default GNB
