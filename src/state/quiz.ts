import { atom } from 'recoil'
import { IQuizResult } from 'types/quiz'

export const wrongAnswerListState = atom<IQuizResult[] | []>({
  key: '#wrongAnswerListState',
  default: [],
})
