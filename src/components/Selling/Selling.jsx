import { useState } from 'react'

import styles from './Selling.module.css'
import { useSelling } from '../../hooks'
import { partNumber } from '../../utils'

const Selling = () => {
  const [price, setPrice] = useState(0)
  const { pureWage, tax, total, calculate } = useSelling(price)

  const onSubmit = (e) => {
    e.preventDefault()
    calculate()
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Selling</h2>

      <form onSubmit={onSubmit} className={styles.form}>
        <label htmlFor='price'>Price</label>
        <input
          type='number'
          min={0}
          step={0.01}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className={styles.price}
        />

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

export default Selling
