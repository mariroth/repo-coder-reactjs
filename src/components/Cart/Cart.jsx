import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";   

const Cart = () => {
    const { cart, deleteProductId, totalPrice, deleteCart } = useContext(CartContext);
    
    if (cart.length === 0) {
        return (
            <div className="cart-empty">
                <h2>No hay productos en el carrito</h2>
                <Link className="cart-back-home" to="/">Volver al inicio</Link>
            </div>
        );
    }
    
    return (
        <div className="cart-container">

            {cart.map((productCart) => (
                <div className="cart-item" key={productCart.id}>
                    <img src={productCart.image} alt={productCart.name} />
                    <div className="cart-item-info">
                        <p>{productCart.name}</p>
                        <p>Precio c/u: ${productCart.price}</p>
                        <p>Cantidad: {productCart.quantity}</p>
                        <p>Subtotal: ${productCart.price * productCart.quantity}</p>
                    </div>
                    <button 
                        className="cart-delete-btn"
                        onClick={() => deleteProductId(productCart.id)}
                    >
                        Eliminar
                    </button>
                </div>
            ))}

            <div className="cart-summary">
                <p className="cart-total">Precio Total: ${totalPrice()}</p>
                
                <Link className="cart-checkout-btn" to="/checkout">
                    Continuar con mi compra
                </Link>

                <button className="cart-clear-btn" onClick={deleteCart}>
                    Vaciar Carrito
                </button>
            </div>
        </div>
    );
};

export default Cart;
