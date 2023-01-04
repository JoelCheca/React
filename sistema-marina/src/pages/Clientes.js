import React, { useEffect, useState } from 'react'

export default function Clientes() {
    const [listaClientes, setListaClientes] = useState([]);

    useEffect(() => {
        leerServicio();
    }, [])

    const leerServicio = () => {
        const rutaServicio = "https://servicios.campus.pe/servicioclientes.php";
        fetch(rutaServicio)
            .then((Response) => {
                return Response.json()
            })
            .then((data) => {
                //console.log(data);
                setListaClientes(data)
            })
    }



    return (
        <>
            <header className='page-header'>
                <div className='container'>
                    <h1>clientes</h1>
                </div>
            </header>
            <section className='padded'>
                <div className="container">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>idcliente</th>
                                <th>usuario</th>
                                <th>empresa</th>
                                <th>nombres</th>
                                <th>correo</th>
                                <th>cargo</th>
                                <th>direccion</th>
                                <th>ciudad</th>
                                <th>region</th>
                                <th>clave</th>
                                <th>pais</th>
                                <th>telefono</th>
                                <th>fax</th>

                            </tr>
                        </thead>
                        <tbody>
                            {listaClientes.map(item =>

                                <tr key={item.idcliente}>
                                      <td>{item.idcliente}</td>
                                    <td>{item.usuario}</td>
                                    <td>{item.empresa}</td>
                                    <td>{item.nombres}</td>
                                    <td>{item.correo}</td>
                                    <td>{item.cargo}</td>
                                    <td>{item.direccion}</td>
                                    <td>{item.ciudad}</td>
                                    <td>{item.region}</td>
                                    <td>{item.clave}</td>
                                    <td>{item.pais}</td>
                                    <td>{item.telefono}</td>
                                    <td>{item.fax}</td>

                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

            </section>
        </>
    )
}
