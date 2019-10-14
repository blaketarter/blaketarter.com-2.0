import React from "react"
import { AboutMe } from "."
import { render } from "@testing-library/react"

describe("AboutMe", () => {
  it("renders", async () => {
    // Arrange
    const { findByText } = render(<AboutMe />)

    // Act
    // Assert
    await findByText("About Me.")
  })
})
