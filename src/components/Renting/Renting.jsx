import { useState } from 'react'

import styles from './Renting.module.css'
import { useRenting } from '../../hooks'
import { partNumber } from '../../utils'

const Renting = () => {
  const [mortgage, setMortgage] = useState(0)
  const [rent, setRent] = useState(0)

  const { pureWage, tax, total, calculate } = useRenting()

  const onSubmit = (e) => {
    e.preventDefault()
    calculate(mortgage, rent)
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
              step={0.01}
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
              step={0.01}
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
        Pure wage: <var>{partNumber(pureWage)}</var> million
      </p>
      <p className={styles.result}>
        Tax: <var>{partNumber(tax)}</var> million
      </p>
      <p className={styles.result}>
        Total: <var>{partNumber(total)}</var> million
      </p>
    </div>
  )
}

export default Renting
