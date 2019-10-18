import React from "react"
import styled from "@emotion/styled"
import { margin } from "../../utils/sizes"
import { useSkillsSwapper } from "../../utils/useSkillsSwapper"

interface Props {
  skills: string[]
  copy: string
}

export const SkillsSwapper = ({ copy, skills }: Props) => {
  const { skillsRandomized } = useSkillsSwapper(skills)

  const skillsList = skillsRandomized.map((skill, index) => (
    <SkillItem index={index} key={index} length={skill.length}>
      {skill}
    </SkillItem>
  ))

  return (
    <SkillsWrapper>
      <CopyWrapper>
        <FrontCopy>{copy}</FrontCopy>
        <SkillsListWrapper>{skillsList}</SkillsListWrapper>
      </CopyWrapper>
    </SkillsWrapper>
  )
}

const SkillsWrapper = styled("div")`
  margin: ${3 * margin}px 0;
`

const CopyWrapper = styled("div")`
  font-size: var(--large-copy-font-size);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

const FrontCopy = styled("span")`
  font-weight: 300;
`

const SkillsListWrapper = styled("ul")`
  margin: 0;
  padding: 0;
  display: inline-block;
  flex: 1;
  height: 30px;
  overflow: hidden;
`

const SkillItem = styled("li")<{ index: number; length: number }>`
  list-style: none;
  display: inline-block;
  margin-left: ${props => (props.length ? margin / 2 : 0)}px;
  font-weight: 700;
  opacity: ${props => 1 - 0.2 * props.index};
  transition: 0.2s ease opacity;
`
