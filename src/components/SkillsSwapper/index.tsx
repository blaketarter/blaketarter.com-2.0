import React, { useState, useEffect, useCallback } from "react"
import styled from "@emotion/styled"
import { margin } from "../../utils/sizes"
import { bodyCopy } from "../../utils/fonts"
import { shuffle } from "../../utils/shuffle"

interface Props {
  skills: string[]
  copy: string
}

const keystrokeLength = 50

const wordLength = 2000

export const SkillsSwapper = ({ copy, skills }: Props) => {
  const [{ skillsRandomized, currentSkill }, setState] = useState(() => {
    const skillsRandomized = shuffle(skills)
    return {
      skillsRandomized,
      currentSkill: skillsRandomized[0],
    }
  })

  const deleteLetterOrWord = useCallback(() => {
    const mode = skillsRandomized[0].length ? "letter" : "word"
    switch (mode) {
      case "word":
        setTimeout(() => {
          const firstWord = skillsRandomized[1]

          setState({
            skillsRandomized: [
              firstWord,
              ...skillsRandomized.slice(2),
              currentSkill,
            ],
            currentSkill: firstWord,
          })
        }, wordLength)
        break
      case "letter":
        setTimeout(() => {
          const firstWord = skillsRandomized[0].substring(1)

          setState({
            skillsRandomized: [firstWord, ...skillsRandomized.slice(1)],
            currentSkill,
          })
        }, keystrokeLength)
    }
  }, [skillsRandomized, currentSkill])

  useEffect(() => {
    window.requestAnimationFrame(deleteLetterOrWord)
  }, [deleteLetterOrWord])

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
  font-size: ${bodyCopy * 1.5}px;
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
