import React,{useEffect, useState} from "react";


export default function Proveedores() {

    const [listaProveedores, setListaProveedores] = useState([]);

    useEffect(() => {
        leerServicio();
    })

    /*
    const leerServicio = () => {
        const rutaServicio = "https://servicios.campus.pe/proveedores.php";
        fetch(rutaServicio)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                //console.log(data);
                setListaProveedores(data)
            })

    }*/


    const leerServicio = async() => {
        const rutaServicio = "https://servicios.campus.pe/proveedores.php";
        const response = await fetch(rutaServicio);
        const data = await response.json();
        setListaProveedores(data);
        }












  return (
    <>
    <header className="page-header">
        <div className="container">
    <h1>Proveedores</h1>
    </div>
    </header>
    <section>
        <div className="container">
        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Cod</th>
                                    <th>Empresa</th>
                                    <th>Contactos</th>
                                    <th>Cargo</th>
                                    <th>Ciudad</th>
                                    <th>Pais</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listaProveedores.map(item =>

                                    <tr key={item.idproveedor}>
                                        <td>{item.idproveedor}</td>
                                        <td>{item.nombreempresa}</td>
                                        <td>{item.nombrecontacto}</td>
                                        <td>{item.cargocontacto}</td>
                                        <td>{item.ciudad}</td>
                                        <td>{item.pais}</td>
                                        
                                    </tr>
                                )}

                            </tbody>
                        </table>
        </div>
    </section>
    </>
  )
}
