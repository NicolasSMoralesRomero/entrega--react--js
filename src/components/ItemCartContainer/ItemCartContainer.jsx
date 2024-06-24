import { useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import ItemCart from "../ItemCart/ItemCart"
import { addDoc, getFirestore, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function ItemCartContainer () {
    const {cart, totalPriceCart, clearCart} = useContext(CartContext)
    const navigate = useNavigate()

    const addOrder = async () => {

        const order = {
            buyer:{
                name:"Nicolás Morales",
                phone:"123456",
                email:"nico@gmail.com"
            },
            items:cart,
            total:totalPriceCart
        }

        const db = getFirestore();
        const docRef = collection(db, "orders")
        await addDoc(docRef,order)
        clearCart()
        navigate("/orders")
    }
    
    return (
        <div>
            {cart.map(item => <ItemCart key={item.id} item={item}/>)}
            <p>Total: ${totalPriceCart}</p>
            <button onClick={addOrder}>Finalizar compra</button>
        </div>
    )
}

export default ItemCartContainer;