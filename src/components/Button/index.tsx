import { ReactNode, MouseEventHandler, FormEventHandler } from 'react'
import cx from 'classnames'

import styles from './button.module.scss'

interface IProps {
  children: ReactNode
  size: 'extraLarge' | 'small'
  onClick?: MouseEventHandler | FormEventHandler
  primary?: boolean
  type?: 'submit' | 'button'
}

const Button = ({ children, size, onClick, type, primary }: IProps) => {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={cx(styles.button, styles[size], { [styles.primary]: primary })}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
