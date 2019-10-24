import React from "react"
import { Hero } from "."
import { ThemeProvider } from "../../utils/theme"
import { GlobalStyles } from "../GlobalStyles"

export default { title: "Hero", component: Hero }

export const lightMode = () => <Hero />
export const darkMode = () => (
  <ThemeProvider defaultMode="dark" persist={false}>
    <GlobalStyles />
    <Hero />
  </ThemeProvider>
)
