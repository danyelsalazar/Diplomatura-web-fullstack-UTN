import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Beneficios } from './components/Beneficios'
import { Hero } from './components/Hero'
import { Contacto } from './components/Contacto'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero titulo="Bienvenido a TravelAventure" slogan = "Cambiando Perspectivas"/>
    <Beneficios/>
    <Contacto/>
  </StrictMode>,
)
