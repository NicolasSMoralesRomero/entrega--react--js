import { useContext } from "react";
import CartContext from "../../context/cart/CartContext";

function ItemCart ({item}) {
    const {deleteItemCart} = useContext(CartContext)
    
    return (
        <div>
            <img src={item.iamge} />
            <h5>{item.title}</h5>
            <span>{item.quantity}</span>
            <button onClick={()=>deleteItemCart(item.id)}>Eliminar</button>

        </div>
    )
}

export default ItemCart;