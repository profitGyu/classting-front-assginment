import { useRecoilState } from 'recoil'
import { wrongAnswerListState } from 'state/quiz'

const WrongNote = () => {
  const [wrongAnswerList] = useRecoilState(wrongAnswerListState)
  return (
    <div>
      {wrongAnswerList.map((item, index) => {
        const wKey = `${index}-key-answer`
        return <div key={wKey}>{item.question}</div>
      })}
    </div>
  )
}

export default WrongNote
