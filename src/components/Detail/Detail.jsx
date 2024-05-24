import { Figure, Container, Row, Col } from 'react-bootstrap';
import ItemCount from "../ItemCount/ItemCount";
import Button from 'react-bootstrap/Button';

function Detail ({detail}) {
    return (
        <Container className="mt-5">
        <Row>
          <Col xs={12} md={6}>
            <Figure>
              <Figure.Image
                width={300}
                height={220}
                alt="{detail.titulo}"
                src={detail.imagen}
              />
            </Figure>
          </Col>
          <Col xs={12} md={6}>
            <Figure>
              <Figure.Caption>
                <h2 className="mt-2">Titulo: {detail.titulo}</h2>
                <h4 className="mt-3">Descripción: {detail.descripcion}</h4>
                <h4 className="mt-3">Precio: ${detail.precio}</h4>
                <ItemCount />
                <div className="text-center">
                <Button variant="primary" className="mt-2">Agregar al carrito</Button>
                </div>
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
      </Container>
                
        
    )
}
export default Detail;


