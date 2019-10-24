import React from "react"
import { AboutMe } from "."
import { ThemeProvider } from "../../utils/theme"
import { GlobalStyles } from "../GlobalStyles"

export default { title: "AboutMe", component: AboutMe }

export const lightMode = () => <AboutMe />
export const darkMode = () => (
  <ThemeProvider defaultMode="dark" persist={false}>
    <GlobalStyles />
    <AboutMe />
  </ThemeProvider>
)
