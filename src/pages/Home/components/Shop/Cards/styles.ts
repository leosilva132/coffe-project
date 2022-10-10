import styled from "styled-components";


export const CardContainer = styled.div`
    width: 100%;
    max-width: 256px;
    height: 310px;
    margin-top: 2.12rem;
    background: ${(props) => props.theme['base-card']};

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1.5rem 1.25rem;
    border-radius: 6px 36px;

    &>div {
        position: relative;
        top: -36px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img {
        position: relative;
        top: -48px;
    }

    h3 {
        font-family: 'Baloo 2', 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
    }

`

export const Tags = styled.span`
    position: relative;
    margin-bottom: 1rem;
    padding: 4px 8px;
    border-radius: 100px;

    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    font-size: 0.6rem;
    font-weight: bold;
`

export const Description = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.87rem;
    text-align: center;
    color: ${(props)=> props.theme['base-label']};
    margin-bottom: 2.06rem;
`

export const Buy = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    p {
        color: ${(props) => props.theme['base-text']};
        font-family: 'Roboto', sans-serif;
        font-size: 0.87rem;

        span {
            font-family: 'Baloo 2', cursive;
            font-weight: 800;
            font-size: 1.5rem;
        }
    }

    input {
        padding: 8px;
        border: none;
        background: ${(props) => props.theme['base-input']};
        width: 72px;
        height: 38px;
        border-radius: 6px;
    }

    button{
        width: 38px;
        height: 38px;
        display: flex;
        align-items: center;
        cursor: pointer;
        background: ${(props) => props.theme['purple-dark']};
        padding: 8px;
        border-radius: 6px;
    }
`
