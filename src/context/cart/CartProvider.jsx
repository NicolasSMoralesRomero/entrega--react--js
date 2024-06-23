import CartContext from "./CartContext";
import { useState } from "react";

const CartProvider = ({children}) => {
    const [cart,setCart] = useState([])

    const addItem = (item) => {
        setCart(cart => ([...cart,item]))
    }

    return (
       <CartContext.Provider value={{cart,addItem}}>
        {children}
       </CartContext.Provider>
    )
}

export default CartProvider;