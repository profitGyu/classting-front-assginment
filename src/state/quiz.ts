import { atom } from 'recoil'

export const OngoingState = atom<boolean>({
  key: '#OngoingState',
  default: true,
})
