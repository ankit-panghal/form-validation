import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { formContextProvider as Provider } from './context/FormContext'
import { ThemeContextProvider } from './context/ThemeContext'

createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
    <Provider >
      <App />
    </Provider>
  </ThemeContextProvider>
)
