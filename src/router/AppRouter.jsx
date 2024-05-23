import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import ItemListCointainer from "../components/ItemListCointainer/ItemListCointainer";
import Navbar from "../components/Navbar/NavBar";
import ItemDetailContainer from "../components/ItemDetailContainer.jsx/ItemDetailContainer";


  function AppRouter() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={< ItemListCointainer greeting={"Bienvenido a la tienda Nico"} />} />
          <Route path="/category/:id" element={< ItemListCointainer greeting={"Bienvenido a la tienda Nico"} />}/>
          <Route path="/item/:id" element={< ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
    );
  }

  export default AppRouter;