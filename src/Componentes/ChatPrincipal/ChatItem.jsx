import './chatstilo.css'

import React from "react"
const ChatItem = (props) => {
  return (
    
    <div className="chat">
        <div>
          <span className='fecha-chat'>{props.fecha}</span>
        </div>
        <div className="chat-li">
          <span>{props.image && (
            <img src={props.image} className='img-chatitem' alt="Chat image" />
          )}</span>

          <div className='contenido-mensaje-nombre'>
            <span className='props-nombre'>{props.nombre}</span>
            <p className='mensaje-chat-stilo'>{props.mensaje}</p>
          </div>
        </div>
      </div>
  
  
  )

}

export default ChatItem