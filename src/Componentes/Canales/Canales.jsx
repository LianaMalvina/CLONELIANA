import React from 'react'
import './canalestilo.css'
import { ICONS_CANALES } from './iconos-canales'
import { obtenerWorkspaces } from './data_canales'

import ChannelList from './ChanneList'
import { Link } from 'react-router-dom'



const Canales = () => {

    const workspaces = obtenerWorkspaces()

     
        return(
            <>
            <div className='canales-home'>
            <h2 className='h-espacio-trabajo'>UTN PWI TM LUN-MIE</h2>
            <h3 className='h-espacio-trabajo'>Hilos de conversación</h3>
            <h4 className='h-espacio-trabajo'>Borradores y enviados</h4>
            <h4 className='h-espacio-trabajo'>Canales</h4>
            </div>
            {
              workspaces.map((workspace)=>{
               
                return(
                  <div className='espacio-nuevo-id'>
                
                    <Link to={'./workspace/'} style={{textDecoration:'none'}}>
                      
                      <h3 style={{color:'#ffff', fontSize:'16px',
                      marginLeft:'30px'}} ># {workspace.name}</h3></Link>              
                  </div>
                )
              })
            }
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