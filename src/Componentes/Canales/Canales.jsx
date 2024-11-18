import React, { useContext, useState, useEffect } from 'react'
import './canalestilo.css'
import { ICONS_CANALES } from './iconos-canales'
import { obtenerWorkspaces } from './data_canales'
import { Link } from 'react-router-dom'
import { UserContext } from '../Usuarios/UserContext'
import CrearCanal from './CrearCanal'

const Canales = () => {
  const { nombreUsuario } = useContext(UserContext)
  const workspaces = obtenerWorkspaces()

  // Estado para controlar la visibilidad del formulario CrearCanal y lista de canales
  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [canales, setCanales] = useState([])

  // Cargar canales desde localStorage al montar el componente
  useEffect(() => {
    const canalesGuardados = JSON.parse(localStorage.getItem('canales')) || []
    setCanales(canalesGuardados)
  }, [])

  // Guardar canales en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('canales', JSON.stringify(canales))
  }, [canales])

  // Función para alternar la visibilidad del formulario
  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario)
  }

  // Función para agregar un nuevo canal
  const agregarCanal = (nombreCanal) => {
    const nuevoCanal = { name: nombreCanal }
    setCanales([...canales, nuevoCanal])
  }

  return (
    <>
      <div className='canales-home'>
        <h2 className='h-espacio-trabajo'>{
          workspaces.map((workspace) => (
            <div key={workspace.id} className='espacio-nuevo-id'>
              <Link to={`/workspace/${workspace.id}/0`} style={{ textDecoration: 'none' }}>
                <h2 style={{
                  color: '#ffff', fontSize: '20px',
                  fontFamily: 'sans-serif', marginLeft: '10px'
                }}> {workspace.name}</h2>
              </Link>
            </div>
          ))
        }</h2>
        <h3 className='h-espacio-trabajo'>Hilos de conversación</h3>
        <h4 className='h-espacio-trabajo'>Borradores y enviados</h4>
        <h4 className='h-espacio-trabajo'>Canales</h4>
        
       
        <ul>
          {canales.map((canal, index) => (
            <li key={index} className='h-espacio-trabajo'>#{canal.name}</li>
          ))}
        </ul>
        
       
        <h4 onClick={toggleFormulario} style={{ cursor: 'pointer' }}>
          Crea un canal para tu espacio de trabajo
        </h4>
        
      
        {mostrarFormulario && <CrearCanal onCrearCanal={agregarCanal} />}
      </div>

      <div className='contenedor-otros-items'>
        <p>Mensajes directos</p>
        <p>{nombreUsuario} tú</p>
        <p>Añadir compañeros de trabajo</p>
        <p>Aplicaciones</p>
      </div>
    </>
  )
}

export default Canales
