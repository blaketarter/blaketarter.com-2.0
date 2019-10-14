import React from "react"
import { WorkItem } from "."

export default { title: "WorkItem", component: WorkItem }

export const renders = () => (
  <WorkItem
    title="Title"
    desc="Description"
    url="https://example.com"
    img="foo"
    source="test"
    alt="alt text"
    tags={["tag1", "tag2"]}
  />
)
