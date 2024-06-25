import { useState, useContext } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import CartContext from "../../context/cart/CartContext";

function Checkout({ completeOrder }) {
  const { cart, totalPriceCart } = useContext(CartContext);
  const [nameBuyer, setNameBuyer] = useState("");
  const [telBuyer, setTelBuyer] = useState("");
  const [emailBuyer, setEmailBuyer] = useState("");

  const handleCompleteOrder = async (e) => {
    e.preventDefault();
    const buyer = {
      name: nameBuyer,
      tel: telBuyer,
      email: emailBuyer,
      cart: cart,
      totalPrice: totalPriceCart,
    };
    await completeOrder(buyer);
  };

  return (
    <Container className="mt-4">
      <Row>
        {/* Mostrar resumen del carrito */}
        <Col xs={12} md={6}>
          <h3>Resumen del Carrito:</h3>
          {cart.map((item) => (
            <div key={item.id}>
                <img 
                    src={item.image}
                    alt={item.title}
                    className="mr-3"
                    style={{ maxWidth: "70px" }} />
              <p>{item.title} - Cantidad: {item.quantity}</p>
              <p>Precio por unidad: ${item.price}</p>
              <hr />
            </div>
          ))}
          <p className="mb-3 total">Total: ${totalPriceCart}</p>
        </Col>

        {/* Formulario de compra */}
        <Col xs={12} md={6}>
          <h3>Completa tu compra:</h3>
          <Form onSubmit={(e) => handleCompleteOrder(e)}>
            <Form.Group controlId="formName">
              <Form.Label>Nombre Completo</Form.Label>
              <Form.Control
                type="text"
                value={nameBuyer}
                onChange={(e) => setNameBuyer(e.target.value)}
                placeholder="Ingrese su nombre completo"
                required
                className="form-control-sm"
              />
            </Form.Group>

            <Form.Group controlId="formTel">
              <Form.Label>Número Telefónico</Form.Label>
              <Form.Control
                type="tel"
                value={telBuyer}
                onChange={(e) => setTelBuyer(e.target.value)}
                placeholder="Ingrese su número telefónico"
                required
                className="form-control-sm"
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={emailBuyer}
                onChange={(e) => setEmailBuyer(e.target.value)}
                placeholder="Ingrese su email"
                className="form-control-sm"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="btn-sm mt-3">
              Finalizar Compra
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Checkout;