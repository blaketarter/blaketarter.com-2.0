import React from "react"
import styled from "@emotion/styled"
import { margin, maxWidth, mediumUpQuery } from "../../utils/sizes"

export const links = [
  {
    label: "Github",
    link: "https://github.com/blaketarter",
    linkText: null,
  },
  {
    label: "Codepen",
    link: "https://codepen.io/blaketarter/",
    linkText: null,
  },
  {
    label: "NPM",
    link: "https://www.npmjs.com/~blaketarter",
    linkText: null,
  },
  {
    label: "Linkedin",
    link: "https://www.linkedin.com/in/blaketarter",
    linkText: null,
  },
  {
    label: "Twitter",
    link: "https://twitter.com/itsblaketarter",
    linkText: null,
  },
  {
    label: "Medium",
    link: "https://medium.com/@itsblaketarter",
    linkText: null,
  },
]

export const FindMe = () => (
  <MoreAboutMeWrapper id="find-me">
    <Title>Find Me on the Internet.</Title>
    {links.map((linkData, index) => (
      <Label key={index}>
        {linkData.label}{" "}
        <Link href={linkData.link}>
          {linkData.linkText ? linkData.linkText : linkData.link}
        </Link>
      </Label>
    ))}
  </MoreAboutMeWrapper>
)

const MoreAboutMeWrapper = styled("footer")`
  margin: ${3 * margin}px auto;
  padding: 0 ${margin}px;
  max-width: ${maxWidth}px;
`

const Title = styled("h2")`
  font-size: var(--section-title-font-size);
`

const Label = styled("label")`
  font-size: var(--large-copy-font-size);
  font-weight: 700;
  display: block;
  margin: ${margin}px 0;
`

const Link = styled("a")`
  font-size: var(--body-copy-font-size);
  font-weight: normal;
  color: var(--font-color);
  display: block;
  width: 100%;
  word-break: break-all;

  ${mediumUpQuery} {
    margin-left: ${margin / 3}px;
    display: initial;
  }
`
