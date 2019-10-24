import React from "react"
import styled from "@emotion/styled"
import { SkillsSwapper } from "../SkillsSwapper"
import { HighlightLinks } from "../HighlightLinks"
import { margin, maxWidth } from "../../utils/sizes"

const skills = [
  "React",
  "Redux",
  "TypeScript",
  "ReasonML",
  "React-Native",
  "Functional Programming",
  "GraphQL",
  "HTML5",
  "CSS3",
  "Git",
  "Node",
]

export const AboutMe = () => (
  <AboutMeWrapper id="about-me">
    <Title>About Me.</Title>
    <HighlightLinks>
      Blake is a Javascript developer with 3+ years of experience planning,
      creating, and maintaining websites and various application platforms. Some
      technologies that he uses on a regular basis are React, Redux, TypeScript,
      and Node. His projects include client and consumer facing websites, as
      well as react-native and hybrid applications. He has experience working in
      a team environment, exceeds in time management skills, and strives to
      remain on the cutting-edge of the front-end development scene.
    </HighlightLinks>
    <HighlightLinks>
      Currently Blake works at [Crema](https://www.crema.us/), a product agency
      that partners with funded startups and existing brands to create
      technology solutions and new digital ventures. He also does some freelance
      work in his spare time with [Midwestern
      Originals](https://www.midwesternoriginals.com/).
    </HighlightLinks>
    <SkillsSwapper copy="I know" skills={skills} />
  </AboutMeWrapper>
)

const AboutMeWrapper = styled("section")`
  margin: ${5 * margin}px auto;
  padding: 0 ${margin}px;
  max-width: ${maxWidth}px;
`

const Title = styled("h2")`
  font-size: var(--section-title-font-size);
`
