import React from "react"
import { MyWork } from "."
import { ThemeProvider } from "../../utils/theme"
import { GlobalStyles } from "../GlobalStyles"

export default { title: "MyWork", component: MyWork }

export const lightMode = () => <MyWork />
export const darkMode = () => (
  <ThemeProvider defaultMode="dark" persist={false}>
    <GlobalStyles />
    <MyWork />
  </ThemeProvider>
)
