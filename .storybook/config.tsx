import React from "react"
import { configure, addDecorator } from "@storybook/react"
import "loki/configure-react"
import { GlobalStyles } from "../src/components/GlobalStyles"
import { ThemeProvider } from "../src/utils/theme"

addDecorator(storyFn => (
  <>
    <ThemeProvider defaultMode="light" persist={false}>
      <div
        style={{
          overflow: "hidden",
          minHeight: "100vh",
          minWidth: "100vw",
          background: "var(--background-color)",
          color: "var(--font-color)",
        }}
      >
        <GlobalStyles />
        {storyFn()}
      </div>
    </ThemeProvider>
  </>
))

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /stories\.tsx$/), module)
