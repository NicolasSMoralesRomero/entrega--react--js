import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand to='/' as={Link}>Tienda de Nico</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link to='/' as={Link}>Todos los productos</Nav.Link>
                <Nav.Link to='category/ciencia-ficcion' as={Link}>Ciencia Ficción</Nav.Link>
                <Nav.Link to='category/historico' as={Link}>Histórico</Nav.Link>
                <Nav.Link to='category/fantasia' as={Link}>Fantasía</Nav.Link>
                <Nav.Link to='category/misterio' as={Link}>Misterio</Nav.Link>
                <CartWidget/>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default NavBar;
