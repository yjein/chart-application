"use strict"

const chart = () => {
  const chart = document.createElement("div")
  chart.classList.add("chart")
  chart.appendChild(chart_ex())
  chart.appendChild(chart_source())

  return chart
}
