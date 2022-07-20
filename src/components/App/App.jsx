import { useState } from 'react'

import styles from './App.module.css'
import { Calculator } from '../../components'

const App = () => {
  const [price, setPrice] = useState('')

  const [mortgage, setMortgage] = useState('')
  const [rent, setRent] = useState('')

  return (
    <main className={styles.container}>
      <Calculator
        title='خرید و فروش'
        inputs={[
          {
            state: price,
            setState: setPrice,
            placeholder: 'قیمت (به تومان)',
          },
        ]}
        calculateWage={(price) => {
          const difference = price - 200_000_000
          const overlap = (Math.abs(difference) + difference) / 2

          return (price - overlap) * 0.005 + overlap * 0.0008
        }}
      />

      <Calculator
        title='رهن و اجاره'
        inputs={[
          {
            state: mortgage,
            setState: setMortgage,
            placeholder: 'رهن (به تومان)',
          },
          {
            state: rent,
            setState: setRent,
            placeholder: 'اجاره (به تومان)',
          },
        ]}
        calculateWage={(mortgage, rent) => {
          const half = (mortgage * 0.03 + rent) / 2
          return half / 4 + half / 15
        }}
      />
    </main>
  )
}

export default App
