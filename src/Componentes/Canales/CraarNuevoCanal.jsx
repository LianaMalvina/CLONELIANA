import React, { useState } from 'react'
import { canales_data_inicial, crearNuevoWorkspace, obtenerWorkspaces } from './data_canales'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import './estilonuevocanal.css'


const CrearNuevoCanal = () => {
    const navigation = useNavigate()

    const [canal, setNombre_canal] = useState('')
    const [errorCrearcanalRepeated, setErrorcrearcanalRepeated] = useState(false)

    const handleSubmitCrearNewWorkspace = (evento) => {
        evento.preventDefault()

        const formulario = new FormData(evento.target);
        const workspace = formulario.get('workspace')
        const canal = formulario.get('canal')


        if (workspace && canal && !errorCrearcanalRepeated) {
            const nuevoWorkspace = {
      
       
                name: workspace,
                canales: [{
                    name: canal,
                }],
            }

            crearNuevoWorkspace(nuevoWorkspace)
            obtenerWorkspaces()
            navigation('/workspace')
        }
    }

    const handleChangeCrearcanalname = (evento) => {
        setNombre_canal(evento.target.value)
    }

    const isInUseCrearCanalName = (nombreCanal) => {
        return canales_data_inicial.some(grupo =>
            grupo.canales && grupo.canales.some(canal => canal.name === nombreCanal)
        )
    }

    useEffect(() => {
        setErrorcrearcanalRepeated(isInUseCrearCanalName(canal))
    }, [canal])

    return (
        <div className='padre-crear-canal'>
            <div className='contenedor-crear-canal'>
                <img className='imagen-crear-canal' src='https://a.slack-edge.com/bv1-13/slack_logo-ebd02d1.svg'
                    alt='Slack Logo' />
                <p className='mail-crear-canal'> Se confirmó como lianakachuk@gmail.com Cambiar</p>

                <div className='contenedor-form-crear-canal'>
                    <div className='form-crear-canal'>
                        <h2 className='h2-crear-nuevo'>Crear un nuevo espacio de trabajo de Slack</h2>
                        <p className='p-crear-nuevo'>Slack le da a tu equipo un lugar donde pueden hablar y trabajar juntos.
                            Para crear un nuevo espacio de trabajo, completa tus datos aquí debajo.</p>

                        <form onSubmit={handleSubmitCrearNewWorkspace} className='formulario-crear-canal'>
                            <label className='name-esp' htmlFor='crear-espacio-name'>Nombre del Espacio</label>
                            <input placeholder='Escribí aquí el nombre de tu espacio' name='workspace' 
                            id='crear-espacio-name' required />
                            <label className='name-esp' htmlFor='crear-canal-name'>Nombre del canal</label>
                            <input
                                placeholder='Escribí aquí el nombre de tu canal'
                                name='canal'
                                id='crear-canal-name'
                                required
                                value={canal}
                                onChange={handleChangeCrearcanalname}
                            />
                            {errorCrearcanalRepeated ? (
                                <span style={{ color: 'red' }}>Nombre en uso</span>
                            ) : (
                                canal.length > 0 && <span style={{ color: 'green' }}>Nombre disponible</span>
                            )}
                            {<button type='submit' className='crear' disabled={errorCrearcanalRepeated || canal.length === 0}>
                                Crear canal</button>}

                        </form>

                        <p className='p-crear-nuevo'>Quiero recibir comunicaciones de marketing sobre Salesforce, inclusive sobre Slack.</p>
                        <p className='p-crear-nuevos'>Al continuar, aceptas el Acuerdo de servicios principal, los Términos de servicio del usuario
                            y los Términos complementarios de Slack.</p></div>
                    <div className='imagen-crear-canal-dos'>
                        <img  src='./imagenes/equipo.png' alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CrearNuevoCanal;
