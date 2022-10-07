import styled from "styled-components";

export const HeaderContainer = styled.header`
    margin: 0 auto;
    max-width: 1120px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2rem 0;

    div {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

`

export const ButtonLocation = styled.button`
    display: flex;
    align-items: center;
    padding: 10px;
    gap: 4px;

    border-radius: 6px;
    background-color: ${(props)=> props.theme['purple-light']};
    color: ${(props)=> props.theme['purple-dark']};

`

export const ButtonCart = styled.button`
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 6px;

    background-color: ${(props)=> props.theme['yellow-light']};
    color: ${(props)=> props.theme['yellow-dark']};

    cursor: pointer;

`
