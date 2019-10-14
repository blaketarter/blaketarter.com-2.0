import React from "react"
import ReactDOM from "react-dom"
import { Gems } from "."

describe("Gems", () => {
  it("renders", () => {
    // Arrange
    const div = document.createElement("div")

    // Act
    // Assert
    ReactDOM.render(<Gems />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
