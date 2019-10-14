import React from "react"
import { SkillsSwapper } from "."

export default { title: "SkillsSwapper", component: SkillsSwapper }

export const renders = () => (
  <SkillsSwapper copy="Test:" skills={["skill1", "skill2", "skill3"]} />
)
