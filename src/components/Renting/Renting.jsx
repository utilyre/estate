import { useState } from 'react'

import styles from './Renting.module.css'
import { useRenting } from '/src/hooks'
import { partNumber } from '/src/utils'

const Renting = () => {
  const [mortgage, setMortgage] = useState(0)
  const [rent, setRent] = useState(0)

  const { pureWage, tax, total, calculate } = useRenting(mortgage, rent)

  const onSubmit = (e) => {
    e.preventDefault()
    calculate()
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>رهن و اجاره</h2>

      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.inputRow}>
          <div className={styles.inputWrapper}>
            <label htmlFor='mortgage'>رهن</label>
            <input
              type='number'
              min={0}
              step={100_000}
              value={mortgage}
              onChange={(e) => setMortgage(parseFloat(e.target.value))}
              className={styles.mortgage}
            />
          </div>

          <div className={styles.inputWrapper}>
            <label htmlFor='rent'>اجاره</label>
            <input
              type='number'
              min={0}
              step={100_000}
              value={rent}
              onChange={(e) => setRent(parseFloat(e.target.value))}
              className={styles.rent}
            />
          </div>
        </div>

        <button type='submit' className={styles.submit}>
          محاسبه
        </button>
      </form>

      <p className={styles.result}>
        کارمزد: <var>{partNumber(pureWage)}</var> تومان
      </p>
      <p className={styles.result}>
        مالیات: <var>{partNumber(tax)}</var> تومان
      </p>
      <p className={styles.result}>
        مجموع: <var>{partNumber(total)}</var> تومان
      </p>
    </div>
  )
}

export default Renting
