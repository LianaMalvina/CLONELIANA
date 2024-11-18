import React, { useState, useEffect } from 'react'
import { canales_data_inicial, crearNuevoWorkspace, obtenerWorkspaces } from './data_canales'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import './estilonuevocanal.css'


const CrearNuevoWorkspace = () => {
    const navigation = useNavigate()

    
    const [workspaces, setWorkspaces] = useState(() => {
        const savedWorkspaces = JSON.parse(localStorage.getItem('workspaces'))
        return savedWorkspaces ? savedWorkspaces : canales_data_inicial
    })
    const [workspace, set_workspace] = useState('')
    const [errorWorkspaceRepeated, setErrorWorkspaceRepeated] = useState(false)

    useEffect(() => {
        setErrorWorkspaceRepeated(isInUseWorkspaceName(workspace, workspaces))
    }, [workspace])

    useEffect(() => {
        localStorage.setItem('workspaces', JSON.stringify(workspaces))
    }, [workspaces])

    const handleChangeWorkspaceName = (evento) => {
        set_workspace(evento.target.value)
    }

    const isInUseWorkspaceName = (workspaceName, workspacesList) => {
        return workspacesList.some(ws => ws.name === workspaceName)
    }

    const createWorkspace = (workspaceName) => {
        if (isInUseWorkspaceName(workspaceName, workspaces)) {
            setErrorWorkspaceRepeated(true)
            return
        }
        
        const new_workspace = {
            name: workspaceName,
            channel: [
                {
                    name: 'General',
                    id: uuidv4(),
                    messages: [],
                }
            ],
            id: uuidv4()
        }
        setWorkspaces((prevWorkspaces) => [...prevWorkspaces, new_workspace])
        setErrorWorkspaceRepeated(false)
    }

   

    const handleSubmitCrearNewWorkspace = (evento) => {
        evento.preventDefault()

        const formulario = new FormData(evento.target)
        const workspaceName = formulario.get('workspace')
    

        if (workspaceName && !errorWorkspaceRepeated) {
            createWorkspace(workspaceName)
            const updatedWorkspaces = obtenerWorkspaces()
            navigation('/workspace')
            updatedWorkspaces()
        }
    }

  

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
                            <input
                                placeholder='Escribí aquí el nombre de tu espacio'
                                name='workspace'
                                id='crear-espacio-name'
                                value={workspace}
                                required
                                onChange={handleChangeWorkspaceName}
                            />
                            {errorWorkspaceRepeated ? (
                                <span>Nombre en uso</span>
                            ) : (
                                workspace.length > 0 && <span>Nombre disponible</span>
                            )}
                            <button type='submit' className='crear'
                            onClick={() => createWorkspace(workspace)} disabled={errorWorkspaceRepeated || workspace.length === 0}>
                                Crear Espacio
                            </button>

                        </form>

                        <p className='p-crear-nuevo'>Quiero recibir comunicaciones de marketing sobre Salesforce, inclusive sobre Slack.</p>
                        <p className='p-crear-nuevos'>Al continuar, aceptas el Acuerdo de servicios principal, los Términos de servicio del usuario
                            y los Términos complementarios de Slack.</p>
                    </div>
                    <div className='imagen-crear-canal-dos'>
                        <img src='./imagenes/equipo.png' alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CrearNuevoWorkspace;