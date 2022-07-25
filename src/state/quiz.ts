import { atom } from 'recoil'
import store from 'storejs'
import { IQuizResult } from 'types/quiz'

export const wrongAnswerListState = atom<IQuizResult[] | []>({
  key: '#wrongAnswerListState',
  default: store.get('wrongNote') ? store.get('wrongNote') : [],
})
