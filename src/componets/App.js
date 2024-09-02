import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Navbar/NavBar.jsx";
import ListaProductos from './Navbar/ListaProductos.jsx';
import QuienesSomos from "./QuienesSomos.jsx";
import ContainerAccion from "./ContainerAccion.jsx";
import ProdcutosDestacados from "./ProdcutosDestacados.jsx"
import Footer from "./Footer.jsx";
import ApiData from "./ApiData.jsx"
// import Catalogo from "./Catalogo.jsx"
import FormularioCrearProducto from "./FormularioCrearProducto.jsx"

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
    <>
      <NavBar onBuscar={setTerminoBusqueda} />
      <ListaProductos productos={productosFiltrados} />
      <QuienesSomos/>
      <ContainerAccion/>
      <ProdcutosDestacados/>
      <ApiData/>
      {/* <Catalogo/> */}
      <FormularioCrearProducto/>
      <Footer/>

    </>
  );
};


export default App;
