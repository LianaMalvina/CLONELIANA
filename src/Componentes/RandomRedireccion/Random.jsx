import React from 'react'
import { Link } from 'react-router-dom'
import './estilosrandom.css'

const Random = () => {
  return (
    <div className='contenedor-padre'>
    <div className='contenedor-random'>
      <img className='imagen-random' src='https://a.slack-edge.com/bv1-13/slack_logo-ebd02d1.svg'></img>
      
           <div className="cargando">Cargando...</div>

      <div className='up-random'>UP</div>
     <h1 className='h1-random'>Iniciando UTN PWI TM LUN Y MIE</h1>
<p className='texto-random-uno'>Haz clic en Abrir Slack para iniciar la aplicación para ordenador.</p>
 <p className='texto-random-dos'>¿No funciona? También puedes usar Slack en el navegador.</p>
      <Link to={'/inicio/home/'} className='link-random'>ir</Link>
  </div></div>
  )
}

export default Random