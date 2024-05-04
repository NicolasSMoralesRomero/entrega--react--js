import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import ItemListCointainer from './components/ItemListCointainer/ItemListCointainer.jsx'

function App() {

  return (
    <>
     <Navbar/>
     <ItemListCointainer greeting={"Bienvenido a la Tienda Nico"}/>
    </>
  )
}

export default App
