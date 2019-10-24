import React from "react"
import { Gems } from "."
import { ThemeProvider } from "../../utils/theme"
import { GlobalStyles } from "../GlobalStyles"

export default { title: "Gems", component: Gems }

export const lightMode = () => <Gems />
export const darkMode = () => (
  <ThemeProvider defaultMode="dark" persist={false}>
    <GlobalStyles />
    <Gems />
  </ThemeProvider>
)
