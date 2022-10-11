import { BrowserRouter } from "react-router-dom"
import { GlobalStyles } from "./styles/themes/global"
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from "./styles/themes/default"
import { Router } from './../Router'

export function App() {

  return (
     <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

