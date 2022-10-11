import styled from "styled-components";

export const ShopContainer = styled.section`
    margin: 2rem auto;
    max-width: 1120px;

    h2 {
        font-size: 2rem;
        font-family: 'Baloo 2', sans-serif;
        font-weight: 800;
    }

    &>div  {
        display: grid;
        grid-template-columns: repeat(4, 256px);
        gap: 2rem;
        max-width: 1120px;
    }
`