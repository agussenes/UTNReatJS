import React from 'react';
import './Catalogo.css';


const TarjetaProductos = ({ producto }) => {

  return (
    <div className="tarjetaProducto">
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
    </div>
  );
};

export default TarjetaProductos;