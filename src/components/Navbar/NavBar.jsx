import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Tienda de Nico</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#">Productos</Nav.Link>
                <Nav.Link href="#">Ciencia Ficción</Nav.Link>
                <Nav.Link href="#">Histórico</Nav.Link>
                <Nav.Link href="#">Fantasía</Nav.Link>
                <Nav.Link href="#">Misterio</Nav.Link>
                <CartWidget/>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default NavBar;
