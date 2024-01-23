import styled from "styled-components";
import { useState } from "react";
import { useCart } from "../Poviders/CartContext";

const CartCountWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: fit-content;
`;



export default function AddProductToCart(product) {

    const [cartCount, setCartCount] = useState(1);
    let { addToCart, cart } = useCart()


    const handleAddToCart = () => {
        const productInCart = cart.find(item => item.product.id === product.id);
        if (productInCart) {
            console.log(`le produit etait deja dans le panier, nous en avons rejouter ${cartCount} de plus`);
            productInCart.quantity += cartCount;
        } else {
            console.log('le produit n\'etais pas dans le panier, il a ete ajouté');
            addToCart({product, quantity : cartCount});
        }
        setCartCount(1);
    };

    function decrement() {
        if (cartCount > 1) {
            setCartCount(a => a - 1);
        }
    }
    function increment() {
        setCartCount(a => a + 1);
    }

    return (
        <div>
            <CartCountWrapper>
                <button onClick={decrement}>
                    -
                </button>
                <p>{cartCount}</p>
                <button onClick={increment}>
                    +
                </button>
            </CartCountWrapper>
            <button onClick={handleAddToCart}>
                Add to cart ({cartCount*product.price}€)
            </button>
        </div>
    )
}