import React from "react"
import styled from "@emotion/styled"
import { Navbar } from "../Navbar"
import { Hero } from "../Hero"
import { AboutMe } from "../AboutMe"
import { MyWork } from "../MyWork"
import { FindMe } from "../FindMe"
import { Footer } from "../Footer"
import "../../vendor/normalize.css"
import { GlobalStyles } from "../GlobalStyles"
import { ThemeProvider } from "../../utils/theme"

export const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Container>
        <Navbar />
        <Hero />
        <AboutMe />
        <MyWork />
        <FindMe />
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

const Container = styled("div")`
  height: 100%;
  width: 100%;
  max-width: 100%;
  font-family: var(--font-family);
  color: var(--font-color);
  background: var(--background-color);
`
