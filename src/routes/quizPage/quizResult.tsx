import styles from './quizPage.module.scss'

import { useRecoilValue } from 'recoil'
import { userState } from 'state/user'
import PieChart from './pieChart'
import { useMemo } from 'react'

interface props {
  count: number
  totalCount: number
  rightCount: number
}

const makeResultText = (count: number) => {
  const text = {
    3: '훌륭 합니다! 아주 멋져요! 👍',
    2: '좋아요! 한걸음만 더! 😊',
    1: '좀 더 열심히 하셔야 겠군요!🤪',
    0: '처음 부터 차근 차근 다시 해봐요!😂',
  }[Math.floor(count)]

  return text
}

const QuizResult = ({ count, totalCount, rightCount }: props) => {
  const user = useRecoilValue(userState)
  const ResultText = useMemo(() => {
    return makeResultText(rightCount)
  }, [rightCount])

  return (
    <div className={styles.quizResult}>
      <h1>{user.name}님 의 quiz 결과입니다.</h1>
      <span className={styles.resultText}>{ResultText}</span>
      <h3>소요 시간:{count}초</h3>
      <PieChart rightCount={rightCount} totalCount={totalCount} />

      <div>
        <div>다시풀기</div>
      </div>
    </div>
  )
}
export default QuizResult
