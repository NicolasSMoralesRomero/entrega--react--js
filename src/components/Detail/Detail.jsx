import { Figure, Container, Row, Col } from 'react-bootstrap';
import ItemCount from "../ItemCount/ItemCount";

function Detail ({detail}) {
    return (
        <Container>
        <Row>
          <Col xs={12} md={6}>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={detail.imagen}
              />
            </Figure>
          </Col>
          <Col xs={12} md={6}>
            <Figure>
              <Figure.Caption>
                <h2>Titulo: {detail.titulo}</h2>
                <h4>Descripción: {detail.descripcion}</h4>
                <h4>Precio: ${detail.precio}</h4>
                <ItemCount />
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
      </Container>
                
        
    )
}
export default Detail;


