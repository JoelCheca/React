import React from 'react'
import Banner from '../home/Banner'
import Envios from '../home/Envios'
import Nosotros from '../home/Nosotros'
import Noticias from '../home/Noticias'

export default function Inicio() {
    return (
        <>
            <Banner />
            <Nosotros />
            <Noticias />
            <Envios />
        </>
    )
}
