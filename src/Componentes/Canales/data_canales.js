import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';

export const canales_data_inicial = [
    {
        name: 'Espacio inicial',
        id: 1,
        icon: ['PLAYDOWN'],
        channels: [
            {
                name: 'consultas',
                id: 1,
                messages: [
                    { id:1, fecha: '2024-01-01', image: 'image_url', author: 'Usuario', text: 'Hola' },
                ]
            },
            {
                name: 'general',
                id: 2,
                messages: [  { id:1, fecha: '2024-01-01', image: 'image_url', author: 'Usuario', text: 'Hola' },]
            },
            {
                name: 'utilidades',
                id: 3,
                messages: [ { id:1, fecha: '2024-01-01', image: 'image_url', author: 'Usuario', text: 'Hola' },]
            },
            {
                name: 'tareas-entregas',
                id: 4,
                messages: [{ id:1, fecha: '2024-01-01', image: 'image_url', author: 'Usuario', text: 'Hola' },]
            },
        ],
    },
    {
        name: 'Espacio avanzado',
        id: 2,
        icon: ['PLAYDOWN'],
        channels: [
            {
                name: 'consultas',
                id: 1,
                messages: [
                    { id:1, fecha: '2024-01-01', image: 'image_url', author: 'Usuario', text: 'Hola' },
                ]
            },
            {
                name: 'general',
                id: 2,
                messages: [{ id:1, fecha: '2024-01-01', image: 'image_url', author: 'Usuario', text: 'Hola' },]
            },
            {
                name: 'utilidades',
                id: 3,
                messages: [ { id:1, fecha: '2024-01-01', image: 'image_url', author: 'Usuario', text: 'Hola' },]
            },
            {
                name: 'tareas-entregas',
                id: 4,
                messajes: [ { id:1, fecha: '2024-01-01', image: 'image_url', author: 'Usuario', text: 'Hola' },]
            },
        ],
    },
];

const obtenerWorkspaces = () => {
    let workspaces = localStorage.getItem('workspaces')
    if (workspaces) {
        return JSON.parse(workspaces)
    } else {
        localStorage.setItem('workspaces', JSON.stringify(canales_data_inicial))
        return canales_data_inicial
    }
};

const crearNuevoWorkspace = (nuevoWorkspace) => { //esta funcion se activa al llamar el form crear ..
    nuevoWorkspace.id = uuidv4()

    //llama a los workspaces ya creadis y sobre ellos pushea a los nuevos
    let workspaces = obtenerWorkspaces()
    workspaces.push(nuevoWorkspace)
    //guarda la lista actualizada en el localStore
    localStorage.setItem('workspaces', JSON.stringify(workspaces))
};

const obtenerWorkspacePorId =(id)=>{
    let workspaces = obtenerWorkspaces()
    let workspace = workspaces.find(workspace =>workspace.id== Number(id))
    return workspace
}

const buscarWorkspacePorId = (workspace_id)=>{
    let workspaces = localStorage.getItem('workspaces')
workspaces = JSON.parse(workspaces)
return workspaces.find(workspace => workspace.id === workspace_id)
}

const crearCanal = (workspace_id, name_new_channel)=>{
    const workspace_seleccionado = buscarWorkspacePorId(workspace_id)
    const new_channel = {
        name: name_new_channel,
        messages: [],
        id:uuidv4()
    }
    workspace_seleccionado.channel.push(new_channel)

workspace_seleccionado.channel.push(new_channel)
localStorage.setItem('workspaces', JSON.stringify(workspaces))
}


export { obtenerWorkspaces, crearNuevoWorkspace, obtenerWorkspacePorId, crearCanal}