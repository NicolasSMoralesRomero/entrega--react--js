import { Figure, Container, Row, Col } from 'react-bootstrap';
import ItemCount from "../ItemCount/ItemCount";
import Button from 'react-bootstrap/Button';
import { useContext, useState } from 'react';
import CartContext from '../../context/cart/CartContext';

function Detail ({product}) {

  const [count, setCount] = useState(1);

    const {cart,addItem} = useContext(CartContext)
    
    const addItemCart = () => {
      addItem({...product,cuantity:count})


    }

    return (
        <Container className="mt-5">
        <Row>
          <Col xs={12} md={6}>
            <Figure>
              <Figure.Image
                width={300}
                height={220}
                alt="{product.title}"
                src={product.image}
              />
            </Figure>
          </Col>
          <Col xs={12} md={6}>
            <Figure>
              <Figure.Caption>
                <h2 className="mt-2">Titulo: {product.title}</h2>
                <p className="mt-3">Descripción: {product.description}</p>
                <p>Stock: {product.stock}</p>
                <p className="mt-3">Precio: ${product.price}</p>
                <ItemCount count={count} handleCount={setCount} stock={product.stock} />
                <div className="text-center">
                <Button onClick={addItemCart} variant="primary" className="mt-2">Agregar al carrito</Button>
                </div>
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
      </Container>
                
        
    )
}
export default Detail;


