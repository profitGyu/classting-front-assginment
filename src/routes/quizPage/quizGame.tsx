import styles from './quizPage.module.scss'

import { useMemo, useState, MouseEvent, useEffect } from 'react'

import { IQuizResult } from 'types/quiz'

import Button from 'components/Button'
import Portal from 'routes/quizPage/modal/Portal'

import QuizModal from 'routes/quizPage/modal'
import QuizResult from './quizResult'
import { shuffle, unescapeHtml } from 'utils'

interface props {
  quiz: IQuizResult[]
}

const QuizGame = ({ quiz }: props) => {
  const [page, setPage] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isTrue, setIsTrue] = useState(true)
  const [rightCount, setRightCount] = useState(0)
  const [count, setCount] = useState(0)

  const question = useMemo(() => {
    if (quiz[page]) {
      return unescapeHtml(quiz[page].question)
    }
    return []
  }, [page, quiz])

  const answerList = useMemo(() => {
    if (quiz[page]) {
      const incorrect = quiz[page].incorrect_answers.map((item) => unescapeHtml(item))
      const correct = unescapeHtml(quiz[page].correct_answer)
      return shuffle([...incorrect, correct])
    }
    return []
  }, [page, quiz])

  useEffect(() => {
    if (page === 0) {
      setCount(0)
    }
    const counterInterval = setInterval(() => {
      setCount(count + 1)
    }, 1000)
    if (quiz.length === page + 1) {
      clearInterval(counterInterval)
    }
    return () => clearInterval(counterInterval)
  }, [count, page, quiz.length])

  const handleCheckResult = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.dataset.value === quiz[page].correct_answer) {
      setRightCount((pre) => pre + 1)
    }
    setIsTrue(e.currentTarget.dataset.value === quiz[page].correct_answer)
    setIsModalOpen((prev) => !prev)
  }

  if (quiz.length === page + 1)
    return (
      <QuizResult
        count={count}
        totalCount={quiz.length}
        rightCount={rightCount}
        setPage={setPage}
        setRightCount={setRightCount}
      />
    )

  return (
    <div className={styles.quizContainer}>
      <h2>
        Question {page + 1} of {quiz.length}
      </h2>
      <section className={styles.questionContainer}>
        <div className={styles.questionWrapper}>{question}</div>
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
        {isModalOpen && (
          <QuizModal check={isTrue} setIsOpenPopup={setIsModalOpen} setPage={setPage} quiz={quiz[page]} />
        )}
      </Portal>
    </div>
  )
}
export default QuizGame
