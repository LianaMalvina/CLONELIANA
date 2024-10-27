import  React from 'react'
import { Route, Routes } from 'react-router-dom'
import WorkspaceScreen from './Pages/WorkspaceScreen'
import InitPage from './Pages/InitPage'
import Random from './Componentes/RandomRedireccion/Random'
import CrearNuevoCanal from './Componentes/Canales/CraarNuevoCanal'
import Canales from './Componentes/Canales/Canales'




function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<InitPage/>}/>
      <Route path='/inicio/home' element={<WorkspaceScreen/>}/>
      <Route path='/home/' element={<WorkspaceScreen/>}/>
      <Route path='/random' element={<Random/>}/>
      {/**este es para crear un nuevo canal de trabajo */}
      <Route path='/new' element={<CrearNuevoCanal/>}/>
      <Route path='/inicio/new' element={<CrearNuevoCanal/>}/>
     
      <Route path="/new/home" element={<WorkspaceScreen/>}/>  
    </Routes>
      
    </>
  )
}


export default App