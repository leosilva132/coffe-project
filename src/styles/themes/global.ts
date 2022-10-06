import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, input, text-area, button {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        -webkit-font-smoothing:  antialiased;
    }

    h1 {
        font-family: 'Baloo 2', cursive;
        font-weight: 800;
        color: ${(props) => props.theme['base-title']};
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']}
    }

`