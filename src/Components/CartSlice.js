import { createSlice } from "@reduxjs/toolkit";
import { createContext, useState } from "react";

export const CartContext = createContext();

const cardSlice = createSlice({
    name: 'cart',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
    },
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + product.quantity }
                        : item
                );
            } else {
                return [...prevCart, product];
            }
        });
    };

    const updateQuantity = (id, quantity) => {
        console.log("Updating quantity", id, quantity);
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
            )
        );
    };


    return (
        <CartContext.Provider value={{ cart, addToCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const { increment, decrement } = cardSlice.actions;
export default cardSlice.reducer;


