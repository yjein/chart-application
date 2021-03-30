"use strict"

const div = () => {
  const div = document.createElement("div")

  div.appendChild(chartLogo())
  div.appendChild(nav_ul())

  return div
}
