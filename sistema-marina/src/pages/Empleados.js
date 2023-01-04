import React, { useEffect, useState } from 'react'
import nofoto from './../assets/images/nofoto.jpg';

export default function Empleados() {
    const [listaEmpleados, setListaEmpleados] = useState([]);

    useEffect(() => {
        leerServicio();
    }, [])

    const leerServicio = () => {
        const rutaServicio = "https://servicios.campus.pe/empleados.php";
        fetch(rutaServicio)
            .then((Response) => {
                return Response.json()
            })
            .then((data) => {
                //console.log(data);
                setListaEmpleados(data)
            })
    };

    const dibujarTabla = () => {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Apellidos</th>
                        <th>Nombres</th>
                        <th>Cargo</th>
                    </tr>
                </thead>
                <tbody>
                    {listaEmpleados.map((item) => (
                        <tr key={item.idempleado}>
                            <td>{item.idempleado}</td>
                            <td>{item.apellidos}</td>
                            <td>{item.nombres}</td>
                            <td>{item.cargo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    const dibujarCuadricula = () => {
        return (
            <div className="row row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 g-4">
                {listaEmpleados.map(item =>
                    <div className="col" key={item.idempleado}>
                        <div className="card">


                            <img src={item.foto === null  ///si no hay imagen, que muetre NoFoto como imagen
                                ? nofoto
                                : "https://servicios.campus.pe/fotos/" + item.foto} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.nombres}</h5>
                                <p className="card-text"> {item.cargo}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }


    return (
        <>
            <header className='page-header'>
                <div className='container'>
                    <h1>Empleados</h1>
                </div>
            </header>
            <div className='padded'>
                <section className='container'>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link active"
                                id="home-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#home-tab-pane"
                                type="button"
                                role="tab"
                                aria-controls="home-tab-pane"
                                aria-selected="true"
                            >
                                <i className="bi bi-grid-3x3"></i>

                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="profile-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#profile-tab-pane"
                                type="button"
                                role="tab"
                                aria-controls="profile-tab-pane"
                                aria-selected="false"
                            >
                                <i className="bi bi-list"></i>

                            </button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div
                            className="tab-pane fade show active"
                            id="home-tab-pane"
                            role="tabpanel"
                            aria-labelledby="home-tab"
                            tabIndex="0"
                        >
                            {dibujarCuadricula()}

                        </div>
                        <div
                            className="tab-pane fade"
                            id="profile-tab-pane"
                            role="tabpanel"
                            aria-labelledby="profile-tab"
                            tabindex="0"
                        >
                            {dibujarTabla()}
                        </div>

                    </div>
                </section>
            </div>
        </>
    );

}