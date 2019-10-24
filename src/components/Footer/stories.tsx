import React from "react"
import { Footer } from "."
import { ThemeProvider } from "../../utils/theme"
import { GlobalStyles } from "../GlobalStyles"

export default { title: "Footer", component: Footer }

export const lightMode = () => <Footer />
export const darkMode = () => (
  <ThemeProvider defaultMode="dark" persist={false}>
    <GlobalStyles />
    <Footer />
  </ThemeProvider>
)
