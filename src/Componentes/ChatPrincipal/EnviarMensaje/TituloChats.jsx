import { AiFillCustomerService, AiOutlineDown } from "react-icons/ai";
import { FaEllipsisVertical } from "react-icons/fa6";
import '../chatstilo.css'
import { GrAdd, GrMultiple, GrDocumentVerified } from "react-icons/gr";
import { RiChat1Fill } from "react-icons/ri";
import { pantallaChat } from "../chat_data";

export const IconosDerechos = () => {

    return (

        <div className='contenedor-chat'>
            <div className="contenedor-chat-hijo">
                <div className='primer-titulo'>
                    <div className='primer-contact-titulo'>
                        <h2 className="titulo-consultas">
                            #consultas
                        </h2>
                    </div>
                </div>

                < div className='primer-contact-icon'>
                    <div className='sub-primer-contact-icon'>
                        <img className="image-contact" src='https://ca.slack-edge.com/T077N88610A-U077P07F3N1-9e39be761a9f-24' alt='' />
                        <img className="image-contact" src='https://ca.slack-edge.com/T077N88610A-U07BUNT71HR-f90524af2a17-24' alt='' />
                        <img className="image-contact" src='https://ca.slack-edge.com/T077N88610A-U078EMYQHME-92685084ee9c-24' alt='' />
                        <span className="image-number">
                            47
                        </span>
                    </div>
                    <div className='subsub-primer-contact-icon'>
                        <span><AiFillCustomerService /></span>
                        <span><AiOutlineDown /></span>
                    </div>
                    <span><FaEllipsisVertical /></span>
                </div>
            </div>
            <div className="contenedor-btn-chats">
                <div className="children-chat">
                    <div><span>< RiChat1Fill /></span> <button className="btn-children"> Mensajes</button></div>
                </div>
                <div className="children-chat">
                    <div><span><GrDocumentVerified /></span><button className="btn-children">Añadir canvas</button></div>
                </div>
                <div className="children-chat">
                    <div><span><GrMultiple /></span><button className="btn-children">Archivos</button></div>
                </div>
                <div className="children-chat">
                    <div><button className="btn-children"><GrAdd /></button></div>
                </div>
            </div>
            <div className="chat">
                {pantallaChat.map((chat) => (
                    <>
                        <div key={chat.id}>
                            <small className="">{chat.fecha}</small>
                        </div>
                        <div className="chat-li">
                            <img src={chat.image} alt={chat.nombre} className="img-chatitem" />
                            <div className="toyrepodrida">
                                <h4 className="props-nombre">{chat.nombre}</h4>
                                <p className="mensaje-chat-stilo">{chat.mensaje}</p>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>

    )
}