import React, { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faFileText, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import logo from '../../imagenes/LogoConNombreeee.png'
import './Navbar.css';
import { Link } from 'react-router-dom';
import ListaProductos from './ListaProductos';





const NavBar = ({ onBuscar, productos, carrito }) => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [terminoBusqueda, setTerminoBusqueda] = useState('');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  
  const handleSearchChange = (e) => {
    setTerminoBusqueda(e.target.value);
    onBuscar(e.target.value);
  };

  const totalProductos = carrito.reduce((total, producto) => {
    return total + (producto.cantidad || 0);
  }, 0);
  

  
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
        <ListaProductos productos={productos} /> 
      </div>

      

      <nav className="navBar">

      <div className="menuIcon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>



        <ul className={`navLinks ${menuOpen ? 'show' : 'hide'}`}>
        <li>
            <Link to="/" onClick={closeMenu}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/Catalogo" onClick={closeMenu}>
              Catálogo
            </Link>
          </li>
          <li>
            <Link to="/Nosotros" onClick={closeMenu}>
               Nosotros
            </Link>
          </li>
          <li>
            <Link to="/Contacto" onClick={closeMenu}>
              Contacto
            </Link>
          </li>
          <li>
            <Link to="/Carrito" onClick={closeMenu}>
              <div className="carritoNavbar"><FontAwesomeIcon icon={faCartShopping}/><span className="carritoTotalNav"> {totalProductos} </span></div>
            </Link>
          </li>
          <li>
            <Link to="/Formulario-Crear-Producto" onClick={closeMenu}>
              <FontAwesomeIcon icon={faFileText} aria-hidden="true" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;