import React, {
  useRef,
  useEffect,
  useContext,
  createContext,
  FC,
  useState,
  useCallback,
} from "react"
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
} from "./fonts"
import {
  darkBackground,
  white,
  darkLighterBackground,
  black,
  secondary,
  darkHeroBackground,
  heroBackground,
} from "./colors"

export type themeMode = "dark" | "light"

interface ThemeColors {
  "--background-color": string
  "--font-color": string
  "--hero-background-color": string
  "--polygon-opacity": number
  "--secondary-background-color": string
  "--logo-font-color": string
  "--featured-item-background-color": string
}

export interface ThemeState {
  mode: themeMode
  setMode: (mode: themeMode) => unknown
  rootCss: typeof staticThemeCssVariables & ThemeColors
}

const staticThemeCssVariables = {
  fontSize: baseFontSize,
  "--font-family": fontFamily,
  "--body-copy-line-height": bodyCopyLineHeight,
  "--body-copy-font-size": bodyCopyFontSize,
  "--large-copy-font-size": largeCopyFontSize,
  "--hero-title-font-size": heroTitleFontSize,
  "--hero-title-mobile-font-size": heroTitleMobileFontSize,
  "--section-title-font-size": sectionTitleFontSize,
  "--section-title-mobile-font-size": sectionTitleMobileFontSize,
}

const darkModeThemeCssVariables: ThemeColors = {
  "--background-color": darkBackground,
  "--font-color": white,
  "--hero-background-color": darkHeroBackground,
  "--polygon-opacity": 0.5,
  "--secondary-background-color": darkLighterBackground,
  "--logo-font-color": white,
  "--featured-item-background-color": darkBackground,
}
const lightModeThemeCssVariables: ThemeColors = {
  "--background-color": white,
  "--font-color": black,
  "--hero-background-color": heroBackground,
  "--polygon-opacity": 1,
  "--secondary-background-color": secondary,
  "--logo-font-color": black,
  "--featured-item-background-color": white,
}

const darkModeTheme = {
  ...staticThemeCssVariables,
  ...darkModeThemeCssVariables,
}

const lightModeTheme = {
  ...staticThemeCssVariables,
  ...lightModeThemeCssVariables,
}

export const darkModeMatchMedia = matchMedia("(prefers-color-scheme: dark)")

export const ThemeContext = createContext<ThemeState>({
  mode: darkModeMatchMedia.matches ? "dark" : "light",
  setMode: () => undefined,
  rootCss: lightModeTheme,
})

export const ThemeProvider: FC<{
  defaultMode?: themeMode
  persist?: boolean
}> = ({ children, defaultMode, persist = true }) => {
  const persistedMode = useRef<themeMode | null>(
    defaultMode
      ? defaultMode
      : persist
      ? (localStorage.getItem("mode") as themeMode | null)
      : null,
  )
  const [mode, setMode] = useState<themeMode>(
    persistedMode.current
      ? persistedMode.current
      : darkModeMatchMedia.matches
      ? "dark"
      : "light",
  )

  const setModeWithPersist = useCallback(
    (mode: themeMode) => {
      if (persist) {
        localStorage.setItem("mode", mode)
      }
      setMode(mode)
    },
    [persist],
  )

  useEffect(() => {
    if (darkModeMatchMedia.addEventListener) {
      darkModeMatchMedia.addEventListener("change", () =>
        setModeWithPersist(darkModeMatchMedia.matches ? "dark" : "light"),
      )
    }
  }, [setModeWithPersist])

  return (
    <ThemeContext.Provider
      value={{
        mode,
        setMode: setModeWithPersist,
        rootCss: mode === "dark" ? darkModeTheme : lightModeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  return useContext(ThemeContext)
}
