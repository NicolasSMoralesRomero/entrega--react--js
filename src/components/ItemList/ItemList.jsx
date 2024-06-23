import Item from '../Item/Item';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ItemList ({ product }) {
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

/* 
<div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 justify-content-center">
                {items.map(item => (
                    <div key={item.id} className="col mb-4">
                        <Item item={item} />
                    </div>
                ))}
            </div>
        </div> 
*/
export default ItemList;

