import React, { useEffect, useState } from 'react'
import { GoChevronDown } from "react-icons/go"
import { GoX } from "react-icons/go"
import './iniciostyle.css'

const PaginaInicio = () => {
    const [menuVisible, setMenuVisible] = useState(false)

    const toggleMenu = () => {
        setMenuVisible(!menuVisible)
    }

    useEffect(() => {
        const menuToggle = document.getElementById('menu-toggle')
        const menuList = document.getElementById('menu-list')

       

        return () => {}
    }, [])

    return (
        <>
            <header className='header'>
                <nav className='nav-menu'>
                    <button className='menu-toggle' id='menu-toggle' onClick={toggleMenu}>
                        {menuVisible ? <GoX /> : '☰ Menú'}
                    </button>
                    <ul className={`menu-list ${menuVisible ? 'show' : ''}`} id='menu-list'>
                        <li>
                            <button className='btn-navegador-inicio'>Funciones<span>
                                <GoChevronDown className='btn-navegador-inicio'/></span></button>
                        </li>
                        <li>
                            <button className='btn-navegador-inicio'>Soluciones<span>
                                <GoChevronDown className='btn-navegador-inicio'/></span></button>
                        </li>
                        <li>
                            <button className='btn-navegador-inicio'>Empresa<span>
                                <GoChevronDown className='btn-navegador-inicio'/></span></button>
                        </li>
                        <li>
                            <button className='btn-navegador-inicio'>Recursos<span>
                                <GoChevronDown className='btn-navegador-inicio'/></span></button>
                        </li>
                        <li>
                            <button className='btn-navegador-inicio'>Precios</button>
                        </li>
                    </ul>
                </nav>
                <div className='botones-ventas'>
                    <button className='ventas'>HABLAR CON VENTAS</button>
                    <button className='ventas-dos'>CREAR UN NUEVO ESPACIO DE TRABAJO</button>
                </div>
            </header>
        </>
    );
}

export default PaginaInicio;