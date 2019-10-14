import React from "react"
import { FindMe, links } from "."
import { render } from "@testing-library/react"

describe("FindMe", () => {
  it("renders", async () => {
    // Arrange
    const { findByText } = render(<FindMe />)

    // Act
    // Assert
    await findByText("Find Me on the Internet.")

    for (const link of links) {
      await findByText(link.label)
      const linkEl = await findByText(link.link)
      expect(linkEl).toHaveProperty("href", link.link)
    }
  })
})
