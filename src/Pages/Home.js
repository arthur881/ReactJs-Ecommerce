import Header from "../Components/Header";
import CardProduct from "../Components/CardProduct";
import styled from "styled-components";

import { useGetProductsQuery } from "../Services/API";

const ProductListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
`;

export default function () {

    let { data, isFetching } = useGetProductsQuery()

    return <div>
        <Header />
        <h1>  Home  </h1> 
        {
            isFetching ? <p>Loading</p> : <div>
            <br />
            Products Count: {data.length}
            <ProductListWrapper>
                <ProductList />
            </ProductListWrapper>
            </div>
        }
    </div>
}

function ProductList() {

    let { data, isFetching } = useGetProductsQuery()
    return data.map((product) => {
        return <CardProduct key={product.id} {...product}/>
    })

} 