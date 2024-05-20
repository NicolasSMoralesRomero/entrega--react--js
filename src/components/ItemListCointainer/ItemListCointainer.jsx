import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ItemListCointainer = ({greeting}) => {
    const [items, setItems] = useState([])


    useEffect(() => {
        fetch('/data/productos.json')
            .then(res => res.json())
            .then(data => setItems(data.productos))
    }, [])

    return (
        <div>
            {items.map(item => (
                <Card key={item.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.imagen} />
                    <Card.Body>
                        <Card.Title>Titulo: {item.titulo}</Card.Title>
                        <Card.Text>Categoria: {item.categoria}</Card.Text>
                        <Card.Text>Precio: ${item.precio}</Card.Text>
                        <Button variant="primary">Ver más</Button>
                    </Card.Body>
            </Card>
            ))}

            <h1 className='titulo'>{greeting}</h1>
        </div>
)
} 

export default ItemListCointainer;