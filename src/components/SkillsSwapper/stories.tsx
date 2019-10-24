import React from "react"
import { SkillsSwapper } from "."
import { ThemeProvider } from "../../utils/theme"
import { GlobalStyles } from "../GlobalStyles"

export default { title: "SkillsSwapper", component: SkillsSwapper }

export const lightMode = () => (
  <SkillsSwapper copy="Test:" skills={["skill1", "skill2", "skill3"]} />
)
export const darkMode = () => (
  <ThemeProvider defaultMode="dark" persist={false}>
    <GlobalStyles />
    <SkillsSwapper copy="Test:" skills={["skill1", "skill2", "skill3"]} />
  </ThemeProvider>
)
