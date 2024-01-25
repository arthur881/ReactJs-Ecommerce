import styled from "styled-components";
import { useCart } from "../Poviders/CartContext";


const ItemList = styled.div`
    width: 60%;
    display: grid;
    grid-template-columns: 0.3fr repeat(5, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 12px;
    justify-items: center;
    margin-bottom: 10px;
    background-color: #ebe8e8;
    padding: 10px;
    border-radius: 5px;

    & img {
        width: 100px;
    }
    & div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    & div:nth-child(2) {
        flex-direction: column;
        align-items: flex-start;
    }
    & div:nth-child(3) {
        align-items: center;
        gap: 10px;
    }
    & p {
        height: fit-content;
    }
`;

export default function CartList() {
    let { cart, removeFromCart } = useCart()
    const handleRMToCart = (productId) => {
        removeFromCart(productId);
    }
    
    return (
        <div>
            {cart.length === 0 && <p>Le panier est vide</p>}
            {cart.map((item, index) => (
                <ItemList key={index}>
                    <img src={item.product.image} alt={item.product.title}/>
                    <div>
                        <p>{item.product.title}</p>
                        <a href={`/singleProduct/${item.product.id}`}>Voir le produit</a>
                    </div>
                    <div>
                        <button>-</button>
                        <p>{item.quantity}</p>
                        <button>+</button>
                    </div>
                    <div>
                        <p>{item.product.price}€ each</p>
                    </div>
                    <div>
                        <p>{(item.quantity * item.product.price).toFixed(2)}€</p>
                    </div>
                    <div>
                    <button onClick={() => handleRMToCart(item.product.id)}>
                        Remove
                    </button>
                    </div>
                </ItemList>
            ))}
            <p>Total : {cart.reduce((acc, item) => acc + item.quantity * item.product.price, 0)}€</p>
        </div>
    )
}