import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './UserContext'

const Usuarios = () => {
    const { nombreUsuario, setNombreUsuario } = useContext(UserContext)

    const handleChangeInputName = (evento) => {
        setNombreUsuario(evento.target.value)
    }

    return (
        <div>
            <form>
                <label htmlFor='nombre'>Ingrese su nombre de usuario</label>
                <input id='nombre' name='nombre' value={nombreUsuario} onChange={handleChangeInputName} />
                <label htmlFor='mail'>Ingrese su correo electrónico</label>
                <input id='mail' name='mail' />

                <Link to={'/'}><button>Subir</button></Link> 
            </form>
        </div>
    )
}

export default Usuarios

