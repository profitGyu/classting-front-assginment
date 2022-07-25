import styles from './wrongNote.module.scss'

import { MouseEvent } from 'react'

import { useRecoilState, useRecoilValue } from 'recoil'
import { wrongAnswerListState } from 'state/quiz'

import store from 'storejs'

import { unescapeHtml } from 'utils'
import { ArrowIcon } from 'assets/icons'
import { userState } from 'state/user'
import NoWrongNote from './noWrongNote'

const WrongNote = () => {
  const [wrongAnswerList, setWrongAnswerList] = useRecoilState(wrongAnswerListState)
  const user = useRecoilValue(userState)

  const handleOnclickWrongNote = (e: MouseEvent<HTMLButtonElement>) => {
    setWrongAnswerList((pre) => {
      const newList = [...pre].filter((item) => item.question !== e.currentTarget.dataset.set)
      store.set('wrongNote', newList)
      return [...pre].filter((item) => item.question !== e.currentTarget.dataset.set)
    })
  }

  if (!user.name || wrongAnswerList.length === 0)
    return (
      <div className={styles.wrongNoteContainer}>
        <NoWrongNote />
      </div>
    )

  return (
    <div className={styles.wrongNoteContainer}>
      {wrongAnswerList.map((item, index) => {
        const wKey = `${index}-key-answer`
        const question = unescapeHtml(item.question)
        const answer = unescapeHtml(item.correct_answer)
        return (
          <details key={wKey} className={styles.detail}>
            <summary>
              <ArrowIcon />
              <div>{question}</div>
              <button type='button' onClick={handleOnclickWrongNote} data-set={item.question}>
                &#xd7;
              </button>
            </summary>
            <span>{answer}</span>
          </details>
        )
      })}
    </div>
  )
}

export default WrongNote
