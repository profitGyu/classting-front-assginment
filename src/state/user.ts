import { atom } from 'recoil'

import store from 'storejs'

export const userState = atom({
  key: '#userState',
  default: '' || store.get('user'),
})
