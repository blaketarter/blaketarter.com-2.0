import React from "react"
import { NavBarLink } from "."
import { render } from "@testing-library/react"

describe("NavBarLink", () => {
  it("renders", async () => {
    // Arrange
    const { findByText } = render(
      <NavBarLink href="https://example.com/" text="Example Link" />,
    )

    // Act
    // Assert
    const link = await findByText("Example Link")
    expect(link).toHaveProperty("href", "https://example.com/")
  })
})
