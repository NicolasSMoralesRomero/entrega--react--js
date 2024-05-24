import Item from '../Item/Item';

function ItemList ({ items }) {
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 justify-content-center">
                {items.map(item => (
                    <div key={item.id} className="col mb-4">
                        <Item item={item} />
                    </div>
                ))}
            </div>
        </div>       
    )
}

export default ItemList;

