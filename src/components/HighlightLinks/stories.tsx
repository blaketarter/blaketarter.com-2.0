import React from "react"
import { HighlightLinks } from "."

export default { title: "HighlightLinks", component: HighlightLinks }

export const renders = () => (
  <HighlightLinks>
    Testing text [Testing link](https://example.com/)
  </HighlightLinks>
)
