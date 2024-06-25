import { useContext } from 'react';
import CartContext from '../../context/cart/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function CartWidget() {
    const {totalQuantityCart} = useContext(CartContext)

    return <div>
               <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />{totalQuantityCart}
            </div>

}

export default CartWidget;