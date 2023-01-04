import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductoDetalle() {
    let params = useParams();
    //console.log(params);
    const [itemProducto, setItemProducto] = useState([]);
    useEffect(() => {
        leerServicio();
    }, []);

    const leerServicio = () => {
        const rutaServicio =
            "https://servicios.campus.pe/productos.php?idproducto=" + params.idproducto;
        fetch(rutaServicio)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                //console.log(data);
                setItemProducto(data[0]);

            });
    };

    return (
        <section className='padded'>
        <div className="container">
          <div className="row">
            <div className="col">   
            <img src={"https://servicios.campus.pe/"+itemProducto.imagengrande} alt= "" className='img-fluid'/>         
            </div>
            <div className="col">      
            <table className='table'>
              <tbody>
                <tr>
                  <th>Detalle</th>
                  <td>{itemProducto.detalle}</td>
                </tr>
                <tr>
                  <th>Precio</th>
                  <td>S/
                  {itemProducto.preciorebajado === "0"
                    ? parseFloat(itemProducto.precio).toFixed(2)
                    : parseFloat(itemProducto.preciorebajado).toFixed(2)}
                  <span className="precio-lista">
                    {itemProducto.preciorebajado === "0"
                      ? ""
                      : "S/" + parseFloat(itemProducto.precio).toFixed(2)}
                      </span>
                  </td>
                </tr>
                <tr>
                  <th>Categoria</th>
                  <td>{itemProducto.categoria}</td>
                </tr>
                <tr>
                  <th>Stock</th>
                  <td>{itemProducto.unidadesenexistencia}</td>
                </tr>
                <tr>
                  <th>Proveedor</th>
                  <td>{itemProducto.proveedor}</td>
                </tr>
                <tr>
                  <th>País</th>
                  <td>{itemProducto.pais}</td>
                </tr>
                <tr>
                  <th>Atención al Cliente</th>
                  <td>{itemProducto.telefono}</td>
                </tr>
              </tbody>
            </table>
            <div  className='mb-3'>
            <button className='btn btn-primary' type="button">Añadir al carrito</button>
            </div>


            <h3>Descripción</h3>
            <div dangerouslySetInnerHTML={{__html:itemProducto.descripcion}}></div>
    
            </div>
          </div>
        </div>
      </section>
  
    )
}
