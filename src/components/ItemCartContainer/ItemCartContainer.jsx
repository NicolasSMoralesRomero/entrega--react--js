import { useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import ItemCart from "../ItemCart/ItemCart"
import { useNavigate } from "react-router-dom";
import EmptyItems from "../EmptyItems/EmptyItems";

function ItemCartContainer () {
    const {cart, totalPriceCart} = useContext(CartContext)
    const navigate = useNavigate()


    
    return (
        <div>
            {cart.length === 0 ?
            <EmptyItems message={"Tu carrito esta vacio"} />
            : 
            <>
            <div>
            {cart.map(item => <ItemCart key={item.id} item={item}/>)}
            </div>
            <div>
            <p>Total: ${totalPriceCart}</p>
            <button onClick={()=>navigate("/checkout")}>Finalizar compra</button>
            </div>
            </>

        }
        </div>
    )
}

export default ItemCartContainer;