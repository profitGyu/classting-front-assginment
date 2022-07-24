import styles from './modal.module.scss'

import Button from 'components/Button'

interface Props {
  setIsOpenPopup: Function
  setPage: Function
  // quiz?: IQuizResult
  check: boolean
}

const Modal = ({ setIsOpenPopup, setPage, check }: Props) => {
  const handleCloseButtonClick = () => {
    setIsOpenPopup(false)
    setPage((prev: number) => prev + 1)
  }

  return (
    <div className={styles.backdrop}>
      <div className={styles.modalBox}>
        <span>{check ? '정답 입니다!' : '오답 입니다!'}</span>
        <Button size='extraLarge' onClick={handleCloseButtonClick} primary>
          다음문제 풀기
        </Button>
      </div>
    </div>
  )
}

export default Modal
