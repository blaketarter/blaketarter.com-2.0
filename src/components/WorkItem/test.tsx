import React from "react"
import { WorkItem } from "."
import { render } from "@testing-library/react"

describe("WorkItem", () => {
  it("renders", async () => {
    // Arrange

    // Act
    const { findByText, findByAltText } = render(
      <WorkItem
        title="Title"
        desc="Description"
        url="https://example.com"
        img="foo"
        source="test"
        alt="alt text"
        tags={["tag1", "tag2"]}
      />,
    )

    // Assert
    await findByText("Title")
    await findByText("Description")
    await findByText("/ tag1 / tag2")

    const img = await findByAltText("alt text")
    expect(img).toHaveProperty("src", "http://localhost/images/foo")

    const link = await findByText("See it on test.")
    expect(link).toHaveProperty("href", "https://example.com/")
  })
})
