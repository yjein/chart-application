"use strict"

const CreateList = (chartName) => {
  const chartList = document.createElement("li")
  chartList.classList.add("side-list")
  chartList.textContent = chartName

  chartList.addEventListener("click", () => {
    chartClass.setChart(chartName)
  })
  chartList.style.cursor = "pointer"

  return chartList
}
