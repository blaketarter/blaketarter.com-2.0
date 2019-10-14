import React from "react"
import styled from "@emotion/styled"
import { Navbar } from "../Navbar"
import { Hero } from "../Hero"
import { AboutMe } from "../AboutMe"
import { MyWork } from "../MyWork"
import { FindMe } from "../FindMe"
import { Footer } from "../Footer"
import { fontFamily } from "../../utils/fonts"
import "../../vendor/normalize.css"
import { darkModeQuery } from "../../utils/sizes"
import { darkBackground, white, black } from "../../utils/colors"

export const App = () => (
  <Container>
    <Navbar />
    <Hero />
    <AboutMe />
    <MyWork />
    <FindMe />
    <Footer />
  </Container>
)

const Container = styled("div")`
  height: 100%;
  width: 100%;
  max-width: 100%;
  font-family: ${fontFamily};
  color: ${black};

  ${darkModeQuery} {
    background: ${darkBackground};
    color: ${white};
  }
`
