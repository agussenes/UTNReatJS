import React from 'react';

const ListaProductos = ({ productos }) => {
  if (productos.length === 0) {
    return 
    ;
  }

  return (
    <div className="listaProductos">
      {productos.map((producto) => (
        <div key={producto.id} className="producto">
          <h3>{producto.nombre}</h3>
          <p>{producto.descripcion}</p>
        </div>
      ))}
    </div>
  );
};

export default ListaProductos;