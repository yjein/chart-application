const img = (chartName) => {
  const img = document.createElement("div")
  img.textContent = chartName
  // img.src = ""
  img.addEventListener("click", () => {
    chartProject.setPage("chart")
    chartClass.setChart(chartName)
  })

  img.style.cursor = "pointer"

  return img
}
