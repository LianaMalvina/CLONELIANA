import React from 'react'
import './main.css'
import { GoChevronDown } from "react-icons/go";
import { TbWorld } from "react-icons/tb";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedinIn, FaInstagram, FaTiktok, FaArrowRight } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaYoutube, FaArrowDown } from "react-icons/fa";
import { IoIosCloudDownload } from "react-icons/io";
import { Link } from 'react-router-dom';

const Main = () => {
    
    return (
        <main className='main'>
            <section className='primer-vista'>
                <div className='contenedor'>
                    <div className='titulo'>
                        <h1><img src='https://a.slack-edge.com/6c404/marketing/img/homepage/bold-existing-users/waving-hand.gif'></img>
                            ¡Hola de nuevo!</h1>
                    </div>
                    <div className='espacios-trabajo'>
                        <div className='tu-email'>Espacios de trabajo para lianakachuk@gmail.com</div>
                        <div className='iconos-works'>

                            <div className='div-work'>
                                <img className='slack-work' src='https://a.slack-edge.com/80588/img/avatars-teams/ava_0026-88.png'></img>


                                <div className='integrantes'>
                                    <div className='nombre-canal'>
                                        <h3>UTN PWI TM LUN Y MIE</h3>
                                    </div>
                                    <div className='fotos-integrantes'>
                                        <img className='foto-perfil' src='https://avatars.slack-edge.com/2024-06-12/7264037024450_e488a3857716e849a0a0_48.jpg' alt='' height="20" width="20"></img>
                                        <img className='foto-perfil' src='https://avatars.slack-edge.com/2024-06-12/7266381867364_f0c6398ae25321dd1150_48.png' alt='' height="20" widt="20"></img>
                                        <img className='foto-perfil' src='https://avatars.slack-edge.com/2024-06-12/7286694847936_afe3c331d66011de08ea_48.jpg' alt='' height="20" widt="20"></img>
                                        <img className='foto-perfil' src='https://avatars.slack-edge.com/2024-06-12/7266380282900_37470fc2765cb5b417a2_48.png' alt='' height="20" widt="20"></img>
                                        <span className='cantidad'>67 miembros</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <Link to={'/random'}><button className='iniciar-slack'>INICIAR SLACK</button></Link>
                            </div>
                        </div>
                    </div>


                    <div className='slack-equipo'>
                        <div className='equipo'>
                            <img src='https://a.slack-edge.com/613463e/marketing/img/homepage/bold-existing-users/create-new-workspace-module/woman-with-laptop-color-background.png'></img>
                            <h3 className='equipo-h3'>¿Quieres usar Slack con otro equipo?</h3></div>
                       <Link to={'/new'}><button className='espacio-boton'>CREAR UN NUEVO ESPACIO DE TRABAJO</button></Link> 
                    </div>

                    <div className='espacio-out'>
                        <p className='espacio'>¿No encuentras tu espacio de trabajo?
                            <a className='espacio-span' src=''>Prueba con otro correo electrónico
                                <span><FaArrowRight /></span>
                            </a>
                        </p>
                    </div>

                    <div className='windows'>
                        <div className='wind'>
                            <a src=''><IoIosCloudDownload className='cloud' /></a>
                            <div className='text-window'>
                                <h3>Slack para Windows</h3>
                                <p className='pepe'> Inicia Slack desde la bandeja para no perderte ninguna notificación
                                    en la computadora</p>
                            </div>
                        </div>

                        <div className='arrowd'>
                            <a className='papa' src=''>Descargar<span ><FaArrowDown /></span></a>
                        </div>
                    </div>
                </div>
            </section>


            <section className='segunda-vista'>
                <div className='contenedor-ultimo'>
                    <div className='shadow'>
                        <div className='ultimo-cuadro'>
                            <img className='celeste' src='https://a.slack-edge.com/4ebba/marketing/img/homepage/bold-existing-users/promos-trial-or-has-paid-plan/slack-connect-illustration.png'></img>
                            <div className='ultimo-contenedor'>
                                <h5>Slack Connect</h5>
                                <h2 className='agiliza'>Agiliza el trabajo con socios externos mediante Slack Connect</h2>
                                <p>Invita a un socio a colaborar contigo en Slack y le regalaremos tres meses de un plan prémium.*</p>
                                <span className='flecha'>Invitar a un socio<span></span><FaArrowRight className='flecha' /></span>
                            </div>
                        </div>
                    </div>

                    <span className='cont'>* Es posible que no se aplique a todos los equipos. Encontrarás más detalles
                        <span><a className='aqui' src=''>aquí.</a></span>
                    </span>

                </div>


                <div className='pie-main'>
                    <div>
                        <h5 className='pie-main-iconos'><span><TbWorld /></span>Cambiar Región<span><GoChevronDown /></span></h5>
                    </div>
                    <div className='redes'>
                        <a><FaLinkedinIn /></a><a><FaInstagram /></a><a><BsFacebook /></a><a><RiTwitterXFill /></a>
                        <a><FaYoutube /></a><a><FaTiktok /></a>
                    </div>
                </div>
                <div></div>
            </section>
        </main>
    )
}

export default Main
