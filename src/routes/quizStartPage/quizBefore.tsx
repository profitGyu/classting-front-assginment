import styles from './quizStartPage.module.scss'

import { ChangeEvent, FormEvent, useRef, useState } from 'react'

import { useSetRecoilState } from 'recoil'
import { userState } from 'state/user'

import store from 'storejs'

import Button from 'components/Button'
import { quizSessionRep } from 'service/quiz'

const QuizBefore = () => {
  const [value, setValue] = useState('')
  const setUser = useSetRecoilState(userState)
  const nameRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    quizSessionRep().then((rep) => {
      if (rep.data.response_code === 0) {
        setUser({
          name: value,
          token: rep.data.token,
        })
        store.set('user', {
          name: value,
          token: rep.data.token,
        })
      }
    })
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  return (
    <div className={styles.quizStartContainer}>
      <h1>QUIZ</h1>
      <label htmlFor='name'>닉네임을 입력해 주세요</label>
      <form className={styles.nameFrom} onSubmit={handleSubmit}>
        <div className={styles.nameInputWrapper}>
          <input id='name' type='text' onChange={handleChange} value={value} ref={nameRef} />
        </div>
        <Button size='extraLarge' type='submit' primary>
          입력
        </Button>
      </form>
    </div>
  )
}
export default QuizBefore
