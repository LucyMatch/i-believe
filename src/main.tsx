import { StrictMode } from 'react'

console.log("hi, my name is lucy, its so nice to meet you 👋")
import { createRoot } from 'react-dom/client'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
