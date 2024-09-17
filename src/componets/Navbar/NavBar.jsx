import React, { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faFileText, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import logo from '../../imagenes/LogoConNombreeee.png'
import './Navbar.css';

import { Link } from 'react-router-dom';



const NavBar = ({ onBuscar }) => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [terminoBusqueda, setTerminoBusqueda] = useState('');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearchChange = (e) => {
    setTerminoBusqueda(e.target.value);
    onBuscar(e.target.value);
  };
  
  return (

    <div className="containerNavbar">
      
      <div className="brand">
        <Link to="/">
          <img src={logo} alt="Cururu" id="logoNavbar" />
        </Link>
      </div>

      <div className="searchBar">
        <input
          type="text"
          placeholder="Buscar productos"
          value={terminoBusqueda}
          onChange={handleSearchChange}
        />
      </div>

      

      <nav className="navBar">

      <div className="menuIcon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>



        <ul className={`navLinks ${menuOpen ? 'show' : ''}`}>
          <li>
            <Link to="/">
               Inicio
            </Link>
          </li>
          <li>
            <Link to="./Catalogo">
               Catálogo
            </Link>
          </li>
          <li>
            <Link to="/">
               Nosotros
            </Link>
          </li>
          <li>
            <Link to="/Contacto">
              Contacto
            </Link>
          </li>
          <li>
            <Link to="./Formulario-Crear-Producto">
              <FontAwesomeIcon icon={faFileText} aria-hidden="true" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;