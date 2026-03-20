import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from './styles/GlobalStyles'
import Home from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles></GlobalStyles>
    <Home />
  </StrictMode>,
)
