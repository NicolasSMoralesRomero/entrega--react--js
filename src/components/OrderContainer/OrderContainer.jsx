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
        <div className="container">
          <h1 className="text-center mt-4 mb-4">Ordenes pasadas</h1>
          <div className="row">
            {orders.map((order) => (
              <div key={order.id} className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">{order.id}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

}
export default OrderContainer