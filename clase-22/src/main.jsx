import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Mensaje} from "./components/Mensaje"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Mensaje text = {"Hola bro , que vamos a hacer hoy"} send={"me"}  time={new Date().toLocaleString()}/>
    <Mensaje text={"Amigoo, hoy viajo"} time={new Date().toLocaleDateString()}/>
    <hr />
  </StrictMode>,
)
