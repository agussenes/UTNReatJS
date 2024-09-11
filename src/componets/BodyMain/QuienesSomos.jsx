import React from 'react';
import carousel1 from '../../imagenes/carousel.jpg';    
import carousel2 from '../../imagenes/encastres.jpg';
import carousel3 from '../../imagenes/rompecabezamaderaia.jpg';
import carousel4 from '../../imagenes/carouseldomino.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const QuienesSomos = () => {
  return (
    <>
    <section1>
      <div className="containerBio">
        <h2>Nuestro actuar está determinado por nuestros valores</h2>
        <ul>
          <li><strong>Pasión por la Educación:</strong> En Cururu, creemos que la educación es el pilar fundamental del desarrollo infantil. Nos apasiona crear materiales educativos que fomenten el aprendizaje autónomo y significativo.</li>
          <li><strong>Diseño Innovador:</strong> Nos comprometemos a diseñar productos únicos y creativos que inspiren a los niños a explorar y descubrir el mundo que los rodea. La innovación es una constante en nuestro proceso de diseño.</li>
          <li><strong>Calidad y Sostenibilidad:</strong> Cada pieza de Cururu es fabricada con materiales de alta calidad y procesos sostenibles. Valoramos el uso de recursos renovables y la producción responsable para cuidar del medio ambiente y ofrecer productos duraderos.</li>
          <li><strong>Amor y Dedicación:</strong> Ponemos el corazón en cada uno de nuestros productos. Creemos en la importancia del cuidado y la dedicación en la creación de materiales que acompañen el crecimiento de los niños.</li>
          <li><strong>Fomento de la Creatividad:</strong> Nos esforzamos por crear juguetes y muebles que estimulen la imaginación y la creatividad de los niños, permitiéndoles expresarse libremente y desarrollar sus habilidades únicas.</li>
        </ul>
        <div className="container-fluid" id="contenedorCar">
        <div className="containerCarousel">
          <div id="carouselExampleFade" className="carousel slide carousel-fade">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={carousel1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={carousel2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={carousel3} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={carousel4} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      </div>

      
    </section1>
    </>
  );
}

export default QuienesSomos;
