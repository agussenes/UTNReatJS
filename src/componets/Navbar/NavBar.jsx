import React, { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faFileText, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import logo from '../../imagenes/LogoConNombreeee.png'
import './Navbar.css';



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
        <a href="#">
          <img src={logo} alt="Cururu" id="logoNavbar" />
        </a>
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
            <a href="./home.html">
               Inicio
            </a>
          </li>
          <li>
            <a href="#">
               Productos
            </a>
          </li>
          <li>
            <a href="#">
               Nosotros
            </a>
          </li>
          <li>
            <a href="#">
              Contacto
            </a>
          </li>
          <li>
            <a href="../formulario.html">
              <FontAwesomeIcon icon={faFileText} aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faCartShopping} />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;