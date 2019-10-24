import React from "react"
import styled from "@emotion/styled"
import smoothscroll from "smoothscroll-polyfill"
import { margin, maxWidth } from "../../utils/sizes"
import { primary } from "../../utils/colors"
import { backToTop } from "../../utils/backToTop"

smoothscroll.polyfill()

export const Footer = () => (
  <FooterWrapper>
    <ToTop href="#top" onClick={backToTop}>
      ↑ Back to the Top.
    </ToTop>
    <Copyright>
      {"© CURR_YEAR Blake Tarter".replace(
        /(CURR_YEAR)/,
        `${new Date().getFullYear()}`,
      )}
    </Copyright>
  </FooterWrapper>
)

const FooterWrapper = styled("section")`
  margin: 0 auto;
  padding: ${margin}px;
  max-width: ${maxWidth}px;
`

const Copyright = styled("p")`
  margin: 0;
  padding: 0;
  color: var(--font-color);
`

const ToTop = styled("a")`
  display: inline-block;
  margin-bottom: ${margin}px;
  text-decoration: none;
  color: ${primary};
`
