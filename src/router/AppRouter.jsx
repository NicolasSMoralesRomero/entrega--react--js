import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import ItemListCointainer from "../components/ItemListCointainer/ItemListCointainer";
import Navbar from "../components/Navbar/NavBar";


  function AppRouter() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={< ItemListCointainer greeting={"Bienvenido a la tienda Nico"} />} />
          <Route path="/category/:id" element={< ItemListCointainer greeting={"Bienvenido a la tienda Nico"} />}/>
        </Routes>
      </BrowserRouter>
    );
  }

  export default AppRouter;