import React from "react"
import { Link } from "."
import { render } from "@testing-library/react"

describe("Link", () => {
  it("renders", async () => {
    // Arrange
    const { findByText } = render(
      <Link href="https://example.com/">Example Link</Link>,
    )

    // Act
    // Assert
    const link = await findByText("Example Link")
    expect(link).toHaveProperty("href", "https://example.com/")
  })
})
