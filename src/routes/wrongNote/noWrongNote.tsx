import styles from './wrongNote.module.scss'

import { NavLink } from 'react-router-dom'

import { QuizIcon } from 'assets/icons'
import Button from 'components/Button'

const NoWrongNote = () => {
  return (
    <div className={styles.noWrongNote}>
      <QuizIcon />
      <div className={styles.noWrongNoteText}>저장된 오답노트 가 없습니다.</div>
      <Button type='button' size='extraLarge'>
        <NavLink to='/'>quiz go go!</NavLink>
      </Button>
    </div>
  )
}

export default NoWrongNote
