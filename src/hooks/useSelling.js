import { useState, useMemo, useEffect } from 'react'

import { calculateTax } from '../utils'

const useSelling = (price) => {
  const [wage, setWage] = useState(0)

  const tax = useMemo(() => calculateTax(wage), [wage])
  const total = useMemo(() => wage + tax, [wage, tax])

  useEffect(() => {
    const numPrice = price === '' || isNaN(price) ? 0 : parseInt(price)

    const difference = numPrice - 200_000_000
    const overlap = (Math.abs(difference) + difference) / 2

    setWage((numPrice - overlap) * 0.005 + overlap * 0.0008)
  }, [price])

  return { wage, tax, total }
}

export default useSelling
