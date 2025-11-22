import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {

    const { cart, deleteProductId, totalPrice,deleteCart} = useContext (CartContext);
    
    if(cart.length === 0 ){
        return(
            <div>
                <h2>No hay porductos en el caerito</h2>
                <Link to="/"> Volve al incio</Link>
            </div>
        )
    }
    
    return (
        <div>

            {
                cart.map((productCart)=> (
                    <div key={productCart.id}>
                        <img src={productCart.image} alt="" />
                        <p>{productCart.name}</p>
                        <p>precio c/u: {productCart.price}</p>
                        <p>cantidad: {productCart.quantity}</p>
                        <p>precio parcial: {productCart.price * productCart.quantity}</p>
                        <button onClick={() => deleteProductId(productCart.id)}>Eliminar</button>
                    </div>
                )) 
            }
            <div className="info-cart">
            <p className="text-infor-cart">  Precio Total : {totalPrice}</p>
            <Link className="button-continue-cart" to="/checkout"> Continuar con mi compra</Link>
            <button onClick={deleteCart}>Vaciar Carrito</button>
            </div>
        </div>
    )
};

export default Cart;