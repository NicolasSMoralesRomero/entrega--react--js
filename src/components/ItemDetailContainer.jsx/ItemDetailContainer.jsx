import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { doc, getDoc, getFirestore } from 'firebase/firestore';

function ItemDetailContainer() {
    const [detail, setDetail] = useState(null);
    const { id } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() =>{
        (async ()=>{
            const db = getFirestore();
            const docRef = doc(db, "products",id);
            const docSnap = await getDoc(docRef)
            setProduct({id:docSnap.id,...docSnap.data()})
        })()
    },[])

    if (!product) {
        return <div>Cargando...</div>;
    }

    return <ItemDetail product={product} />;


    
}

/* 
useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const response = await fetch('/data/productos.json');
                const data = await response.json();
                const selectedProduct = data.productos.find(product => product.id === parseInt(id));
                setDetail(selectedProduct);
            } catch (error) {
                console.error('Error fetching product detail:', error);
            }
        };

        fetchProductDetail();
    }, [id]);


    if (!detail) {
        return <div>Cargando...</div>;
    }

    return <ItemDetail detail={detail} />;
*/

export default ItemDetailContainer;