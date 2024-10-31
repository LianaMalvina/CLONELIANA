import React, {useState, useEffect,useRef} from 'react'
import '../homepage.css'
import Navegador from '../Componentes/NavBar/Navegador'
import { Lateral } from '../Componentes/BarraIzquierda/Lateral'
import { lateral_izq } from '../Componentes/BarraIzquierda/lateralizquierda'
import Canales from '../Componentes/Canales/Canales'
import { canales_data_inicial} from '../Componentes/Canales/data_canales'
import ChatList from '../Componentes/ChatPrincipal/ChatList'
import { IconosDerechos } from '../Componentes/ChatPrincipal/EnviarMensaje/TituloChats'




const WorkspaceScreen = () => {



const [chats, setChats] = useState([])
const mensajesRef = useRef(null)


  const agregarMensaje = (mensaje) => {
      const nuevoChat = {
          id: chats.length + 1, 
          fecha: new Date().toLocaleString(), 
          image: '', 
          nombre: 'Usuario', 
          mensaje: mensaje, 
      }
      setChats((prevChats) => [...prevChats, nuevoChat])
  }
  useEffect(() => {
    if (mensajesRef.current) {
        // Mover el scroll hacia arriba cuando se agrega un mensaje
        mensajesRef.current.scrollTop =  mensajesRef.current.scrollHeight; // Establece el scroll en la parte superior
    }
}, [chats]);

  return (
    <>
      <Navegador className="navegador-home-page"/>
      <div className='div-home'>
        <div className='lateral-app'>
          <span style={{
            color: 'black', textAlign: 'center', backgroundColor: '#ababad',
            width: '60%', justifyItems: 'center', marginLeft: '12px', height: '40px', alignContent: 'center',
            borderRadius: '6px', marginBottom: '35px', fontSize: '20px'
          }}>UP</span>
          <div className='iconos-importados' style={{ marginTop: '-30px' }}>
            <Lateral lateral_izq={lateral_izq} />
          </div>
        </div>

        <div className='centro'>
          <div className='canales-app'>
          
            <Canales canales_data={canales_data_inicial} /> 
             
          </div>

          <div className='chat-principal'>

            <div className='chat-ppal'>
              <IconosDerechos />
            </div>

            <ChatList chats={chats} agregarMensaje={agregarMensaje} ref={mensajesRef} className='ultimo'/>
             
          </div>
        </div>
      </div>
    </>
  )
}

export default WorkspaceScreen















