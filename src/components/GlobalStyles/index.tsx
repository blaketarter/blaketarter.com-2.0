import React from "react"
import { Global } from "@emotion/core"
import { useTheme } from "../../utils/theme"

export const GlobalStyles = () => {
  const { rootCss } = useTheme()

  return (
    <Global
      styles={{
        ":root": rootCss,
      }}
    />
  )
}
