import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { Chat } from './components/Chat'
import { Aside } from './components/Aside'

const App = ()=>{
  const [contactSelect, setContactSelect] = useState(undefined)

  return(
    <main className='app'>
      <Aside selectContact = {setContactSelect}/>
      <Chat contact = {contactSelect}/>
    </main>
  )
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
