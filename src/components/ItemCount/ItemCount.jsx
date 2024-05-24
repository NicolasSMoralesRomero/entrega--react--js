import { Container, Row, Col, Button } from 'react-bootstrap';
import React, { useState } from 'react';

function ItemCount () {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <Container>
            <Row>
                <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                    <Button variant="primary" className="mr-3" onClick={handleIncrement}>+</Button>
                    <p className="m-0 mr-3">{count}</p>
                    <Button variant="primary" onClick={handleDecrement}>-</Button>                   
                </Col>
            </Row>
        </Container>
    );
}

export default ItemCount;