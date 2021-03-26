"use strict"

const right_box = () => {
  const right_box = document.createElement("div")
  right_box.classList.add("box-right")
  right_box.appendChild(optBtn())
  return right_box
}
