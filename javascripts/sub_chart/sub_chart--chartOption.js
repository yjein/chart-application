"use strict"

const chartOption = () => {
  const chartOption = document.createElement("div")
  chartOption.classList.add("chartOption")

  chartOption.appendChild(option())
  chartOption.appendChild(form())

  return chartOption
}
