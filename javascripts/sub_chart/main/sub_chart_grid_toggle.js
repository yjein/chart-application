"use strict"

const grid_toggle = () => {
  const grid_toggle = document.createElement("button")
  grid_toggle.textContent = "#"

  grid_toggle.addEventListener("click", () => {
    document.querySelector(".ag_grid").classList.toggle("ag_grid_off")
    document.querySelector(".createChart").classList.toggle("createChart_up")
  })

  return grid_toggle
}