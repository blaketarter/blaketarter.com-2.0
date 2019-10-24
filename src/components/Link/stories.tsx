import React from "react"
import { Link } from "."
import { ThemeProvider } from "../../utils/theme"
import { GlobalStyles } from "../GlobalStyles"

export default { title: "Link", component: Link }

export const lightMode = () => (
  <Link href="https://example.com/">Example Link</Link>
)
export const darkMode = () => (
  <ThemeProvider defaultMode="dark" persist={false}>
    <GlobalStyles />
    <Link href="https://example.com/">Example Link</Link>
  </ThemeProvider>
)
