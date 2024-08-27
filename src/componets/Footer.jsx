import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMapMarker, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="sec QuienesSomos">
            <h2>Quienes Somos</h2>
            <p>
              En Cururu, somos un equipo apasionado por la educación y el diseño, dedicados a crear juegos Montessori de madera y muebles personalizados.
              Nuestra misión es fomentar el desarrollo infantil a través de materiales educativos de alta calidad
              y diseños únicos que inspiran el aprendizaje y la creatividad.
              En Cururu, cada pieza es creada con amor y dedicación, pensando en el bienestar y el crecimiento de
              los más pequeños.
              ¡Únete a nosotros y descubre un mundo de posibilidades para el aprendizaje y el juego!
            </p>
            <ul className="sci">
              <li><a href="#"><FontAwesomeIcon icon={faFacebookSquare} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a></li>
            </ul>
          </div>
          <div className="sec atajos">
            <h2>Atajos</h2>
            <ul>
              <li><a href="#">Quienes Somos</a></li>
              <li><a href="#">Términos & condiciones</a></li>
              <li><a href="#">Política de privacidad</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>
          <div className="sec atajos">
            <h2>Productos</h2>
            <ul>
              <li><a href="#">Muebles personalizados</a></li>
              <li><a href="#">Muebles</a></li>
              <li><a href="#">Juegos Montessori</a></li>
              <li><a href="#">Por mayor</a></li>
            </ul>
          </div>
          <div className="sec contacto">
            <h2>Contacto</h2>
            <ul className="info">
              <li>
                <span><FontAwesomeIcon icon={faMapMarker} /></span>
                <span>Mendiolaza, Córdoba-Argentina</span>
              </li>
              <li>
                <span><FontAwesomeIcon icon={faPhone} /></span>
                <p><a href="tel:+543515555555">+54 3515555555</a><br />
                  <a href="tel:+543515555555">+54 3515555555</a>
                </p>
              </li>
              <li>
                <span><FontAwesomeIcon icon={faEnvelope} /></span>
                <p><a href="mailto:cururu@gmail.com">cururu@gmail.com</a></p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="copyrightsec">
        <p>&copy; Agus - Noe - Patri. Todos los derechos reservados</p>
      </div>
    </>
  );
};

export default Footer;
