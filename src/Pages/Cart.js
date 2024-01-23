import { useCart } from "../Poviders/CartContext";
import Header from "../Components/Header";
import CartList from "../Components/CartList";

export default function() {
    let { cart, resetCart } = useCart()

    return (
        <div>
            <Header />
            <button onClick={() => console.log(cart)}>
                log cart
            </button>
            <button onClick={resetCart}>
                clear cart
            </button>
            <h1>Panier</h1>
            <CartList />
        </div>
    );
}