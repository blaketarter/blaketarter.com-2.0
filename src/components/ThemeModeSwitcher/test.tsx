import React from "react"
import { ThemeModeSwitcher } from "."
import { render, fireEvent } from "@testing-library/react"
import { ThemeProvider } from "../../utils/theme"

describe("ThemeModeSwitcher", () => {
  it("renders", async () => {
    // Arrange
    const { findByLabelText } = render(
      <ThemeProvider defaultMode="light" persist={false}>
        <ThemeModeSwitcher />
      </ThemeProvider>,
    )

    // Act
    // Assert
    await findByLabelText("enable dark mode")
    await findByLabelText("enable light mode")
  })

  it("changes to dark mode", async () => {
    // Arrange
    const { findByLabelText } = render(
      <ThemeProvider defaultMode="light" persist={false}>
        <ThemeModeSwitcher />
      </ThemeProvider>,
    )

    // Act
    const enableDarkMode = await findByLabelText("enable dark mode")
    const enableLightMode = await findByLabelText("enable light mode")

    fireEvent.click(enableDarkMode)

    // Assert
    expect(enableDarkMode.getAttribute("aria-checked")).toBe("true")
    expect(enableLightMode.getAttribute("aria-checked")).toBe("false")
  })

  it("changes to light mode", async () => {
    // Arrange
    const { findByLabelText } = render(
      <ThemeProvider defaultMode="dark" persist={false}>
        <ThemeModeSwitcher />
      </ThemeProvider>,
    )

    // Act
    const enableDarkMode = await findByLabelText("enable dark mode")
    const enableLightMode = await findByLabelText("enable light mode")

    fireEvent.click(enableLightMode)

    // Assert
    expect(enableDarkMode.getAttribute("aria-checked")).toBe("false")
    expect(enableLightMode.getAttribute("aria-checked")).toBe("true")
  })

  it("can be persisted to dark", async () => {
    localStorage.setItem("mode", "dark")

    // Arrange
    const { findByLabelText } = render(
      <ThemeProvider>
        <ThemeModeSwitcher />
      </ThemeProvider>,
    )

    // Act
    const enableDarkMode = await findByLabelText("enable dark mode")
    const enableLightMode = await findByLabelText("enable light mode")

    // Assert
    expect(enableDarkMode.getAttribute("aria-checked")).toBe("true")
    expect(enableLightMode.getAttribute("aria-checked")).toBe("false")
  })

  it("can be persisted to light", async () => {
    localStorage.setItem("mode", "light")

    // Arrange
    const { findByLabelText } = render(
      <ThemeProvider>
        <ThemeModeSwitcher />
      </ThemeProvider>,
    )

    // Act
    const enableDarkMode = await findByLabelText("enable dark mode")
    const enableLightMode = await findByLabelText("enable light mode")

    // Assert
    expect(enableDarkMode.getAttribute("aria-checked")).toBe("false")
    expect(enableLightMode.getAttribute("aria-checked")).toBe("true")
  })
})
