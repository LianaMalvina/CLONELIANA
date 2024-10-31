import React, {useState} from 'react'
import EnviarMensaje from './EnviarMensaje/EnviarMensaje'
import ChatItem from './ChatItem'
import './chatstilo.css'




const ChatList = ({ chats, agregarMensaje }) => {
  const ChatJSX = chats.map((chat) => {
    return (    
        <div className='chat'>
          <li className='chat-li'>
            <ChatItem key={chat.id} fecha={chat.fecha} image={chat.image} nombre={chat.nombre} mensaje={chat.mensaje} />
          </li>
        </div>
    )
  })

  return (
    <>
      <div className='coso'>
        {ChatJSX}
      </div>
      <div className='enviar-mensaje'>
        <EnviarMensaje agregarMensaje={agregarMensaje}/>
      </div>
    </>
  )
}

export default ChatList