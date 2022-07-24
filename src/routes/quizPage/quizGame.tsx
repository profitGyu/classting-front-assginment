import styles from './quizPage.module.scss'

import { useMemo, useState, MouseEvent } from 'react'

import { IQuizResult } from 'types/quiz'

import Button from 'components/Button'
import Portal from 'components/modal/Portal'
import { shuffle } from 'lodash'
import Modal from 'components/modal'
import { useSetRecoilState } from 'recoil'
import { OngoingState } from 'state/quiz'

interface props {
  quiz: IQuizResult[]
}

const QuizGame = ({ quiz }: props) => {
  const [page, setPage] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isTrue, setIsTrue] = useState(true)
  const [rightCount, setRightCount] = useState(0)

  const answerList = useMemo(() => {
    if (quiz[page]) {
      const incorrect = quiz[page].incorrect_answers
      const correct = quiz[page].correct_answer
      return shuffle([...incorrect, correct])
    }
    return []
  }, [page, quiz])

  const handleCheckResult = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.dataset.value === quiz[page].correct_answer) {
      setRightCount((pre) => pre + 1)
    }
    setIsTrue(e.currentTarget.dataset.value === quiz[page].correct_answer)
    setIsModalOpen((prev) => !prev)
    // setPage((prev) => prev + 1)
  }

  if (quiz.length === page + 1) return <div>{rightCount}맞춤</div>

  return (
    <div className={styles.quizContainer}>
      <h2>
        Question {page + 1} of {quiz.length}
      </h2>
      <section className={styles.questionContainer}>
        <div className={styles.questionWrapper}>{quiz[page].question}</div>
      </section>
      {answerList.map((item, index) => {
        const answerKey = `answer-${index}-key`
        return (
          <Button type='button' size='extraLarge' onClick={handleCheckResult} key={answerKey} value={item}>
            {item}
          </Button>
        )
      })}
      <Portal>
        {isModalOpen && <Modal check={isTrue} setIsOpenPopup={setIsModalOpen} setPage={setPage} quiz={quiz[page]} />}
      </Portal>
    </div>
  )
}
export default QuizGame
