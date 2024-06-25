import ItemList from '../ItemList/ItemList';
import "./ItemListContainer.css"



const ItemListCointainer = ({greeting}) => {


    return (
        <>
            
            <div>
                <h1 className='titulo'>{greeting}</h1>
                <ItemList/>
                
            </div>
        </>
)
} 

export default ItemListCointainer;
