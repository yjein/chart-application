"use strict"

const chart_grid = (gridOption) => {
  const chart_grid = document.createElement("div")

  chart_grid.classList.add("ag_grid")
  chart_grid.classList.add("ag-theme-alpine")
  new agGrid.Grid(chart_grid, gridOption)

  return chart_grid
}
