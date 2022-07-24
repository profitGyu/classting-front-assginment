import axios from 'axios'
import { IQuizSessionRep, IQuizRep } from 'types/quiz'

const BASE_URL = `https://opentdb.com`

export interface IQuizProps {
  category: number
  difficulty: string
  token: string
}

const quizSessionRep = () => {
  return axios.get<IQuizSessionRep>(`${BASE_URL}/api_token.php?`, {
    params: {
      command: 'request',
    },
  })
}

const quizApiRep = (props: IQuizProps) => {
  return axios.get<IQuizRep>(`${BASE_URL}/api.php?`, {
    params: {
      ...props,
      type: 'multiple',
      amount: 6,
    },
  })
}

export { quizSessionRep, quizApiRep }
