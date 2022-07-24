import { ReactNode, MouseEventHandler, FormEventHandler } from 'react'
import cx from 'classnames'

import styles from './button.module.scss'

interface IProps {
  children: ReactNode
  size: 'extraLarge' | 'small' | 'rectangle'
  onClick?: MouseEventHandler | FormEventHandler
  primary?: boolean
  type?: 'submit' | 'button'
  color?: string
  value?: string
}

const Button = ({ children, size, onClick, type, primary, color, value }: IProps) => {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={cx(styles.button, styles[size], { [styles.primary]: primary })}
      onClick={onClick}
      style={{ background: color }}
      data-value={value}
    >
      {children}
    </button>
  )
}

export default Button
