import { GlobalStyles } from "./styles/themes/global"
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from "./styles/themes/default"
export function App() {

  return (
     <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <h1>Hello World</h1>
    </ThemeProvider>

  )
}

