import React from "react"
import { Footer } from "."
import { render } from "@testing-library/react"

describe("Footer", () => {
  it("renders", async () => {
    // Arrange
    const { findByText } = render(<Footer />)

    // Act
    // Assert
    const backToTop = await findByText("↑ Back to the Top.")
    await findByText(
      "© CURR_YEAR Blake Tarter".replace(
        "CURR_YEAR",
        `${new Date().getFullYear()}`,
      ),
    )

    expect(backToTop).toHaveProperty("href", "http://localhost/#top")
  })
})
