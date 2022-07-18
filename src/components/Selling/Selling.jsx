import { useState } from 'react'

import styles from './Selling.module.css'
import { useSelling } from '../../hooks'
import { partNumber } from '../../utils'

const Selling = () => {
  const [price, setPrice] = useState('')
  const { wage, tax, total } = useSelling(price)

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>خرید و فروش</h2>

      <input
        type='number'
        min={0}
        step={100_000}
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder='قیمت (به تومان)'
        className={styles.price}
      />

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

export default Selling
