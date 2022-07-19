import { useEffect, useMemo, useState } from 'react'

import { calculateTax } from '../utils'

const useRenting = (mortgage, rent) => {
  const [wage, setPureWage] = useState(0)

  const tax = useMemo(() => calculateTax(wage), [wage])
  const total = useMemo(() => wage + tax, [wage, tax])

  useEffect(() => {
    const numMortgage =
      mortgage === '' || isNaN(mortgage) ? 0 : parseInt(mortgage)
    const numRent = rent === '' || isNaN(rent) ? 0 : parseInt(rent)

    const half = (numMortgage * 0.03 + numRent) / 2
    setPureWage(half / 4 + half / 15)
  }, [mortgage, rent])

  return { wage, tax, total }
}

export default useRenting
