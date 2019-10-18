import React from "react"
import styled from "@emotion/styled"
import { Navbar } from "../Navbar"
import { Hero } from "../Hero"
import { AboutMe } from "../AboutMe"
import { MyWork } from "../MyWork"
import { FindMe } from "../FindMe"
import { Footer } from "../Footer"
import "../../vendor/normalize.css"
import { darkModeQuery } from "../../utils/sizes"
import { darkBackground, white, black } from "../../utils/colors"
import { GlobalStyles } from "../GlobalStyles"

export const App = () => (
  <>
    <GlobalStyles />
    <Container>
      <Navbar />
      <Hero />
      <AboutMe />
      <MyWork />
      <FindMe />
      <Footer />
    </Container>
  </>
)

const Container = styled("div")`
  height: 100%;
  width: 100%;
  max-width: 100%;
  font-family: var(--font-family);
  color: ${black};

  ${darkModeQuery} {
    background: ${darkBackground};
    color: ${white};
  }
`
