import React, { useContext } from "react"
import styled from "@emotion/styled"
import { ThemeContext } from "../../utils/theme"
import { margin } from "../../utils/sizes"

export const ThemeModeSwitcher = () => {
  const { mode, setMode } = useContext(ThemeContext)

  return (
    <Container>
      <ThemeModeButton
        active={mode === "light"}
        onClick={() => setMode("light")}
      >
        <SunSVG fill={mode === "light"} />
      </ThemeModeButton>
      <ThemeModeButton active={mode === "dark"} onClick={() => setMode("dark")}>
        <MoonSVG fill={mode === "dark"} />
      </ThemeModeButton>
    </Container>
  )
}

const Container = styled("div")`
  display: flex;
  background: var(--secondary-background-color);
  border-radius: 30px;
  padding: 2px;
  margin-right: ${margin}px;
`

const ThemeModeButton = styled("div")<{ active: boolean }>`
  color: var(--font-color);
  height: 30px;
  width: 30px;
  border-radius: 100%;
  cursor: pointer;
  ${props => (props.active ? "background: var(--background-color);" : null)}
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-size: 20px;
`

const ThemeLightSun = styled("svg")`
  width: 60%;
`
const ThemeDarkMoon = styled("svg")`
  width: 40%;
`

const SunSVG = ({ fill }: { fill?: boolean }) => (
  <ThemeLightSun xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
    <g>
      <g>
        <circle
          stroke="currentColor"
          strokeWidth="2px"
          fill={fill ? "currentColor" : "transparent"}
          cx="19.45"
          cy="19.24"
          r="11.68"
        />
        <line
          stroke="currentColor"
          strokeWidth="2px"
          fill="transparent"
          x1="19.45"
          y1="6.02"
          x2="19.45"
        />
        <line
          stroke="currentColor"
          strokeWidth="2px"
          fill="transparent"
          x1="19.45"
          y1="38.9"
          x2="19.45"
          y2="32.88"
        />
        <line
          stroke="currentColor"
          strokeWidth="2px"
          fill="transparent"
          x1="32.88"
          y1="19.3"
          x2="38.9"
          y2="19.3"
        />
        <line
          stroke="currentColor"
          strokeWidth="2px"
          fill="transparent"
          y1="19.3"
          x2="6.02"
          y2="19.3"
        />
        <line
          stroke="currentColor"
          strokeWidth="2px"
          fill="transparent"
          x1="29.42"
          y1="9.8"
          x2="33.68"
          y2="5.55"
        />
        <line
          stroke="currentColor"
          strokeWidth="2px"
          fill="transparent"
          x1="6.17"
          y1="33.06"
          x2="10.43"
          y2="28.8"
        />
        <line
          stroke="currentColor"
          strokeWidth="2px"
          fill="transparent"
          x1="9.95"
          y1="9.33"
          x2="5.7"
          y2="5.08"
        />
        <line
          stroke="currentColor"
          strokeWidth="2px"
          fill="transparent"
          x1="33.21"
          y1="32.59"
          x2="28.95"
          y2="28.33"
        />
      </g>
    </g>
  </ThemeLightSun>
)

const MoonSVG = ({ fill }: { fill?: boolean }) => (
  <ThemeDarkMoon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.26 24.37">
    <g>
      <g>
        <path
          stroke="currentColor"
          strokeWidth="1.2px"
          fill={fill ? "currentColor" : "transparent"}
          d="M6.08.5a11.67,11.67,0,0,0-4.66,1A11.7,11.7,0,0,1,9.55,12.6a11.67,11.67,0,0,1-7,10.71A11.68,11.68,0,1,0,6.08.5Z"
        />
      </g>
    </g>
  </ThemeDarkMoon>
)
