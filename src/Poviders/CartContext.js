import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext()

export function CartProvider({children}) {
    const [cart, setCart] = useState(() => {
        // Récupérer l'état du panier du stockage local lors de l'initialisation
        const localCart = window.localStorage.getItem('cart');
        return localCart ? JSON.parse(localCart) : [];
    })

    useEffect(() => {
        // Stocker l'état du panier dans le stockage local chaque fois qu'il change
        window.localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item) => {
        setCart([...cart, item])
    }
    const removeFromCart = (itemId) => {
        setCart(cart.filter(product => product.id !== itemId))
    }
    const resetCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, resetCart}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext)
}