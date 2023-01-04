import React, { useEffect, useState } from "react";
import Productos from "../components/Productos";

export default function Tienda() {
  const [listaCategorias, setListaCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState([]);
  useEffect(() => {
    leerServicio();
  }, []);

  /*
  const leerServicio = () => {
    const rutaServicio = "https://servicios.campus.pe/categorias.php";
    fetch(rutaServicio)
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        //console.log(data);
        setListaCategorias(data);
      });
  };*/



  const leerServicio = async() => {
    const rutaServicio = "https://servicios.campus.pe/categorias.php";
    const response = await fetch(rutaServicio);
    const data = await response.json();
    setListaCategorias(data);
    }











  const seleccionarCategoria = (event, item) => {
    //console.log(item);
    setCategoriaSeleccionada(item);
    var itemsLista = document.querySelectorAll("#lista-categorias li");
    itemsLista.forEach((item) => {
      //forEach examina cada uno de los elementos de la lista
      item.classList.remove("active");
      //elimina la clse del conjunto de clases de objeto
    });
    event.currentTarget.classList.add("active");
    //event.currentTrget hace referencia al objeto que recibio el evento
    //classList.add("active")indica que a la lista de clases se esta añadiendo
    //la clase active
  };
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Tienda</h1>
        </div>
      </header>
      <section className="padded">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <ul className="list-group" id="lista-categorias">
                {listaCategorias.map((item) => (
                  <li
                    className="list-group-item"
                    key={item.idcategoria}
                    onClick={(event) => seleccionarCategoria(event, item)}
                  >
                    <h5>{item.nombre}</h5>
                    <small>{item.descripcion}</small>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-9 col-md-8">
              <h3>{categoriaSeleccionada.nombre}</h3>
              <p>{categoriaSeleccionada.descripcion}</p>
              <Productos
                categoriaProductos = {categoriaSeleccionada.idcategoria != null
                ?categoriaSeleccionada.idcategoria : 0}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}