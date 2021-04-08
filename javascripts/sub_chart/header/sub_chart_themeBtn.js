const themeBtn = (themeName) => {
  const theme_button = document.createElement("button")
  theme_button.classList.add("themeBtn")
  theme_button.textContent = "@"

  theme_button.addEventListener("click", () => {
    chartClass.setTheme(themeName)
    chartClass.render()
  })

  return theme_button
}
