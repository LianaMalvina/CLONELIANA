import  React from 'react'
import { Route, Routes } from 'react-router-dom'
import WorkspaceScreen from './Pages/WorkspaceScreen'
import InitPage from './Pages/InitPage'
import Random from './Componentes/RandomRedireccion/Random'
import CrearNuevoWorkspace from './Componentes/Canales/CrearNuevoWorkspace'
import Usuarios from './Componentes/Usuarios/Usuarios'
import { UserProvider } from './Componentes/Usuarios/UserContext'



function App() {

  return (
    <>
    <UserProvider>
    <Routes>
      <Route path='/' element={<InitPage/>}/>
      <Route path='/workspace/' element={<WorkspaceScreen/>}/>
      <Route path='/inicio/workspace/' element={<WorkspaceScreen/>}/>
      <Route path='/workspace/:workspace_id' element={<WorkspaceScreen/>}/>
      <Route path='/inicio/workspace/:workspace_id' element={<WorkspaceScreen/>}/>
      <Route path='/workspace/:workspace_id/:channel_id' element={<WorkspaceScreen/>}/>
      <Route path='/random' element={<Random/>}/>
      {/**este es para crear un nuevo canal de trabajo */}
      <Route path='/new' element={<CrearNuevoWorkspace/>}/>
      <Route path='/inicio/new' element={<CrearNuevoWorkspace/>}/>
     
      <Route path="/new/workspace" element={<WorkspaceScreen/>}/> 
      <Route path='/usuario' element={<Usuarios/>}/> 
    </Routes>
    </UserProvider>
    </>
  )
}


export default App