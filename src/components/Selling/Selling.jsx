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
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='number'
          ref={domInput}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type='submit'>Calculate</button>
      </form>

      <p>
        Result: <var>{result}</var>
      </p>
    </div>
  )
}

export default Selling
