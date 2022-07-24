import { useLayoutEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { IQuizProps, IQuizResult } from 'types/quiz'
import { useRecoilState } from 'recoil'
import { userState } from 'state/user'
import { quizApiRep, quizSessionRep } from 'service/quiz'
import store from 'storejs'
import QuizGame from './quizGame'
import Spinner from 'components/Spinner'

const QuizPage = () => {
  const state = useLocation()
  const info: IQuizProps = state.state as IQuizProps
  const [quiz, setQuiz] = useState<IQuizResult[]>()
  const [isError, SetIsError] = useState(false)
  const [user, setUser] = useRecoilState(userState)

  useLayoutEffect(() => {
    if (user) {
      info.token = user.token
      quizApiRep(info)
        .then((rep) => {
          if (rep.data.response_code === 0) {
            setQuiz(rep.data.results)
          } else if (rep.data.response_code === 4) {
            quizSessionRep().then((sRep) => {
              setUser({ name: user.name, token: sRep.data.token })
              store.set('user', {
                name: user.name,
                token: sRep.data.token,
              })
            })
          } else {
            SetIsError((prev) => !prev)
          }
        })
        // eslint-disable-next-line no-console
        .catch(() => SetIsError((prev) => !prev))
    }
  }, [info, setUser, user])

  if (quiz) return <QuizGame quiz={quiz} />
  if (isError) return <div>관리자에게 문의 하세요</div>
  return <Spinner />
}
export default QuizPage
