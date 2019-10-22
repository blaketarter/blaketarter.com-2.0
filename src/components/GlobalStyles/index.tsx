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
import { darkModeQuery } from "../../utils/sizes"
import {
  darkBackground,
  white,
  darkLighterBackground,
  black,
  secondary,
} from "../../utils/colors"

interface ThemeColors {
  "--background-color": string
  "--font-color": string
  "--hero-background-color": string
  "--polygon-opacity": number
  "--secondary-background-color": string
  "--logo-font-color": string
}

export const GlobalStyles = () => {
  const isDarkMode = matchMedia(darkModeQuery.replace("@media ", "")).matches
  console.log(isDarkMode)

  const themeColors: ThemeColors = isDarkMode
    ? {
        "--background-color": darkBackground,
        "--font-color": white,
        "--hero-background-color": "#19191d",
        "--polygon-opacity": 0.5,
        "--secondary-background-color": darkLighterBackground,
        "--logo-font-color": white,
      }
    : {
        "--background-color": white,
        "--font-color": black,
        "--hero-background-color": "#f7c284",
        "--polygon-opacity": 1,
        "--secondary-background-color": secondary,
        "--logo-font-color": black,
      }

  console.log(themeColors)

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
          ...themeColors,
        },
      }}
    />
  )
}
