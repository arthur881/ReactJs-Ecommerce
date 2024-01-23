import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    /* height: fit-content; */
`;


export default function CartCount({ cartCount, increment, decrement }) {

    return (
        <Wrapper>
            <button onClick={decrement}>
                -
            </button>
            <p>{cartCount}</p>
            <button onClick={increment}>
                +
            </button>
        </Wrapper>
    )
}