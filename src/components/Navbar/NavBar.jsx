import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import "./NavBar.css"


function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to='/' className="me-auto"><img className='icono' src="/icono-libro.avif" alt='Icono de tienda Nico'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto"> 
            <Nav.Link as={Link} to='/'>Todos los productos</Nav.Link>
            <Nav.Link as={Link} to='/orders'>Ordenes pasadas</Nav.Link>
            <Nav.Link as={Link} to='/cart'><CartWidget /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

