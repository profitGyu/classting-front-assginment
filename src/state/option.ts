import { atom } from 'recoil'

interface ICategoryProps {
  name: string
  value: string
}

export const CategoryInputState = atom<ICategoryProps>({
  key: '#CategoryInputState',
  default: { name: 'Any Category', value: '전체' },
})
