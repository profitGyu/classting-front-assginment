import { useEffect, useState } from 'react'

const useCount = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const cnt = setInterval(() => {
      setCount(count + 1)
    }, 1000)
    return () => clearInterval(cnt)
  }, [count])

  return count
}

export default useCount
