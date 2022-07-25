import styles from './modal.module.scss'

import Button from 'components/Button'

interface Props {
  setIsOpenPopup: Function
  text: string
}

const Modal = ({ setIsOpenPopup, text }: Props) => {
  const handleCloseButtonClick = () => {
    setIsOpenPopup(false)
  }
  return (
    <div className={styles.backdrop}>
      <div className={styles.modalBox}>
        <span>{text}</span>
        <Button size='small' onClick={handleCloseButtonClick} primary>
          확인
        </Button>
      </div>
    </div>
  )
}

export default Modal
