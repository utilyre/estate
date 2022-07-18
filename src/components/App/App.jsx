import styles from './App.module.css'
import { Selling, Renting } from '../../components'

const App = () => {
  return (
    <main className={styles.container}>
      <Selling />
      <Renting />
    </main>
  )
}

export default App
