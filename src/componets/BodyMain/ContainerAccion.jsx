import React from 'react';
import atencionCliente from '../../imagenes/atencion-al-cliente.png';
import disenoPersonalizado from '../../imagenes/el-pensamiento-de-diseno.png';
import catalogo from '../../imagenes/productos.png';

const ContainerAccion = () => {
  return (
    <div className="containerAccion">
      <div className="accion">
        <img src={atencionCliente} alt="icono atencion al cliente" />
        <h3>Atención Personalizada</h3>
      </div>
      <div className="accion">
        <img src={disenoPersonalizado} alt="diseño personalizado" />
        <h3>Diseños Personalizados</h3>
      </div>
      <div className="accion">
        <img src={catalogo} alt="Catálogo" />
        <h3>Catálogo</h3>
      </div>
    </div>
  );
}

export default ContainerAccion;
