import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Item({ item }) {
    return (
        <div>
            <div className="card-container">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.imagen} />
                    <Card.Body>
                        <Card.Title>Titulo: {item.titulo}</Card.Title>
                        <Card.Text>Categoria: {item.categoria}</Card.Text>
                        <Card.Text>Precio: ${item.precio}</Card.Text>
                        <Button variant="primary" as={Link} to={`/item/${item.id}`}>Ver más</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Item;
