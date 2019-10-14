import React from "react"
import ReactDOM from "react-dom"
import { App } from "."

describe("App", () => {
  it("renders", () => {
    // Arrange
    const div = document.createElement("div")

    // Act
    ReactDOM.render(<App />, div)

    // Assert
    expect(div.querySelector("#top")).not.toBeNull()
    expect(div.querySelector("#about-me")).not.toBeNull()
    expect(div.querySelector("#my-work")).not.toBeNull()
    expect(div.querySelector("#find-me")).not.toBeNull()

    ReactDOM.unmountComponentAtNode(div)
  })
})
