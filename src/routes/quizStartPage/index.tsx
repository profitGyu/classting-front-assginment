import styles from './quizStartPage.module.scss'

import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'

import store from 'storejs'

import { useRecoilState, useRecoilValue } from 'recoil'
import { userState } from 'state/user'

import Button from 'components/Button'
import QuizBefore from './quizBefore'
import { quizApiRep } from 'service/quiz'

const QuizStartPage = () => {
  const user = useRecoilValue(userState)

  console.log('user', user)

  if (!user) return <QuizBefore />
  return (
    <div className={styles.quizStartContainer}>
      <form className={styles.nameFrom}>
        <Button size='extraLarge' type='submit' primary>
          퀴즈풀기
        </Button>
      </form>
    </div>
  )
}
export default QuizStartPage
