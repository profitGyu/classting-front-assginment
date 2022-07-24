import { QUIZ_CATEGORY_LIST } from '../quiz-category-model'
import styles from './categoryInput.module.scss'

import { useState, MouseEvent } from 'react'
import { cx } from 'styles'
import { ArrowIcon } from 'assets/icons'
import { useRecoilState } from 'recoil'
import { CategoryInputState } from 'state/option'

const CategoryInput = () => {
  const [isActive, SetIsActive] = useState(false)
  const [category, setCategory] = useRecoilState(CategoryInputState)

  const handleInputCategory = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.dataset.num && e.currentTarget.dataset.name) {
      setCategory({ name: e.currentTarget.dataset.name, value: e.currentTarget.dataset.num })
    }

    SetIsActive((current) => !current)
  }

  const handleArrowIconClick = () => {
    SetIsActive((current) => !current)
  }

  return (
    <>
      <button className={styles.categoryInput} onClick={handleArrowIconClick} type='button'>
        <input type='text' value={category.name} readOnly />
        <ArrowIcon className={cx(styles.arrowIcon, { [styles.arrowIconOpen]: isActive })} />
      </button>
      <div className={styles.menuContainer}>
        <ul role='menu' className={cx(styles.menu, { [styles.menuActive]: isActive })}>
          {QUIZ_CATEGORY_LIST.map((item) => {
            return (
              <li key={item.name}>
                <button
                  onClick={handleInputCategory}
                  data-name={item.name}
                  data-num={item.value}
                  type='button'
                  data-name-num
                >
                  {item.name}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default CategoryInput
