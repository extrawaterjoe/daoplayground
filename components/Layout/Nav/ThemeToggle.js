import React from "react"
import { useTheme } from "next-themes"

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  const lightTheme = React.useMemo(
    () => (
      <button className="nav-btn" onClick={() => setTheme("dark")}>
        🌙
      </button>
    ),
    [setTheme]
  )

  const darkTheme = React.useMemo(
    () => (
      <button className="nav-btn" onClick={() => setTheme("light")}>
        ☀️
      </button>
    ),
    [setTheme]
  )

  if (theme === "light") {
    return lightTheme
  }

  if (theme === "dark") {
    return darkTheme
  }

  return null
}

export default ThemeToggle
