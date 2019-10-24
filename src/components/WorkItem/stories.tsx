import React from "react"
import { WorkItem } from "."
import { ThemeProvider } from "../../utils/theme"
import { GlobalStyles } from "../GlobalStyles"

export default { title: "WorkItem", component: WorkItem }

export const lightMode = () => (
  <WorkItem
    title="Title"
    desc="Description"
    url="https://example.com"
    img="fp.png"
    source="test"
    alt="alt text"
    tags={["tag1", "tag2"]}
  />
)
export const darkMode = () => (
  <ThemeProvider defaultMode="dark" persist={false}>
    <GlobalStyles />
    <WorkItem
      title="Title"
      desc="Description"
      url="https://example.com"
      img="fp.png"
      source="test"
      alt="alt text"
      tags={["tag1", "tag2"]}
    />
  </ThemeProvider>
)
