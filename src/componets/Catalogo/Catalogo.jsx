import React, {useState, useEffect} from 'react';
import TarjetaProductos from './TarjetaProductos';
import './Catalogo.css';

const Catalogo = () => {

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
  
    return (
      <section className='seccionCatalogo'>
        <div className='topCatalogo'>
          <h2>Catálogo de Productos</h2>
        </div>
        <div className='contenedorCatalogo'>
          {productos.map((producto) => (
            <TarjetaProductos key={producto.id} producto={producto} />
          ))}
        </div>
      </section>
    );
  };
  


  export default Catalogo;
