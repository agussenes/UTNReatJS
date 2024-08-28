import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar.jsx";
import QuienesSomos from "./QuienesSomos.jsx";
import ContainerAccion from "./ContainerAccion.jsx";
import ProdcutosDestacados from "./ProdcutosDestacados.jsx"
import Footer from "./Footer.jsx";
import ApiData from "./ApiData.jsx"

function App() {
  return (
    <>
    <NavBar/>
    <QuienesSomos/>
    <ContainerAccion/>
    <ProdcutosDestacados/>
    <ApiData/>
    <Footer/>

    </>
  )
}

export default App;
