import React from 'react';
import './Catalogo.css';


const TarjetaProductos = ({ producto, onAgregar }) => {

  return (
    <div className="tarjetaProducto">
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
      <div className="buttonContainer">
      <button className="buttonComprar">Comprar</button><button className="buttonAddChart" onClick={() => onAgregar(producto)} >Adicionar al Carrito</button>
      </div>  
    </div>

  );
};

export default TarjetaProductos;