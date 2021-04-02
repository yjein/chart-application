const img = (chartName, url) => {
  const img = document.createElement("img")
  img.textContent = chartName
  img.classList.add("image")
  img.src = url

  img.addEventListener("click", () => {
    chartProject.setPage("chart")
    chartClass.setChart(chartName)
  })

  img.style.cursor = "pointer"

  return img
}
