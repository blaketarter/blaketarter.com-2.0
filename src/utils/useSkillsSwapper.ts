import { useState, useCallback, useEffect } from "react"
import { shuffle } from "../utils/shuffle"

const keystrokeLength = 50
const wordLength = 2000

export const useSkillsSwapper = (
  skills: string[],
): { skillsRandomized: string[] } => {
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
    const id = window.requestAnimationFrame(
      process.env.NODE_ENV !== "test" ? deleteLetterOrWord : () => {},
    )

    return () => window.cancelAnimationFrame(id)
  }, [deleteLetterOrWord])

  return {
    skillsRandomized,
  }
}
