import { useState } from 'react'

import styles from './Renting.module.css'
import { useRenting } from '../../hooks'
import { partNumber } from '../../utils'

const Renting = () => {
  const [mortgage, setMortgage] = useState('')
  const [rent, setRent] = useState('')

  const { wage, tax, total } = useRenting(mortgage, rent)

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>رهن و اجاره</h2>

      <form className={styles.form}>
        <div className={styles.inputRow}>
          <div className={styles.inputWrapper}>
            <label htmlFor='mortgage'>رهن</label>
            <input
              type='number'
              min={0}
              step={100_000}
              value={mortgage}
              onChange={(e) => setMortgage(e.target.value)}
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
              onChange={(e) => setRent(e.target.value)}
              className={styles.rent}
            />
          </div>
        </div>
      </form>

      <p className={styles.result}>
        کارمزد: <var>{partNumber(wage)}</var> تومان
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
