"use strict"

const chart_ex = (contents) => {
  const chart_ex = document.createElement("p")
  chart_ex.classList.add("chart_ex")
  chart_ex.textContent = contents

  chart_ex.appendChild(grid_toggle())
  return chart_ex
}
