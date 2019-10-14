import React from "react"
import { MyWork, workItems } from "."
import { render } from "@testing-library/react"

describe("MyWork", () => {
  it("renders", async () => {
    // Arrange
    const count = 5
    const { findByText } = render(<MyWork count={count} />)

    // Act
    // Assert
    await findByText("My Work.")

    for (const work of workItems.slice(0, count)) {
      await findByText(work.title)
    }
  })

  it("does not render outside of count", async () => {
    // Arrange
    const count = 1
    const { findByText } = render(<MyWork count={count} />)

    // Act
    // Assert
    await findByText("My Work.")

    for (const work of workItems.slice(1, workItems.length)) {
      expect(findByText(work.title)).rejects.toThrowError()
    }
  })
})
