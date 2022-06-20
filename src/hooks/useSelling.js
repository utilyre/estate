import { useState, useEffect } from 'react'

import { calculateTax } from '../utils'

const useSelling = (boundary) => {
  const [pureWage, setPureWage] = useState(0)
  const [tax, setTax] = useState(0)
  const [total, setTotal] = useState(0)

  const calculate = (price) => {
    const difference = price - boundary
    const overlap = (Math.abs(difference) + difference) / 2

    setPureWage((price - overlap) * 0.005 + overlap * 0.0008)
  }

  useEffect(() => {
    setTax(calculateTax(pureWage))
  }, [pureWage])

  useEffect(() => {
    setTotal(pureWage + tax)
  }, [pureWage, tax])

  return { pureWage, tax, total, calculate }
}

export default useSelling
