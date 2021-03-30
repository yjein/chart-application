"use strict"

const div = () => {
  const div = document.createElement("div")

  div.appendChild(logo())
  div.appendChild(ul())

  return div
}
