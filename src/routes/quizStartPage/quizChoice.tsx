import styles from './quizStartPage.module.scss'

import { QUIZ_DIFFICULTY_LIST } from './quiz-category-model'

import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { useRecoilValue } from 'recoil'
import { CategoryInputState } from 'state/option'

import Button from 'components/Button'
import CategoryInput from './categoryInput'

const QuizChoice = () => {
  const category = useRecoilValue(CategoryInputState)

  const navigate = useNavigate()

  const handleChoiceSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const difficulty = e.currentTarget.dataset.value
    navigate(`../quiz`, { state: { category: category.value, difficulty }, replace: false })
  }

  return (
    <div className={styles.quizStartContainer}>
      <h2>문제의 난이도,종류를 지정 해주세요!</h2>
      <form className={styles.nameFrom}>
        <CategoryInput />
        <div className={styles.difficultyWrapper}>
          {QUIZ_DIFFICULTY_LIST.map((item) => (
            <Button
              key={item.id}
              size='rectangle'
              type='submit'
              color={item.color}
              onClick={handleChoiceSubmit}
              value={item.value}
            >
              {item.text}
            </Button>
          ))}
        </div>
      </form>
    </div>
  )
}
export default QuizChoice
