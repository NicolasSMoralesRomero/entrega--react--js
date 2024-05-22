import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item ({ item }) {
    return (
        <Card key={item.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.imagen} />
                    <Card.Body>
                        <Card.Title>Titulo: {item.titulo}</Card.Title>
                        <Card.Text>Categoria: {item.categoria}</Card.Text>
                        <Card.Text>Precio: ${item.precio}</Card.Text>
                        <Button variant="primary">Ver más</Button>
                    </Card.Body>
            </Card>
    )
}

export default Item;