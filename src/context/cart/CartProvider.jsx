import CartContext from "./CartContext";
import { useEffect, useState } from "react";

const CartProvider = ({children}) => {
    const [cart,setCart] = useState([])
    const [totalPriceCart, setTotalPriceCart] = useState(0)
    const [totalQuantityCart, setTotalQuantityCart] = useState(0)

    useEffect(()=>{
        setTotalPriceCart(cart.reduce((acc, item) => acc + item.price * item.quantity, 0))
        setTotalQuantityCart(cart.reduce((acc, item) => acc + item.quantity, 0))
    },[cart])

    const addItemCart = (product) => {
        const itemExists = cart.some(item => item.id === product.id)
        if(itemExists){
          setCart(cart.map(item => {
                if(item.id == product.id){
                    return {
                        ...item,
                        quantity: item.quantity + product.quantity
                    }
                }
                return item
            }))
            return
        }
        setCart(cart => ([...cart,product]))
    }

    const deleteItemCart = (id) => {
        setCart(cart.filter(item => item.id != id))
    }

    const clearCart = () => {
        setCart([])
    }

    

    return (
       <CartContext.Provider value={{cart,totalPriceCart,addItemCart,deleteItemCart,clearCart,totalQuantityCart}}>
        {children}
       </CartContext.Provider>
    )
}

export default CartProvider;