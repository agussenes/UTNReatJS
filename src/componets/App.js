import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Navbar/NavBar.jsx";
import ListaProductos from './Navbar/ListaProductos.jsx';
import BodyMain from './BodyMain.jsx'
import Footer from "./Footer/Footer.jsx";
import Catalogo from "./Catalogo/Catalogo.jsx";
import Contacto from './Contacto.jsx'
import FormularioCrearProducto from "./FormularioCrearProducto.jsx"
import Nosotros from "./Nosotros.jsx"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import '../componets/Styleh.css'



const App = () => {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/products.json');
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    };
    fetchData();
  }, []);

  const productosFiltrados = terminoBusqueda
  ? productos.filter((producto) =>
      producto.nombre.toLocaleLowerCase().includes(terminoBusqueda.toLocaleLowerCase())
    )
  : [];

  


  return (
    <BrowserRouter>
      <NavBar onBuscar={setTerminoBusqueda} />
      <ListaProductos productos={productosFiltrados} />
      <Routes>
        <Route path="/" element={<BodyMain/>} />
        <Route path="/Catalogo" element={<Catalogo />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Formulario-Crear-Producto" element={<FormularioCrearProducto />} />
        <Route path="/Nosotros" element={<Nosotros />} />
      </Routes>
      <Footer/>

    </BrowserRouter>
  );
};


export default App;
