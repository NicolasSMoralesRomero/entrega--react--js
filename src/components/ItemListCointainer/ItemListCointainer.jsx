import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';


const ItemListCointainer = ({greeting}) => {
    const [items, setItems] = useState([])
    const { id } = useParams()


    useEffect(() => {
        const fetchData = async () => {
            try {
                let response;
                if (!id) {
                    await new Promise(resolve => setTimeout(resolve, 500));
                    response = await fetch('/data/productos.json');
                } else {
                    await new Promise(resolve => setTimeout(resolve, 500));
                    response = await fetch('/data/productos.json');
                }
                
                const data = await response.json();
                if (!id) {
                    setItems(data.productos);
                } else {
                    const filteredItems = data.productos.filter(item => item.categoria === id);
                    setItems(filteredItems);
                }
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };
    
        fetchData();
    }, [id]);

    return (
        <div>
             <h1>{greeting}</h1>
             <ItemList items={items}/>
            
        </div>
)
} 

export default ItemListCointainer;