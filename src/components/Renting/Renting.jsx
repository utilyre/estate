import { useState } from 'react'

import styles from './Renting.module.css'
import { useRenting } from '../../hooks'
import { partNumber } from '../../utils'

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
      <h2 className={styles.heading}>Renting</h2>

      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.inputRow}>
          <div className={styles.inputWrapper}>
            <label htmlFor='mortgage'>Mortgage</label>
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
            <label htmlFor='rent'>Rent</label>
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
          Calculate
        </button>
      </form>

      <p className={styles.result}>
        Pure wage: <var>{partNumber(pureWage)}</var> Tooman
      </p>
      <p className={styles.result}>
        Tax: <var>{partNumber(tax)}</var> Tooman
      </p>
      <p className={styles.result}>
        Total: <var>{partNumber(total)}</var> Tooman
      </p>
    </div>
  )
}

export default Renting
