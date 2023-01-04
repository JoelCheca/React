import React, { useEffect, useState } from 'react'

export default function Envios() {

    const [listaEnvios, setListaEnvios] = useState([]);

    useEffect(() => {
        leerServicio();
    },[])

    const leerServicio = () => {
        const rutaServicio = "https://servicios.campus.pe/servicioenvios.php";
        fetch(rutaServicio)
            .then((Response) => {
                return Response.json()
            })
            .then((data) => {
                //console.log(data);
                setListaEnvios(data)
            })

    }


    return (
        <section id='envios' className='padded'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Empresas de envíos</h2>
                    </div>
                    <div className="col">
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Cod</th>
                                    <th>Empresa</th>
                                    <th>Teléfono</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listaEnvios.map(item =>

                                    <tr key={item.idempresaenvio}>
                                        <td>{item.idempresaenvio}</td>
                                        <td>{item.nombre}</td>
                                        <td>{item.telefono}</td>
                                    </tr>
                                )}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}
