import { createContext, useState, useEffect } from "react";

// creamos nuestro contectx
const CartContext = createContext ();

const CartProvider = ({ children}) => {
    const cartlocalStorage = JSON.parse(localStorage.getItem("cart-ecommerce"));
    const [cart, setCart] = useState (cartlocalStorage ? cartlocalStorage : [] );

    useEffect(()=> {
        localStorage.setItem("cart-ecommerce", JSON.stringify(cart));
    }, [cart])

    const addProduct = (newProduct) => {
        const indexProduct = cart.findIndex((productCart)=> productCart.id === newProduct.id);

        if(indexProduct === -1) {
            setCart( [...cart, newProduct ]);
        } else{
            const newCart = [...cart];
            newCart[indexProduct].quantity = newCart[indexProduct].quantity + newProduct.quantity;
            setCart(newCart);
        }
        
    } 

    const totalQuantity = () => {

        const quantity = cart.reduce ( (total, productCart ) => total + productCart.quantity, 0);
        return quantity;
    }

    const totalPrice = () => {

        const total = cart.reduce((total, productCart ) => total + (productCart.price * productCart.quantity), 0);
        return total;
    }
    
    const deleteProductId = (productId) => {
    const productFiltered = cart.filter((productCart) => productCart.id !== productId);
        setCart(productFiltered);
    }

    const deleteCart = () => {
        setCart([]);

    }


    return(
        <CartContext.Provider value={ { cart, addProduct, totalQuantity, totalPrice,deleteProductId, deleteCart }} >
            {children}
        </CartContext.Provider>

    )

};

export { CartContext, CartProvider};
