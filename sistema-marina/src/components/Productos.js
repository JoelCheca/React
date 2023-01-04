import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import nofoto from './../assets/images/nofoto.jpg';
import './Productos.css';



export default function Productos(props) {
  const [listaProductos, setListaProductos] = useState([]);
  const [itemProducto, setItemProducto] = useState([]);

  console.log(props);

  useEffect(() => {
    leerServicio(props.categoriaProductos);
  }, [props.categoriaProductos]);


  /*
  const leerServicio = (idcategoria) => {
    const rutaServicio =
      "https://servicios.campus.pe/productos.php?idcategoria=" + idcategoria;
    fetch(rutaServicio)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log(data);
        setListaProductos(data);
      });
  };*/


  
  const leerServicio = async(idcategoria) => {
    const rutaServicio ="https://servicios.campus.pe/productos.php?idcategoria=" + idcategoria;
    const response = await fetch(rutaServicio);
    const data = await response.json();
    setListaProductos(data);
    }




  const dibujarTabla = () => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Cod</th>
            <th>Producto</th>
            <th className="text-end">Precio</th>
          </tr>
        </thead>
        <tbody>
          {listaProductos.map((item) => (
            <tr key={item.idproducto}>
              <td>{item.idproducto}</td>
              <td>{item.nombre}</td>
              <td className="text-end">
              <span className="precio-lista">
                    {item.preciorebajado === "0"
                      ? ""
                      : "S/" + parseFloat(item.precio).toFixed(2)}
                  </span>       
               {item.preciorebajado === "0"
                    ? parseFloat(item.precio).toFixed(2)
                    : parseFloat(item.preciorebajado).toFixed(2)}
            
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const seleccionarProducto = (item) => {
    console.log(item.idproducto);
    const rutaServicio =
      "https://servicios.campus.pe/productos.php?idproducto=" + item.idproducto;
    fetch(rutaServicio)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //onsole.log(data);
        setItemProducto(data[0]);
      });
  }

  const dibujarCuadtricula = () => {
    return (
      <div className="row  row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 g-4" id="cards-productos">
        {listaProductos.map(item =>
          <div className="col" key={item.idproducto}>
            <div className="card">

              <Link to={"/ProductoDetalle/" + item.idproducto}>

                <img src={item.imagenchica === null
                  ? nofoto
                  : "https://servicios.campus.pe/" + item.imagenchica
                } className="card-img-top" alt="..." />
              </Link>

              <div className={item.preciorebajado === "0"
                ? "sin-oferta"
                : "con-oferta"
              }>{Math.round((1 - parseFloat(item.preciorebajado) / parseFloat(item.precio)) * 100)}%</div>
              <div className="card-body">
                <h6 className="card-title">{item.nombre}  
                 <i className="bi bi-bag-fill btnCarrito"
                 onClick={()=> agregarCarrito(item)}
                 title="Añadir al Carrito"></i></h6> 


                   <p className="card-text">S/
                  {item.preciorebajado === "0"
                    ? parseFloat(item.precio).toFixed(2)
                    : parseFloat(item.preciorebajado).toFixed(2)}
                  <span className="precio-lista">
                    {item.preciorebajado === "0"
                      ? ""
                      : "S/" + parseFloat(item.precio).toFixed(2)}
                  </span>
                  <i className="bi bi-eye-fill btnQuickView"
                    data-bs-toggle="modal"
                    data-bs-target="#quickViewModal"
                    onClick={() => seleccionarProducto(item)}></i>
                  
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

    )
  }


const agregarCarrito = (item)=> {
  item.cantidad = 1; //se agregado un campo en forma dinamica
  console.log(item);


  let Carrito =[];
  Carrito.push(item); // asi se agrega un elemento(producto al arreglo del carrito)
  sessionStorage.setItem("Carrito",JSON.stringify(Carrito));
}



  const ModalQuickView = () => {
    return (

      <div className="modal fade" id="quickViewModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">{itemProducto.nombre}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-4">
                  <img src={"https://servicios.campus.pe/" + itemProducto.imagengrande}
                    className="img-fluid" alt="" />
                </div>
                <div className="col-md-8">
                  <table className="table">
                    <tbody>
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
                          </span></td>
                      </tr>
                      <tr>
                        <th>Detalle</th>
                        <td>{itemProducto.detalle}</td>
                      </tr>
                      <tr>
                        <th>Stock</th>
                        <td>{itemProducto.unidadesenexistencia}</td>
                      </tr>
                      <tr>
                        <th>Descripción</th>
                        <td>{itemProducto.descripcion}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-primary">Añadir al carrito</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
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
          {dibujarCuadtricula()}
        </div>
        <div
          className="tab-pane fade"
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabIndex="0"
        >
          {dibujarTabla()}
        </div>
      </div>
      {ModalQuickView()}
    </>
  );
}
