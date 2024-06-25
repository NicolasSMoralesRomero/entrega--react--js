import { useState } from "react"

function Checkout({completeOrder}) {

    const [nameBuyer, setNameBuyer] = useState("");
    const [telBuyer, setTelBuyer] = useState("");
    const [emailBuyer, setEmailBuyer] = useState("");

    const handleCompleteOrder = async (e) => {
        e.preventDefault()
        const buyer = {
            name:nameBuyer,
            tel:telBuyer,
            email:emailBuyer
        }
        await completeOrder(buyer)
    }


    return <div>
               <form onSubmit={(e)=>handleCompleteOrder(e)}>
                <input type="text" value={nameBuyer} onChange={(e)=>setNameBuyer(e.target.value)} placeholder="Ingrese su nombre completo" required />
                <input type="number" value={telBuyer} onChange={(e)=>setTelBuyer(e.target.value)} placeholder="Ingrese su número telefonico"  required/>
                <input type="email" value={emailBuyer} onChange={(e)=>setEmailBuyer(e.target.value)} placeholder="Ingrese su email" />
                <button type="submit">Finalizar Compra</button>
               </form>
            </div>

}

export default Checkout