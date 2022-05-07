import styles from './App.module.css'
import { Selling, Renting } from '..'

const App = () => {
  return (
    <main className={styles.container}>
      <Selling />
      <Renting />
    </main>
  )
}

export default App
