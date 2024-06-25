import Item from '../Item/Item';
import { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import CustomSelect from '../CustomSelect/CustomSelect';
import SpinnerCarga from "../Spinner/SpinnerCarga"


function ItemList () {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        (async ()=>{
        const db = getFirestore();
        const docsRef = collection(db, "categories");
        const querySnapshop = await getDocs(docsRef)
        setCategories(querySnapshop.docs.map(doc => ({id:doc.id,...doc.data()})))
        })()

    },[])

    useEffect(() =>{
        (async ()=>{
        setLoading(true)
        const db = getFirestore();
        const docsRef = collection(db, "products");
        const querySnapshop = await getDocs(docsRef)
        setProducts(querySnapshop.docs.map(doc => ({id:doc.id,...doc.data()})))
        setLoading(false)
        })()

    },[])

    const handleCategorySelected = (value) => {
        (async ()=>{
            const db = getFirestore();
            const docsRef = collection(db, "products");
            if(value === "Todos"){
                const docsRef = collection(db, "products");
                const querySnapshop = await getDocs(docsRef)
                setProducts(querySnapshop.docs.map(doc => ({id:doc.id,...doc.data()})))
                return
            }
            const q = query(docsRef,where("category", "==", value))
            const querySnapshop = await getDocs(q)
            setProducts(querySnapshop.docs.map(doc => ({id:doc.id,...doc.data()})))
            })()
    }

    if (loading) {
        return <SpinnerCarga/>;
    }

    return (
        <>
        <div>
                <CustomSelect 
                handleCategorySelected={handleCategorySelected}
                categories={categories} />
            </div>

            <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 justify-content-center">
                {products.map(product => (
                    <div key={product.id} className="col mb-4">
                        <Item product={product} />
                    </div>
                ))}
            </div>
        </div> 
        
        </>
       
    )
}

export default ItemList;



