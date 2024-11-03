import  React from 'react'
import { Route, Routes } from 'react-router-dom'
import WorkspaceScreen from './Pages/WorkspaceScreen'
import InitPage from './Pages/InitPage'
import Random from './Componentes/RandomRedireccion/Random'
import CrearNuevoCanal from './Componentes/Canales/CraarNuevoCanal'





function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<InitPage/>}/>
      <Route path='/workspace/' element={<WorkspaceScreen/>}/>
      <Route path='/inicio/workspace/' element={<WorkspaceScreen/>}/>
      <Route path='/workspace/:workspace_id' element={<WorkspaceScreen/>}/>
      <Route path='/inicio/workspace/:workspace_id' element={<WorkspaceScreen/>}/>
      <Route path='/random' element={<Random/>}/>
      {/**este es para crear un nuevo canal de trabajo */}
      <Route path='/new' element={<CrearNuevoCanal/>}/>
      <Route path='/inicio/new' element={<CrearNuevoCanal/>}/>
     
      <Route path="/new/workspace" element={<WorkspaceScreen/>}/>  
    </Routes>
      
    </>
  )
}


export default App