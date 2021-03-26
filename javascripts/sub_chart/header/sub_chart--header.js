"use strict"

const header = () => {
  const header = document.createElement("header")

  header.appendChild(left_box())
  header.appendChild(nav_bar())
  header.appendChild(right_box())

  return header
}
