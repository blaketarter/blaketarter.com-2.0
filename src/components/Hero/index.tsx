import React from "react"
import styled from "@emotion/styled"
import smoothscroll from "smoothscroll-polyfill"
import {
  heroHeight,
  margin,
  maxWidth,
  smallUpQuery,
  mobileSizeMod,
  darkModeQuery,
} from "../../globals/sizes"
import { primary, primaryDark, black, white } from "../../globals/colors"
import { heroTitle, sectionTitle } from "../../globals/fonts"
import { Gems } from "../Gems"

smoothscroll.polyfill()

interface Props {
  title: string
  subtitle: string
}

export const Hero = ({ title, subtitle }: Props) => (
  <HeroWrapper>
    <Polygon />
    <ClipWrapper>
      <Gems />
      <Center>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Center>
    </ClipWrapper>
  </HeroWrapper>
)

const HeroWrapper = styled("section")`
  height: ${heroHeight}vh;
  position: relative;
  width: 100%;
  width: 100vw;
  overflow: hidden;
`

const ClipWrapper = styled("div")`
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #f7c284;
  position: relative;
  clip-path: polygon(100% 0, 100% 0, 100% 93%, 0 100%, 0 0);
  -webkit-clip-path: polygon(100% 0, 100% 0, 100% 93%, 0 100%, 0 0);

  ${darkModeQuery} {
    background-color: #19191d;
  }
`

const Center = styled("div")`
  margin: 0 auto;
  position: relative;
  width: 100%;
  padding: 0 ${margin}px;
  max-width: ${maxWidth}px;
  pointer-events: none;
`

const Title = styled("h1")`
  color: ${black};
  font-size: ${heroTitle * mobileSizeMod}px;

  ${smallUpQuery} {
    font-size: ${heroTitle}px;
  }

  ${darkModeQuery} {
    color: ${white};
  }
`

const Subtitle = styled("p")`
  color: ${black};
  font-size: ${sectionTitle * mobileSizeMod}px;

  ${smallUpQuery} {
    font-size: ${sectionTitle}px;
  }

  ${darkModeQuery} {
    color: ${white};
  }
`

const Polygon = styled("div")`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: ${primary};
  background: linear-gradient(to right, ${primaryDark} 0%, ${primary} 100%);
  transform: translateX(-5vw) rotate(1deg);
  transform-origin: bottom right;

  ${darkModeQuery} {
    opacity: 0.5;
  }
`
