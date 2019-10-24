import React from "react"
import { ThemeModeSwitcher } from "."
import { ThemeProvider } from "../../utils/theme"
import { GlobalStyles } from "../GlobalStyles"

export default {
  title: "ThemeModeSwitcher",
  component: ThemeModeSwitcher,
}

export const lightMode = () => <ThemeModeSwitcher />
export const darkMode = () => (
  <ThemeProvider defaultMode="dark" persist={false}>
    <GlobalStyles />
    <ThemeModeSwitcher />
  </ThemeProvider>
)
