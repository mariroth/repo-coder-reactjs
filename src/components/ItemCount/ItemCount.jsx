import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, addToCart }) => {
    const [count, setCount] = useState(1);

    const handleClickRestar = () => {
        if (count > 1) setCount(count - 1);
    };

    const handleClickSumar = () => {
        if (count < stock) setCount(count + 1);
    };

    return (
        <div className="itemcount-container">
            <div className="itemcount-controls">
                <button onClick={handleClickRestar}>-</button>
                <p>{count}</p>
                <button onClick={handleClickSumar}>+</button>
            </div>

            <button 
                className="itemcount-add"
                onClick={() => addToCart(count)}
            >
                Agregar al carrito
            </button>
        </div>
    );
};

export default ItemCount;
