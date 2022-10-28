import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './styles/themes/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { Router } from './../Router'
import { CartContextProvider } from './contexts/CartContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <CartContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CartContextProvider>
    </ThemeProvider>
  )
}
