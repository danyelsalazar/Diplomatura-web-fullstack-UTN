import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { App } from './components/App'
import { Form } from './components/Form'
import { Chat } from './components/Chat'
import { Aside } from './components/Aside'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main className='app'>
      <Aside/>
      <Chat/>
    </main>
  </StrictMode>,
)
