import React from 'react'
import { useState } from 'react'
import './enviarmsj.css'
import { MdFoggy, MdFormatListNumbered } from "react-icons/md";
import { FiList, FiAlignLeft } from "react-icons/fi";
import { FaCode } from "react-icons/fa6";
import { LuUnderline } from "react-icons/lu";
import { GoBold } from "react-icons/go";
import { GiBreakingChain } from "react-icons/gi";
import { PiCodeBlock } from "react-icons/pi";
import { RxFontItalic } from "react-icons/rx";
import { TbLetterCase, TbUserEdit } from "react-icons/tb";
import { VscMic, VscSmiley, VscMention, VscDiffIgnored, VscAdd, VscChevronDown, VscSend } from "react-icons/vsc";
import { IoVideocamOutline } from "react-icons/io5";
import ChatItem from '../ChatItem';

const EnviarMensaje = ({ agregarMensaje}) => {
    const [error, setError] = useState({ text: '', isError: false })
    const [mensaje, setMensaje] = useState('')

    const handleSubmitMessage = (evento) => {
        evento.preventDefault()

        if (!mensaje) {
            setError({ isError: true, text: 'No has escrito nada' })
        } else {
            agregarMensaje(mensaje)
            setMensaje('')
            setError({ text: '', isError: false })
        }
    }

    return (
        <>
            <div className='contenedor-form-msj'>
                <div className='contenedor-nav-msj'>
                    <div className='iconos-nav-msj'>
                        <button className='botones-msj-nav'><GoBold /></button>
                    </div>
                    <div className='iconos-nav-msj'>
                        <button className='botones-msj-nav'><RxFontItalic /></button>
                    </div>
                    <div className='iconos-nav-msj'>
                        <button className='botones-msj-nav'><LuUnderline /></button>
                    </div>
                    <div className='iconos-nav-msj'>
                        <button className='botones-msj-nav'><GiBreakingChain /></button>
                    </div>
                    <div className='iconos-nav-msj'>
                        <button className='botones-msj-nav'><FiList /></button>
                    </div>
                    <div className='iconos-nav-msj'>
                        <button className='botones-msj-nav'><MdFormatListNumbered /></button>
                    </div>
                    <div className='iconos-nav-msj'>
                        <button className='botones-msj-nav'><FiAlignLeft /></button>
                    </div>

                    <div className='iconos-nav-msj'>
                        <button className='botones-msj-nav'><FaCode /></button>
                    </div>
                    <div className='iconos-nav-msj'>
                        <button className='botones-msj-nav'><PiCodeBlock /></button>
                    </div>

                </div>

                <div className='form-enviar-msj'>
                    <form onSubmit={handleSubmitMessage}>
                        <input placeholder='Enviar un mensaje a #consultas' name='mensaje' value={mensaje}
                          onChange={(e) => setMensaje(e.target.value)}/>
                        {error.isError && <span>{error.text}</span>}
                        <div className='form-btn-icons'>
                            <div className='form-icons'>
                                <button className='form-icon-class'><VscAdd /></button>
                                <button className='form-icon-class'><TbLetterCase /></button>
                                <button className='form-icon-class'><VscSmiley /></button>
                                <button className='form-icon-class'><VscMention /></button>
                                <button className='form-icon-class'><IoVideocamOutline /></button>
                                <button className='form-icon-class'><VscMic /></button>
                                <button className='form-icon-class'><VscDiffIgnored /></button>
                            </div>
                            <div className='form-btn'>
                                <button type='submit' className='form-icon-class-right'><VscSend /></button>
                                <button className='form-icon-class-right'><VscChevronDown /></button>
                              
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}


export default EnviarMensaje