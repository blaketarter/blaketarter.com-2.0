import React from "react"
import { Global } from "@emotion/core"
import {
  fontFamily,
  baseFontSize,
  bodyCopyLineHeight,
  bodyCopyFontSize,
  largeCopyFontSize,
  heroTitleFontSize,
  heroTitleMobileFontSize,
  sectionTitleFontSize,
  sectionTitleMobileFontSize,
} from "../../utils/fonts"

export const GlobalStyles = () => {
  return (
    <Global
      styles={{
        ":root": {
          "--font-family": fontFamily,
          "--body-copy-line-height": bodyCopyLineHeight,
          "--body-copy-font-size": bodyCopyFontSize,
          "--large-copy-font-size": largeCopyFontSize,
          "--hero-title-font-size": heroTitleFontSize,
          "--hero-title-mobile-font-size": heroTitleMobileFontSize,
          "--section-title-font-size": sectionTitleFontSize,
          "--section-title-mobile-font-size": sectionTitleMobileFontSize,
          fontSize: baseFontSize,
        },
      }}
    />
  )
}
