import styled from "styled-components";

export const ShopContainer = styled.section`
    margin:  2rem auto 3.37rem auto;
    max-width: 1120px;

    h2 {
        font-size: 2rem;
        font-family: 'Baloo 2', sans-serif;
        font-weight: 800;
    }

    &>div  {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 2rem;
        max-width: 1120px;
    }
`