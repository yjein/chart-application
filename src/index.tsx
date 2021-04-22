//React
import React from "react"
import ReactDOM from "react-dom"
//styled-components
import { ThemeProvider } from "styled-components"
import { theme } from "./theme"
import GlobalStyle from "./theme/GlobalStyle"
//my-app
import App from "./App"
// import App from "./components/Pages/mainPage"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
