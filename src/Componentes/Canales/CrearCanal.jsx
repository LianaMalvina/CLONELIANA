import React, { useState, useEffect } from 'react'
import { canales_data_inicial } from './data_canales'

const CrearCanal = ({ onCrearCanal }) => {
    const [canal, setCanal] = useState('')
    const [errorCrearcanalRepeated, setErrorcrearcanalRepeated] = useState(false)
    const [workspaces, setWorkspaces] = useState(canales_data_inicial)

    const handleSubmitCrearNewCanal = (evento) => {
        evento.preventDefault()

        if (!errorCrearcanalRepeated) {
            onCrearCanal(canal) 
            setCanal('') 
        }
    }

    const handleChangeCrearcanalname = (evento) => {
        setCanal(evento.target.value)
    }

    const isInUseCrearCanalName = (nombreCanal) => {
        return workspaces.some(workspace =>
            workspace.channels && workspace.channels.some(channel => channel.name.toLowerCase() === nombreCanal.toLowerCase())
        )
    }

    useEffect(() => {
        setErrorcrearcanalRepeated(isInUseCrearCanalName(canal))
    }, [canal, workspaces])

    return (
        <div className='contenedor-form-crear-canal'>
            <div className='form-crear-canal'>
                <h2 className='h2-crear-nuevo'>Crear un nuevo canal para tu Espacio de Trabajo</h2>
                
                <form onSubmit={handleSubmitCrearNewCanal} className='formulario-crear-canal'>
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
                    <button type='submit' className='crear' disabled={errorCrearcanalRepeated || canal.length === 0}>
                        Crear canal
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CrearCanal
