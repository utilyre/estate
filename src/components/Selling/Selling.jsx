import { useRef, useEffect, useState } from 'react'

import styles from './Selling.module.css'
import { useSelling } from '../../hooks'

const Selling = () => {
  const domInput = useRef()
  const [price, setPrice] = useState(0)
  const [result, calculate] = useSelling(200_000_000)

  useEffect(() => {
    domInput.current.focus()
  }, [])

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
          ref={domInput}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className={styles.price}
        />

        <button type='submit'>Calculate</button>
      </form>

      <p className={styles.result}>
        Result: <var>{result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</var>
      </p>
    </div>
  )
}

export default Selling
