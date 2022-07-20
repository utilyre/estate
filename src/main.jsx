import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

import './main.css'
import { App } from './components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

    <ToastContainer
      rtl
      theme='dark'
      position='top-left'
      hideProgressBar
    />
  </StrictMode>
)
