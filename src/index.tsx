import React from "react"
import ReactDOM from "react-dom"
import { App } from "./components/App"
import { ThemeProvider } from "./utils/theme"
import { GlobalStyles } from "./components/GlobalStyles"

ReactDOM.render(
  <ThemeProvider>
    <GlobalStyles />
    <App />
  </ThemeProvider>,
  document.getElementById("root"),
)
