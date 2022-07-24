export interface IQuizRep {
  response_code: number
  results: Result[]
}

export interface Result {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

export interface IQuizSessionRep {
  response_code: number
  response_message: string
  token: string
}

export interface IQuizProps {
  category: number
  difficulty: string
  token: string
}
