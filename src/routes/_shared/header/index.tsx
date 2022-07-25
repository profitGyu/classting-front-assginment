import { useRecoilState, useSetRecoilState } from 'recoil'
import { userState } from 'state/user'

import HeaderContainer from './headerContainer'

import store from 'storejs'
import { wrongAnswerListState } from 'state/quiz'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const [user, setUser] = useRecoilState(userState)
  const setWrongAnswer = useSetRecoilState(wrongAnswerListState)
  const navigate = useNavigate()

  const handleOutClick = () => {
    store.remove('user')
    store.remove('wrongNote')
    setUser({ name: '', token: '' })
    setWrongAnswer([])
    navigate(`../`, { replace: true })
  }

  if (user.name)
    return (
      <HeaderContainer>
        <ul>
          <li>{user.name}님</li>
          <li>
            <button type='button' onClick={handleOutClick}>
              나가기
            </button>
          </li>
        </ul>
      </HeaderContainer>
    )
  return (
    <HeaderContainer>
      <div>손님</div>
    </HeaderContainer>
  )
}

export default Header
