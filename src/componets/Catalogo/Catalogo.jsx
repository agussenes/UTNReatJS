import React, {useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import TarjetaProductos from './TarjetaProductos';
import './Catalogo.css';

const Catalogo = () => {

    const [productos, setProductos] = useState([]);

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 15;
  
    useEffect(() => {
        
      const fetchData = async () => {
        try {
          const response = await fetch('/data/products.json');
          const data = await response.json();
          setProductos(data);
        } catch (error) {
          console.error('Error al cargar los datos:', error);
        }
      };
      fetchData();
    }, []);

    const handlePageClick = (event) => {
      setCurrentPage(event.selected);
    };
  
    const offset = currentPage * itemsPerPage;
    const currentItems = productos.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(productos.length / itemsPerPage);
  
    return (
      
      <section className='seccionCatalogo'>
        <div className='topCatalogo'>
          <h2>Catálogo de Productos</h2>
        </div>
        <div className='contenedorCatalogo'>
          {currentItems.map((producto) => (
            <TarjetaProductos key={producto.id} producto={producto} />
          ))}
        


        <ReactPaginate
          previousLabel={'Anterior'}
          nextLabel={'Próximo'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />

      </div>

      </section>


    );
  };
  


  export default Catalogo;
