import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faFrog, faStore, faPeopleGroup, faHeadset, faFileText, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import logo from '../imagenes/LogoConNombre2.png';
import './Styleh.css';

const NavBar = () => {
  return (
    <div className="containerNavbar">
      <div id="brand">
        <a href="#">
          <img src={logo} alt="Cururu" id="logoNavbar" />
        </a>
      </div>

      <nav id="navBar">
        <div id="menuIcon">
          <FontAwesomeIcon icon={faBars} />
        </div>

        <ul id="navLinks">
          <li>
            <a href="./home.html">
              <FontAwesomeIcon icon={faFrog} /> Inicio
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faStore} /> Productos
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faPeopleGroup} /> Nosotros
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faHeadset} /> Contacto
            </a>
          </li>
          <li>
            <a href="./formulario.html">
              <FontAwesomeIcon icon={faFileText} aria-hidden="true" /> Cargar
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
