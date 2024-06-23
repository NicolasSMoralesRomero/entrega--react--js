import { useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import ItemCart from "../ItemCart/ItemCart"

function ItemCartContainer () {
    const {cart} = useContext(CartContext)
    
    return (
        <div>
            {cart.map(item => <ItemCart key={item.id} item={item}/>)}
        </div>
    )
}

export default ItemCartContainer;