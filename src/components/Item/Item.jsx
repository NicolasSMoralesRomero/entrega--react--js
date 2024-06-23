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
                        <Card.Title>Titulo: {item.title}</Card.Title>
                        <Card.Text>Categoria: {item.category}</Card.Text>
                        <Card.Text>Precio: ${item.price}</Card.Text>
                        <Button variant="primary" as={Link} to={`/item/${item.id}`}>Ver más</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

/* 
<div>
            <div className="card-container">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.imagen} />
                    <Card.Body>
                        <Card.Title>Titulo: {item.title}</Card.Title>
                        <Card.Text>Categoria: {item.category}</Card.Text>
                        <Card.Text>Precio: ${item.price}</Card.Text>
                        <Button variant="primary" as={Link} to={`/item/${item.id}`}>Ver más</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
*/

export default Item;
