import { render, screen } from '@testing-library/react'

import QuizBefore from './quizBefore'

describe('QuizBefore test', () => {
  it('should render QuizBefore', () => {
    render(<QuizBefore />)
    // Quiz 가 문서 존재 여부
    expect(screen.getByText('QUIZ')).toBeInTheDocument()
    expect(screen.getByText('닉네임을 입력해 주세요')).toBeInTheDocument()
  })

  it('has a from', () => {})
})
