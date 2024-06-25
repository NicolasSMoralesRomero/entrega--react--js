import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';
import CustomSelect from '../CustomSelect/CustomSelect';


const ItemListCointainer = ({greeting}) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([])

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
        const db = getFirestore();
        const docsRef = collection(db, "products");
        const querySnapshop = await getDocs(docsRef)
        setProducts(querySnapshop.docs.map(doc => ({id:doc.id,...doc.data()})))
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

    return (
        <>
            <div>
                <CustomSelect 
                handleCategorySelected={handleCategorySelected}
                categories={categories} />
            </div>
            <div>
                <h1>{greeting}</h1>
                {products.map(product => <ItemList key={product.id} product={product}/>)}
                
            </div>
        </>
)
} 

export default ItemListCointainer;

/*
<div>
             <h1>{greeting}</h1>
             <ItemList items={items}/>
            
        </div>
        */