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
        className={styles.input}
      />

      <hr className={styles.separator} />

      <section className={styles.resultWrapper}>
        <h3 className={styles.resultHeading}>کارمزد</h3>
        <p>
          <var className={styles.result}>{partNumber(wage)}</var>
          <span>تومان</span>
        </p>
      </section>

      <section className={styles.resultWrapper}>
        <h3 className={styles.resultHeading}>مالیات</h3>
        <p>
          <var className={styles.result}>{partNumber(tax)}</var>
          <span>تومان</span>
        </p>
      </section>

      <section className={styles.resultWrapper}>
        <h3 className={styles.resultHeading}>مجموع</h3>
        <p>
          <var className={styles.result}>{partNumber(total)}</var>
          <span>تومان</span>
        </p>
      </section>
    </div>
  )
}

export default Selling
