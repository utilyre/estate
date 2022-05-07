import { useState } from 'react'

import styles from './Renting.module.css'
import { useRenting } from '../../hooks'
import { partNumber } from '../../utils'

const Renting = () => {
  const [mortgage, setMortgage] = useState(0)
  const [rent, setRent] = useState(0)

  const [result, calculate] = useRenting()

  const onSubmit = (e) => {
    e.preventDefault()
    calculate(mortgage, rent)
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Renting</h2>

      <form
        onSubmit={onSubmit}
        className={styles.form}
      >
        <div className={styles.inputWrapper}>
          <input
            type='number'
            min={0}
            step={0.01}
            value={mortgage}
            onChange={(e) => setMortgage(e.target.value)}
            className={styles.mortgage}
          />

          <input
            type='number'
            min={0}
            step={0.01}
            value={rent}
            onChange={(e) => setRent(e.target.value)}
            className={styles.rent}
          />
        </div>

        <button
          type='submit'
          className={styles.submit}
        >Calculate</button>
      </form>

      <p className={styles.result}>
        Result: <var>{partNumber(result)}</var> million
      </p>
    </div>
  )
}

export default Renting
