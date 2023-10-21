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

    const removeFromCart = (id) => {
        const indexInCart = cart.findIndex((item) => item.id === id);
        if (cart[indexInCart].amount == 1) {
            setCart(cart.filter((item) => item.id !== id));
        } else {
            const newCart = [...cart];
            newCart[indexInCart].amount -= 1;
            setCart(newCart);

        }
    };
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price * curr.amount, 0).toFixed(2);



    return (
        <CartContext.Provider value={{ cart, setCart, totalItems, addToCart, removeFromCart, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };