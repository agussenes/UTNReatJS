import React, {useState, useEffect} from 'react';
import FormsNewsletter from './FormsNewsletter';
import ListaSuscriptores from './ListaSuscriptores';

const AppNewsletter = () => {
  const [suscriptores, setSuscriptores] = useState([]);

  useEffect (() =>  {
    const suscriptoresGuardados = JSON.parse (localStorage.getItem ('Suscriptores')) || [];
    setSuscriptores(suscriptoresGuardados)
  }, []);

  const agregarSuscriptor = (correo) => {
    const nuevoSuscriptor = [...suscriptores, correo];
    setSuscriptores(nuevoSuscriptor);
    localStorage.setItem('Suscriptores', JSON.stringify(nuevoSuscriptor));
  }

  return(
    <div className="container">
      <h1>
        Suscribete para recibir nuestras promociones
      </h1>
      <FormsNewsletter agregarSuscriptor={agregarSuscriptor} />
      <ListaSuscriptores suscriptores={suscriptores} />

    </div>

  )
}


export default AppNewsletter;
