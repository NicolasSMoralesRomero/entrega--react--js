import ItemList from '../ItemList/ItemList';



const ItemListCointainer = ({greeting}) => {


    return (
        <>
            
            <div>
                <h1>{greeting}</h1>
                <ItemList/>
                
            </div>
        </>
)
} 

export default ItemListCointainer;
