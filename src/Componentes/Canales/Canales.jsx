import React from 'react'
import './canalestilo.css'
import { ICONS_CANALES } from './iconos-canales'
import { obtenerWorkspaces } from './data_canales'


import { Link } from 'react-router-dom'



const Canales = () => {

    const workspaces = obtenerWorkspaces()

     
        return(
            <>
            <div className='canales-home'>
            <h2 className='h-espacio-trabajo'>{
              workspaces.map((workspace)=>{
               
                return(
                  <div key={workspace.id} className='espacio-nuevo-id'>
                
                    <Link to={`/workspace/${workspace.id}`} style={{textDecoration:'none'}}>
                      
                      <h2 style={{color:'#ffff', fontSize:'20px',
                      fontFamily:'sans-serif', marginLeft:'10px'}} > {workspace.name}</h2></Link>              
                  </div>
                )
              })
            }</h2>
            <h3 className='h-espacio-trabajo'>Hilos de conversación</h3>
            <h4 className='h-espacio-trabajo'>Borradores y enviados</h4>
            <h4 className='h-espacio-trabajo'>Canales</h4>
            </div>
            
            <div className='contenedor-otros-items'>
                <div className=''>
                <p>Mensajes directos</p>
                <p>Liana Kachuk</p>
                <p>Añadir compañeros de trabajo</p>
               <p> Aplicaciones</p>

            </div></div>

            </>
        )
    }



export default Canales