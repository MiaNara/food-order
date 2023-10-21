import { useState, createContext, useEffect } from "react";

const CartContext = createContext();


const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    useEffect(() => {
        let total = 0;
        cart.forEach((item) => {
            total += item.amount;
        });
        setTotalItems(total);
    }, [cart]);
    const addToCart = (product) => {
        let newCart;
        const indexInCart = cart.findIndex((item) => item.id === product.id);
        if (indexInCart > -1) {
            newCart = [...cart];
            newCart[indexInCart].amount += product.amount;
        }
        else {
            newCart = [...cart, product];
        }
        setCart(newCart);
    };

    const removeFromCart = (product) => {
        setCart(cart.filter((item) => item.id !== product.id));
    };

    return (
        <CartContext.Provider value={{ cart, totalItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };