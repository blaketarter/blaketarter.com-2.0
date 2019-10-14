import React from "react"
import { Navbar, navItems } from "."
import { render } from "@testing-library/react"

describe("Navbar", () => {
  it("renders", async () => {
    // Arrange
    const { findByText } = render(<Navbar />)

    // Act
    // Assert
    await findByText("blaketarter")

    for (const navItem of navItems) {
      const navItemLink = await findByText(navItem.text)
      expect(navItemLink).toHaveProperty(
        "href",
        `http://localhost/${navItem.href}`,
      )
    }
  })
})
