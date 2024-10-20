import React from 'react'
import './canalestilo.css'
import { ICONS_CANALES } from './iconos-canales'
import { obtenerNuevoCanal } from './data_canales'
import { Link } from 'react-router-dom'



const Canales = () => {

    const espaciosnuevos = obtenerNuevoCanal()

     
        return(
            <>
            <div className='canales-home'>
            <h2>UTN PWI TM LUN-MIE</h2>
            <h3>Hilos de conversación</h3>
            <h4>Borradores y enviados</h4>
            <h4>Canales</h4>
            </div>
            {
              espaciosnuevos.map((espacionuevo)=>{
               
                return(
                  <div key={espacionuevo.id}>
                    <Link style={{textDecoration:'none'}}><h3 style={{color:'#ffff', fontSize:'16px',
                      marginLeft:'30px'}} ># {espacionuevo.titulo}</h3></Link>              
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