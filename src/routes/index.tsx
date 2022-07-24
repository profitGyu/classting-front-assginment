import { Routes, Route } from 'react-router-dom'
import QuizStartPage from './quizStartPage'
import QuizPage from './quizPage'

import Layout from './_shared/Layout'
import QuizScrap from './quizScrap'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<QuizStartPage />} />
        <Route path='/quiz' element={<QuizPage />} />
        <Route path='/scrap' element={<QuizScrap />} />
      </Route>
      <Route path='*' element={<div>잘못된 접근입니다.</div>} />
    </Routes>
  )
}

export default App
