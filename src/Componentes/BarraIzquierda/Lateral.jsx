import React from 'react'
import './lateralizquierda.css'
import { ICON_LATERAL } from './iconos'

const Lateral = (props) => {
    const lateralIzquierdoJSX = props.lateral_izq.map((lateral) => {
        
        const Icon = ICON_LATERAL[lateral.icon]
        

        return (
          
            <>
            
                <div key={lateral.id} className='contenedor-lateral'>
                   
                    <div className='contenedor-menu-lateral'>
                        <a href='#' className='iconos-verticales-barra-lateral-izq'>
                        {Icon ? <Icon /> : null}
                        </a>
                    </div>
                    <div className='contenedor-nombre-menu-lateral'>
                        {lateral.nombre}
                    </div>
                </div>
            </>
        )
    })
return (
    <div>
        {lateralIzquierdoJSX}
    </div>
)
}

export  {Lateral}