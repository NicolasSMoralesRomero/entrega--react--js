import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

function OrderContainer() {
    const [orders, setOrders] = useState([]);

    useEffect(() =>{
        (async ()=>{
        const db = getFirestore();
        const docsRef = collection(db, "orders");
        const querySnapshop = await getDocs(docsRef)
        setOrders(querySnapshop.docs.map(doc => ({id:doc.id,...doc.data()})))
        })()

    },[])

    return (
        <div>
            <h1>Ordenes pasadas</h1>
            {orders.map(order => <div key={order.id}><p>{order.id}</p></div>)}
            
        </div>
)

}
export default OrderContainer