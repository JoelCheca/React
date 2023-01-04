//import logo from './logo.svg'; //importar un imagen
import './App.css';
import MainHeader from './common/MainHeader';
import MainFooter from './common/MainFooter';
import MainNav from './common/MainNav';
import Inicio from './pages/Inicio';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inversiones from './pages/Inversiones';
import Proveedores from './pages/Proveedores';
import Empleados from './pages/Empleados';
import Tienda from './pages/Tienda';
import Clientes from './pages/Clientes';
import ProductoDetalle from './pages/ProductoDetalle';
import Carrito from './pages/Carrito';



function App() {
  return (
    <>{/* Comentario */}
      <BrowserRouter>
        <MainHeader />
        <MainNav />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Inversiones" element={<Inversiones />} />
            <Route path="/Proveedores" element={<Proveedores />} />
            <Route path="/Empleados" element={<Empleados />} />
            <Route path='/Tienda' element={<Tienda />} />
            <Route path='/Clientes' element={<Clientes />} />
            <Route path='/ProductoDetalle/:idproducto' element={<ProductoDetalle />} />
            <Route path='/Carrito' element={<Carrito />} />
            

          </Routes>
        </main>
        <MainFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
