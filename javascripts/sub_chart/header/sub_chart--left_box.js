"use strict"

const left_box = () => {
  const left_box = document.createElement("div")
  left_box.classList.add("box-left")
  left_box.appendChild(side_btn())

  return left_box
}
