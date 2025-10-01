
import './ItemListContainer.css';

const ItemListContainer = ({greeting}) => {
    return (
        <div className="container">
            <h2>{greeting}</h2>
        </div>
    )
}

export default ItemListContainer;