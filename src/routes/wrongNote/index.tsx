import styles from './wrongNote.module.scss'

import { useRecoilState } from 'recoil'
import { wrongAnswerListState } from 'state/quiz'

const WrongNote = () => {
  const [wrongAnswerList] = useRecoilState(wrongAnswerListState)
  return (
    <div className={styles.wrongNoteContainer}>
      {wrongAnswerList.map((item, index) => {
        const wKey = `${index}-key-answer`
        return (
          <details key={wKey} className={styles.detail}>
            <summary>
              <div>{item.question}</div>
              <div>btn</div>
            </summary>
            <span>{item.correct_answer}</span>
          </details>
        )
      })}
    </div>
  )
}

export default WrongNote
