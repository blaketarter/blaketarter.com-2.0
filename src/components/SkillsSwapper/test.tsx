import React from "react"
import ReactDOM from "react-dom"
import { SkillsSwapper } from "."

describe("SkillsSwapper", () => {
  it("renders", () => {
    // Arrange
    const div = document.createElement("div")

    // Act
    // Assert
    ReactDOM.render(<SkillsSwapper copy="Test" skills={["foo", "bar"]} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
