import carrito from "../../assets/img/carrito.png";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import './CartWidget.css';



const CartWidget = () => {

    const{ totalQuantity } = useContext (CartContext);
const quantity = totalQuantity();

    return (
        <Link to="/cart" className="carritoCompras">
            <img src={carrito} className="carrito" alt="" />
            <p>{quantity !== 0 && quantity}</p>
        </Link>
    )
}

export default CartWidget;