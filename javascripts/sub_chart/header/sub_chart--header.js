"use strict"

const chartHeader = () => {
  const header = document.createElement("header")
  header.classList.add("chartHeader")

  header.appendChild(left_box())
  header.appendChild(nav_bar())
  header.appendChild(right_box())

  return header
}
