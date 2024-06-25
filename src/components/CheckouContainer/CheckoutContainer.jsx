import { collection, getFirestore, addDoc } from "firebase/firestore"
import Checkout from "../Checkout/Checkout"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import CartContext from "../../context/cart/CartContext"
import Swal from 'sweetalert2'

    

    function CheckoutContainer() {

        const navigate = useNavigate()
        const {cart,totalPriceCart} = useContext(CartContext)
        const {clearCart} = useContext(CartContext)

        const completeOrder = async (buyer) => {
            const order = {
                buyer,
                items:cart,
                total:totalPriceCart,
            }
            
            const db = getFirestore()
            const docRef = collection(db,"orders")
            const result = await addDoc(docRef,order)
            /* cart.map(async item => {
                const product = await getProductById(item.id)
                const docRef = doc(db,"products",item.id)
                await updateDoc(docRef,{stock:product.stock - item.quantity})
            }) */
                clearCart()
                Swal.fire("El id de su compra es: " + result.id);
            navigate("/orders")
        }

    return <div>
               <Checkout completeOrder={completeOrder}/>
            </div>

}

export default CheckoutContainer