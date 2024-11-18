import React, { createContext, useState, useEffect } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [nombreUsuario, setNombreUsuario] = useState('')

    
        useEffect(() => {
            const nombreGuardado = localStorage.getItem('nombreUsuario');
            if (nombreGuardado) {
                setNombreUsuario(nombreGuardado);
            }
        }, []);


    useEffect(() => {
        if (nombreUsuario) {
            localStorage.setItem('nombreUsuario', nombreUsuario);
        }
    }, [nombreUsuario]);


    return (
        <UserContext.Provider value={{ nombreUsuario, setNombreUsuario }}>
            {children}
        </UserContext.Provider>
    )
}
