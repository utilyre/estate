import { useState } from 'react'

import { calculateTax } from '../utils'

const useSelling = (boundary) => {
  const [result, setResult] = useState(0)

  const calculate = (price) => {
    const difference = price - boundary
    const overlap = (Math.abs(difference) + difference) / 2

    setResult(calculateTax(price * 0.005 + overlap * 0.0008))
  }

  return [result, calculate]
}

export default useSelling
