import { useEffect, useState } from 'react'

import { calculateTax } from '../utils'

const useRenting = (mortgage, rent) => {
  const [pureWage, setPureWage] = useState(0)
  const [tax, setTax] = useState(0)
  const [total, setTotal] = useState(0)

  const calculate = () => {
    const half = (mortgage * 0.03 + rent) / 2
    setPureWage(half / 4 + half / 15)
  }

  useEffect(() => {
    setTax(calculateTax(pureWage))
  }, [pureWage])

  useEffect(() => {
    setTotal(pureWage + tax)
  }, [pureWage, tax])

  return { pureWage, tax, total, calculate }
}

export default useRenting
