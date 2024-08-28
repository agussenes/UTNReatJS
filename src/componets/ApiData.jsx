import React, { useState, useEffect } from 'react';
import './ApiDataCss.css'


function ApiData() {
  const [datos, setDatos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = 'https://apimocha.com/cururu/post';

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        const data = await response.json();
        setDatos(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    obtenerDatos();
  }, []);

  if (loading) {
    return <div>Cargando datos...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='contenedorGeneral'>
      <h2>Productos Destacados</h2>
      <div className="productos">
        {datos.map((producto) => (
          <div key={producto.id} className="producto">
            <h3>{producto.titulo}</h3>
            <img src={producto.imagen} alt={producto.titulo} />
            <p>{producto.descripcion}</p>
            <button className='botonProducto'>Ver detalle</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ApiData;
