import React, { useEffect, useState } from "react";


export default function Carrito() {
    const[itemsCarrito, setItemCarrito]=useState([]);

    useEffect(()=>{
        leerDatosCarrito();
    },[])

   const leerDatosCarrito= async()=>{
     let datosCarrito = await JSON.parse(sessionStorage.getItem("Carrito"));
     setItemCarrito(datosCarrito);
   }




 return (
        <>
            <header className="page-header">
                <div className="container">
                    <h1>Carrito de Compras</h1>
                </div>
            </header>
            <section className="padded">
                <div className="container">
                    <table className='table'>
                        <thead>                          
                            <tr>
                                <th>Cod</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                        {itemsCarrito.map(item=>
                            <tr>
                                <td>{item.idproducto}</td>
                                <td>{item.nombre}</td>
                                <td>{item.precio}</td>
                                <td>{item.cantidad}</td>                                 
                                <td></td>
                            </tr>
                            
                            
                            )}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}