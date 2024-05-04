import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';

function Navbar() {
    return <div>
        <nav className="navbar">
            <p>Tienda de Nico</p>
            <CartWidget/> 
            <ul ClassName="items">
                <li>Inicio</li>
                <li>Productos</li>
                
            </ul>
            
        </nav>
        
    </div>

}

export default Navbar;