import { useState } from 'react'

const useRenting = () => {
  const [result, setResult] = useState(0)

  const calculate = (mortgage, rent) => {
    const half = (mortgage * 0.03 + rent) / 2
    setResult(half * (0.25 + 1 / 15))
  }

  return [result, calculate]
}

export default useRenting
