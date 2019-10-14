import React from "react"
import { HighlightLinks } from "."
import { render } from "@testing-library/react"

describe("HighlightLinks", () => {
  it("renders", async () => {
    // Arrange
    const { findByText } = render(
      <HighlightLinks>
        Testing text [Testing link](https://example.com/)
      </HighlightLinks>,
    )

    // Act
    // Assert
    await findByText("Testing text")
    const link = await findByText("Testing link")
    expect(link).toHaveProperty("href", "https://example.com/")
  })
})
