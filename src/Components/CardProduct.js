import styled from "styled-components";
import { useLocation } from 'react-router-dom';
import AddProductToCart from "./AddProductToCart";

const Card = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: transparent;
    background-color: #fff;
    padding: 16px;
    border-radius: 2rem;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
`;
const ImgWrapper = styled.div`
    width: 100%;
    height: 200px;
    overflow: hidden;
    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;


export default function CardProduct(data) {

    const location = useLocation();

    return (
        <Card>
            <ImgWrapper>
                <img src={data.image} alt={data.title} />
            </ImgWrapper>
            <h2>{data.title}</h2>
            <p>In stock : <span>{data.quantity}</span></p>

            <p><span>{data.price}</span> €</p>
            {
                location.pathname.includes("singleProduct") &&
                    <AddProductToCart {...data} />
            }
            {
                !location.pathname.includes("singleProduct") &&
                    <a href={`/singleProduct/${data.id}`}>Voir le produit</a>
            }
        </Card>
    )
}