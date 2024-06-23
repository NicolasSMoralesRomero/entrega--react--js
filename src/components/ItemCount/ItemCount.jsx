import { Container, Row, Col, Button } from 'react-bootstrap';


function ItemCount ({count, handleCount, stock}) {
    const handleIncrement = () => {
        if(count < stock){
            handleCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 0) {
            handleCount(count - 1);
        }
    };

    return (
        <Container>
            <Row>
                <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                    <Button variant="primary" onClick={handleDecrement}>-</Button>
                    <p className="m-0 mr-3">{count}</p>
                    <Button variant="primary" className="mr-3" onClick={handleIncrement}>+</Button>                 
                </Col>
            </Row>
        </Container>
    );
}

export default ItemCount;