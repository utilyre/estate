import { useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'

import styles from './Calculator.module.css'

const calculateTax = (price) => {
  return price * 0.09
}

const partNumber = (number) => {
  const commaSeparatedNumber = number.toLocaleString('en-US')
  const truncatedNumber = commaSeparatedNumber.split('.')[0]

  return truncatedNumber
}

const Calculator = ({ title, inputs, calculateWage }) => {
  const [wage, setWage] = useState(0)
  const tax = useMemo(() => calculateTax(wage), [wage])
  const total = useMemo(() => wage + tax, [wage, tax])

  useEffect(
    () => {
      const numInputs = inputs.map((input) =>
        input.state === '' || isNaN(input.state) ? 0 : parseInt(input.state)
      )

      setWage(calculateWage(...numInputs))
    },
    inputs.map((input) => input.state)
  )

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{title}</h2>

      {inputs.map((input, i) => (
        <input
          key={i}
          type='number'
          min={0}
          step={100_000}
          value={input.state}
          onChange={(e) => input.setState(e.target.value)}
          placeholder={input.placeholder}
          className={styles.input}
        />
      ))}

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

      <button
        onClick={() => {
          let text = `کارمزد: ${partNumber(wage)} تومان\n`
          text += `مالیات: ${partNumber(tax)} تومان\n`
          text += `مجموع: ${partNumber(total)} تومان\n`

          if (navigator.share)
            navigator.share({
              text: text,
            })
          else {
            navigator.clipboard.writeText(text)
            toast.info('کپی شد.')
          }
        }}
        className={styles.share}
      >
        اشتراک گذاری
      </button>
    </div>
  )
}

Calculator.propTypes = {
  title: PropTypes.string.isRequired,
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      state: PropTypes.string.isRequired,
      setState: PropTypes.func.isRequired,
      placeholder: PropTypes.string,
    })
  ).isRequired,
  calculateWage: PropTypes.func.isRequired,
}

export default Calculator
