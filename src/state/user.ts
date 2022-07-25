import { atom } from 'recoil'

import store from 'storejs'

interface IUserProps {
  name: string
  token: string
}

export const userState = atom<IUserProps>({
  key: '#userState',
  default: { name: '', token: '' } || store.get('user'),
})
