import styled from "styled-components";
import { useCart } from "../Poviders/CartContext";


const HeaderDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  background-color: #f5f5f5;
  padding: 10px 20px;
  & a {
    position: relative;
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
  & a:hover {
    text-decoration: underline;
  }
`;
const Pastille = styled.div`
  position: absolute;
  top: -10px;
  right: -14px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FF4754;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 9px;
`;
export default function Header() {
  let { cart } = useCart()
  return (
    <HeaderDiv>
      <a href="/">Home</a>
      <a href="/Cart">
        Cart
        {cart.length > 0 && <Pastille>{cart.length}</Pastille>}
      </a>

    </HeaderDiv>
  );
}