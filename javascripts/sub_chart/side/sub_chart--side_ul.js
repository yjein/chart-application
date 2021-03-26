"use strict"

const side_ul = () => {
  const side_ul = document.createElement("ul")
  side_ul.classList.add("side-ul")

  const tempData = []
  for (let i = 1; i <= 30; i++) tempData.push(i)

  tempData.forEach((item) => {
    side_ul.appendChild(CreateList(item))
  })

  return side_ul
}
