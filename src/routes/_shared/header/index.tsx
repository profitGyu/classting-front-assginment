import { useRecoilState } from 'recoil'
import { userState } from 'state/user'

import HeaderContainer from './headerContainer'

import store from 'storejs'

const Header = () => {
  const [user, setUser] = useRecoilState(userState)

  const handleOutClick = () => {
    setUser('')
    store.remove('user')
  }

  if (user)
    return (
      <HeaderContainer>
        <ul>
          <li>{user}님</li>
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
