import React from "react"
import { configure, addDecorator } from "@storybook/react"
import "loki/configure-react"
import { GlobalStyles } from "../src/components/GlobalStyles"

addDecorator(storyFn => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
))

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /stories\.tsx$/), module)
