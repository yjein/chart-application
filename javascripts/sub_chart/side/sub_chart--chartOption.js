"use strict"

const chartOption = () => {
  const chartOption = document.createElement("div")
  chartOption.classList.add("chartOption")
  chartOption.classList.add("--close")

  chartOption.appendChild(option())
  chartOption.appendChild(form())

  return chartOption
}
