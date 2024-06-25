import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import ItemListCointainer from "../components/ItemListCointainer/ItemListCointainer";
import Navbar from "../components/Navbar/NavBar";
import ItemDetailContainer from "../components/ItemDetailContainer.jsx/ItemDetailContainer";
import ItemCartContainer from "../components/ItemCartContainer/ItemCartContainer";
import CartProvider from "../context/cart/CartProvider";
import OrderContainer from "../components/OrderContainer/OrderContainer";
import CheckoutContainer from "../components/CheckouContainer/CheckoutContainer";


  function AppRouter() {
    return (
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={< ItemListCointainer greeting={"Bienvenido a la tienda Nico"} />} />
            <Route path="/category/:id" element={< ItemListCointainer greeting={"Bienvenido a la tienda Nico"} />}/>
            <Route path="/item/:id" element={< ItemDetailContainer />}/>
            <Route path="/cart" element={< ItemCartContainer />}/>
            <Route path="/orders" element={< OrderContainer />}/>
            <Route path="/checkout" element={< CheckoutContainer />}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    );
  }

  export default AppRouter;