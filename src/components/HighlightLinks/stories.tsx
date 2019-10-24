import React from "react"
import { HighlightLinks } from "."
import { ThemeProvider } from "../../utils/theme"
import { GlobalStyles } from "../GlobalStyles"

export default { title: "HighlightLinks", component: HighlightLinks }

export const lightMode = () => (
  <HighlightLinks>
    Testing text [Testing link](https://example.com/)
  </HighlightLinks>
)
export const darkMode = () => (
  <ThemeProvider defaultMode="dark" persist={false}>
    <GlobalStyles />
    <HighlightLinks>
      Testing text [Testing link](https://example.com/)
    </HighlightLinks>
  </ThemeProvider>
)
