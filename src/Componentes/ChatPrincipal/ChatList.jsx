import React, { useState } from 'react';
import EnviarMensaje from './EnviarMensaje/EnviarMensaje';
import ChatItem from './ChatItem';
import './chatstilo.css';

const ChatList = () => {
  const [chats, setChats] = useState([]); // Estado para almacenar los mensajes

  // Función para agregar un mensaje al chat
  const agregarMensaje = ({ usuario, texto }) => {
    const nuevoMensaje = {
      id: Date.now(),  // ID único
      fecha: new Date().toLocaleString(),  // Fecha y hora actual
      nombre: usuario,  // Nombre del usuario
      mensaje: texto,  // Contenido del mensaje
      image: 'imagenes/usuario.webp',  // Imagen del usuario (si tienes una URL)
    }

    setChats([...chats, nuevoMensaje]); // Agrega el nuevo mensaje a la lista
  }

  // Genera el JSX para cada mensaje
  const ChatJSX = chats.map((chat) => (
        
        <ChatItem 
          key={chat.id} 
          fecha={chat.fecha} 
          image={chat.image} 
          nombre={chat.nombre} 
          mensaje={chat.mensaje} 
        />
     
  ))

  return (
    <>
      <div className='coso'>
        {ChatJSX}
      </div>
      <div className='enviar-mensaje'>
        <EnviarMensaje agregarMensaje={agregarMensaje} /> {/* Pasamos agregarMensaje como prop */}
      </div>
    </>
  );
}

export default ChatList;
