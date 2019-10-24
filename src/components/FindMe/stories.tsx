import React from "react"
import { FindMe } from "."
import { ThemeProvider } from "../../utils/theme"
import { GlobalStyles } from "../GlobalStyles"

export default { title: "FindMe", component: FindMe }

export const lightMode = () => <FindMe />
export const darkMode = () => (
  <ThemeProvider defaultMode="dark" persist={false}>
    <GlobalStyles />
    <FindMe />
  </ThemeProvider>
)
