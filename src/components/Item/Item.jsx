import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Item({ product }) {
    return (
        <div>
            <div className="card-container">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                        <Card.Title>Titulo: {product.title}</Card.Title>
                        <Card.Text>Categoria: {product.category}</Card.Text>
                        <Card.Text>Precio: ${product.price}</Card.Text>
                        <Button variant="primary" as={Link} to={`/item/${product.id}`}>Ver más</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Item;
