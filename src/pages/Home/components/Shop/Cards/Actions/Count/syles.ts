import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    gap: 4px;
    background: ${(props) => props.theme['base-button']};
    border-radius: 6px;

    input[type=number]{
        text-align: center;
        padding: 4px;
        color: ${(props) => props.theme['base-title']};
        max-width: 28px;
        border: none;
        background: none;

        &::-webkit-inner-spin-button{
            -webkit-appearance: none;
        }
    }

    button {
        cursor: pointer;
        background: none;
        color: ${(props) => props.theme['purple']};

        &:hover{
            color: ${(props) => props.theme['purple-dark']};
        }
    }
`