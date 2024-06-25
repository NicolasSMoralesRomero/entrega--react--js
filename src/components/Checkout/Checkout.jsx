import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

function Checkout({ completeOrder }) {
  const [nameBuyer, setNameBuyer] = useState("");
  const [telBuyer, setTelBuyer] = useState("");
  const [emailBuyer, setEmailBuyer] = useState("");

  const handleCompleteOrder = async (e) => {
    e.preventDefault();
    const buyer = {
      name: nameBuyer,
      tel: telBuyer,
      email: emailBuyer,
    };
    await completeOrder(buyer);
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
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