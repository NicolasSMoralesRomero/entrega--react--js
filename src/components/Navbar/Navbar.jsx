import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';

function Navbar() {
    return <div>
        <nav className="navbar">
            <h2>Tienda de Nico</h2>
            
            <div ClassName="items">
                <ul>
                    <li><a href='#'>Inicio</a></li>
                    <li><a href='#'>Productos</a></li>
                    <CartWidget/> 
                </ul>
            </div>
            
        </nav>
        
    </div>

}

export default Navbar;