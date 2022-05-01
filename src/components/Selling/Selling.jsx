import { useState } from 'react'

import styles from './Selling.module.css'
import { useSelling } from '../../hooks'
import { partNumber } from '../../utils'

const Selling = () => {
  const [price, setPrice] = useState(0)
  const [result, calculate] = useSelling(200)

  const onSubmit = (e) => {
    e.preventDefault()
    calculate(price)
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Selling</h2>

      <form
        onSubmit={onSubmit}
        className={styles.form}
      >
        <input
          type='number'
          min={0}
          step={0.01}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className={styles.price}
        />

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

export default Selling
