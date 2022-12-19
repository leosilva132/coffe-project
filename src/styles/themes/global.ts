import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${(props) => props.theme.background};
    }

    body, input, text-area, button {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        -webkit-font-smoothing:  antialiased;
    }

    h1, h2 {
        font-family: 'Baloo 2', cursive;
        font-weight: 800;
        color: ${(props) => props.theme['base-title']};
    }

    h4 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        line-height: 130%;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']}
    }

    button {
        background: none;
        border: none;
    }
    
    a {
        text-decoration: none;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
    -moz-appearance: textfield;
    }


`
