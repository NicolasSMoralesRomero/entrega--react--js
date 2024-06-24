import { useContext } from 'react';
import './CartWidget.css';
import CartContext from '../../context/cart/CartContext';

function CartWidget() {
    const {totalQuantityCart} = useContext(CartContext)

    return <div>
                Carrito {totalQuantityCart}
            </div>

}

export default CartWidget;