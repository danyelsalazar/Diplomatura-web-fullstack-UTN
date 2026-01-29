import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Emoji } from './components/Emoji'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Emoji/>
  </StrictMode>,
)
