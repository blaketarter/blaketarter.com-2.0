import React from "react"
import { App } from "."
import { ThemeProvider } from "../../utils/theme"
import { GlobalStyles } from "../GlobalStyles"

export default { title: "App", component: App }

export const lightMode = () => <App />
export const darkMode = () => (
  <ThemeProvider defaultMode="dark" persist={false}>
    <GlobalStyles />
    <App />
  </ThemeProvider>
)
