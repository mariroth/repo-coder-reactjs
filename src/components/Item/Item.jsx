
import { Link  } from 'react-router-dom';
import './Item.css';

const Item = ({ product }) => {
    return (
        <li>
            <div className="item">
                <img className="img-item" src={product.image} alt="" /> 
            </div>
            
            <div className="text-item">
                <p className="title-item">{product.name}</p>
                <p className="price-item">${product.price}</p>
                <Link to={"/detail/"+product.id} className="button-item">MÁS INFORMACIÓN</Link>
            </div>
        </li>

    )
}

export default Item;