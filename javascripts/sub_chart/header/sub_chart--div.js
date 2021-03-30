"use strict"

const div = () => {
  const div = document.createElement("div")

  div.appendChild(chartLogo())
  div.appendChild(ul())

  return div
}
