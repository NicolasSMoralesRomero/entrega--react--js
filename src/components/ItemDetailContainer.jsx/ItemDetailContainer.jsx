import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail.jsx/ItemDetail"

function ItemDetailContainer() {
    const [detail, setDetail] = useState(null);
    const { id } = useParams();

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
}

export default ItemDetailContainer;