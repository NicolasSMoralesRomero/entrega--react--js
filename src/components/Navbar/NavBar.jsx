import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to='/'>Tienda de Nico</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto"> 
              <Nav.Link as={Link} to='/'>Todos los productos</Nav.Link>
              <Nav.Link as={Link} to='/category/ciencia-ficcion'>Ciencia Ficción</Nav.Link>
              <Nav.Link as={Link} to='/category/historico'>Histórico</Nav.Link>
              <Nav.Link as={Link} to='/category/fantasia'>Fantasía</Nav.Link>
              <Nav.Link as={Link} to='/category/misterio'>Misterio</Nav.Link>
              <CartWidget/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavBar;

