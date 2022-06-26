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
      <h2 className={styles.heading}>خرید و فروش</h2>

      <form onSubmit={onSubmit} className={styles.form}>
        <label htmlFor='price'>قیمت</label>
        <input
          type='number'
          min={0}
          step={100_000}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className={styles.price}
        />

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

export default Selling
