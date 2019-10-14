import React from "react"
import { Hero } from "."
import { render } from "@testing-library/react"

describe("Hero", () => {
  it("renders", async () => {
    // Arrange
    const { findByText } = render(<Hero />)

    // Act
    // Assert
    await findByText("Hi, I'm Blake Tarter.")
    await findByText("A Kansas City based web developer")
  })
})
