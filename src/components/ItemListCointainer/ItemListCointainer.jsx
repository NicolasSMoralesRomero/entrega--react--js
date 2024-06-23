import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';


const ItemListCointainer = ({greeting}) => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        (async ()=>{
        const db = getFirestore();
        const docsRef = collection(db, "products");
        const querySnapshop = await getDocs(docsRef)
        setProducts(querySnapshop.docs.map(doc => ({id:doc.id,...doc.data()})))
        })()

    },[])

    return (
        <div>
             <h1>{greeting}</h1>
            {products.map(product => <ItemList key={product.id} product={product}/>)}
            
        </div>
)
} 

export default ItemListCointainer;

/*
<div>
             <h1>{greeting}</h1>
             <ItemList items={items}/>
            
        </div>
        */