import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import SpinnerCarga from "../Spinner/SpinnerCarga";


function ItemDetailContainer() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        (async ()=>{
            setLoading(true)
            const db = getFirestore();
            const docRef = doc(db, "products",id);
            const docSnap = await getDoc(docRef)
            setProduct({id:docSnap.id,...docSnap.data()})
            setLoading(false)
        })()
    },[])

    if (loading) {
        return <SpinnerCarga/>;
    }

    return <ItemDetail product={product} />;


    
}

export default ItemDetailContainer;