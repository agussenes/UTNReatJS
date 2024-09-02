import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar.jsx";
import QuienesSomos from "./QuienesSomos.jsx";
import ContainerAccion from "./ContainerAccion.jsx";
import ProdcutosDestacados from "./ProdcutosDestacados.jsx"
import Footer from "./Footer.jsx";
import ApiData from "./ApiData.jsx"
// import Catalogo from "./Catalogo.jsx"
import FormularioCrearProducto from "./FormularioCrearProducto.jsx"

function App() {
  return (
    <>
    <NavBar/>
    <QuienesSomos/>
    <ContainerAccion/>
    <ProdcutosDestacados/>
    <ApiData/>
    {/* <Catalogo/> */}
    <FormularioCrearProducto/>
    <Footer/>

    </>
  )
}

export default App;
