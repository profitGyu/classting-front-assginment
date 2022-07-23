import styles from './quizStartPage.module.scss'

import { ChangeEvent, FormEvent, useState } from 'react'
import store from 'storejs'

import { useRecoilState } from 'recoil'
import { userState } from 'state/user'

import Button from 'components/Button'

const QuizStartPage = () => {
  const [value, setValue] = useState('')
  const [user, setUser] = useRecoilState(userState)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setUser(value)
    store.set('user', value)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  if (!user)
    return (
      <div className={styles.quizStartContainer}>
        <h1>QUIZ</h1>
        <label htmlFor='name'>닉네임을 입력해 주세요</label>
        <form className={styles.nameFrom} onSubmit={handleSubmit}>
          <div className={styles.nameInputWrapper}>
            <input id='name' type='text' onChange={handleChange} value={value} />
          </div>
          <Button size='extraLarge' type='submit' primary>
            입력
          </Button>
        </form>
      </div>
    )
  return <div className={styles.quizStartContainer}>dsds</div>
}
export default QuizStartPage
