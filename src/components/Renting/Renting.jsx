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

      <input
        type='number'
        min={0}
        step={100_000}
        value={mortgage}
        onChange={(e) => setMortgage(e.target.value)}
        placeholder='رهن (به تومان)'
        className={styles.input}
      />

      <input
        type='number'
        min={0}
        step={100_000}
        value={rent}
        onChange={(e) => setRent(e.target.value)}
        placeholder='اجاره (به تومان)'
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

export default Renting
