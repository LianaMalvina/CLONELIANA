import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';

export const canales_data_inicial = [
    {
        titulo: 'Espacio inicial',
        id: 5,
        icon: ['PLAYDOWN'],
        canales: [
            {
                name: 'consultas',
                id: 1,
                mensajes: [
                    { fecha: '2024-01-01', image: 'image_url', nombre: 'Usuario', texto: 'Hola' },
                ]
            },
            {
                name: 'general',
                id: 2,
                mensajes: [ { fecha: '2024-01-01', image: 'image_url', nombre: 'Usuario', texto: 'Hola' },]
            },
            {
                name: 'utilidades',
                id: 3,
                mensajes: [ { fecha: '2024-01-01', image: 'image_url', nombre: 'Usuario', texto: 'Hola' },]
            },
            {
                name: 'tareas-entregas',
                id: 4,
                mensajes: [ { fecha: '2024-01-01', image: 'image_url', nombre: 'Usuario', texto: 'Hola' },]
            },
        ],
    },
    {
        titulo: 'Espacio avanzado',
        id: 5,
        icon: ['PLAYDOWN'],
        canales: [
            {
                name: 'consultas',
                id: 1,
                mensajes: [
                    { fecha: '2024-01-01', image: 'image_url', nombre: 'Usuario', texto: 'Hola' },
                ]
            },
            {
                name: 'general',
                id: 2,
                mensajes: [ { fecha: '2024-01-01', image: 'image_url', nombre: 'Usuario', texto: 'Hola' },]
            },
            {
                name: 'utilidades',
                id: 3,
                mensajes: [ { fecha: '2024-01-01', image: 'image_url', nombre: 'Usuario', texto: 'Hola' },]
            },
            {
                name: 'tareas-entregas',
                id: 4,
                mensajes: [ { fecha: '2024-01-01', image: 'image_url', nombre: 'Usuario', texto: 'Hola' },]
            },
        ],
    },
];

const obtenerNuevoCanal = () => {
    let nuevoscanales = localStorage.getItem('nuevoscanales')
    if (nuevoscanales) {
        return JSON.parse(nuevoscanales)
    } else {
        localStorage.setItem('nuevoscanales', JSON.stringify(canales_data_inicial))
        return canales_data_inicial
    }
};

const crearNuevosCanales = (nuevoCanal) => {
    nuevoCanal.id = uuidv4()
    let nuevoscanales = obtenerNuevoCanal()
    nuevoscanales.push(nuevoCanal)
    localStorage.setItem('nuevoscanales', JSON.stringify(nuevoscanales))
};

export { obtenerNuevoCanal, crearNuevosCanales}