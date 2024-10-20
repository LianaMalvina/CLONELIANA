import React from 'react'
import NavbarLogo from '../Componentes/NavBarLogo/NavBarLogo'
import PaginaInicio from '../Componentes/Inicio/PaginaInicio'
import './style.css'
import Main from '../Componentes/Inicio/Main/Main'

const InitPage = () => {
  return (
    <>
    <section>
    <nav className='contenedor-init'>
    <div className='logo'>
      <NavbarLogo/>
    </div>
    <div className='app-pagina-inicio'><PaginaInicio/></div>
    
    </nav>
    <main>
      <Main/>
    </main>
    </section>
    </>
  )
}

export default InitPage