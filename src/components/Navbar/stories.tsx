import React from "react"
import { Navbar } from "."
import { ThemeProvider } from "../../utils/theme"
import { GlobalStyles } from "../GlobalStyles"

export default { title: "Navbar", component: Navbar }

export const lightMode = () => <Navbar />
export const darkMode = () => (
  <ThemeProvider defaultMode="dark" persist={false}>
    <GlobalStyles />
    <Navbar />
  </ThemeProvider>
)
