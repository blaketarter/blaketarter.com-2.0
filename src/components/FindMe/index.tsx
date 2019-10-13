import React from "react"
import styled from "@emotion/styled"
import {
  margin,
  maxWidth,
  mediumUpQuery,
  darkModeQuery,
} from "../../globals/sizes"
import { black, white } from "../../globals/colors"
import { sectionTitle, largeCopy, bodyCopy } from "../../globals/fonts"

interface Props {
  title: string
  links: Array<{
    label: string
    link: string
    linkText: string | null
  }>
}

export const FindMe = ({ title, links }: Props) => (
  <MoreAboutMeWrapper id="find-me">
    <Title>{title}</Title>
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
  font-size: ${sectionTitle}px;
`

const Label = styled("label")`
  font-size: ${largeCopy}px;
  font-weight: 700;
  display: block;
  margin: ${margin}px 0;
`

const Link = styled("a")`
  font-size: ${bodyCopy}px;
  font-weight: normal;
  color: ${black};
  display: block;
  width: 100%;
  word-break: break-all;

  ${mediumUpQuery} {
    margin-left: ${margin / 3}px;
    display: initial;
  }

  ${darkModeQuery} {
    color: ${white};
  }
`
