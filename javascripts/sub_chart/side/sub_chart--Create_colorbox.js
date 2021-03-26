"use strict"

const Create_colorbox = () => {
  const Create_colorbox = document.createElement("div")
  Create_colorbox.classList.add("box")

  const chart_color = document.createElement("div")
  chart_color.classList.add("color-chart")
  Create_colorbox.appendChild(chart_color)

  Create_colorbox.appendChild(Create_div("Chart Color 1"))
  Create_colorbox.appendChild(Create_input("text", "data"))

  Create_colorbox.appendChild(Create_div("Chart Color 2"))
  Create_colorbox.appendChild(Create_input("text", "data"))

  Create_colorbox.appendChild(Create_div("Chart Color 3"))
  Create_colorbox.appendChild(Create_input("text", "data"))

  return Create_colorbox
}
