"use strict"

const sidebar = () => {
  const sidebar = document.createElement("nav")
  sidebar.classList.add("sidebar")
  sidebar.appendChild(side_ul())
  return sidebar
}
