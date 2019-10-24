import React from "react"
import { NavBarLink } from "."
import { ThemeProvider } from "../../utils/theme"
import { GlobalStyles } from "../GlobalStyles"

export default { title: "NavBarLink", component: NavBarLink }

export const lightMode = () => (
  <NavBarLink href="https://example.com/" text="Example Link" />
)
export const darkMode = () => (
  <ThemeProvider defaultMode="dark" persist={false}>
    <GlobalStyles />
    <NavBarLink href="https://example.com/" text="Example Link" />
  </ThemeProvider>
)
