"use strict"

const side_ul = () => {
  const side_ul = document.createElement("ul")
  side_ul.classList.add("side-ul")

  Object.keys(options).forEach((item) => {
    side_ul.appendChild(CreateList(item))
  })

  return side_ul
}
