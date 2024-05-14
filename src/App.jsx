
import './App.css'
import { Footer } from './componentes/Footer'
import { Header } from './componentes/Header'
import { Home } from './componentes/Home'
import { Proyectos } from './componentes/Proyectos'
import { SobreMi } from './componentes/SobreMi'

export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <SobreMi />
      <Proyectos />
      <Footer/>
    </div>
  )
}