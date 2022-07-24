import { useRecoilValue } from 'recoil'
import { userState } from 'state/user'

import QuizBefore from './quizBefore'
import QuizChoice from './quizChoice'

const QuizStartPage = () => {
  const user = useRecoilValue(userState)

  if (!user) return <QuizBefore />
  return <QuizChoice />
}
export default QuizStartPage
