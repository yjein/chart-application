"use strict"

const side_btn = () => {
  const side_btn = document.createElement("button")
  side_btn.classList.add("sideBtn")
  side_btn.textContent = "="

    //TODO: 의존성 수정 필요
  const toggleTheBar = () => {
    document.querySelector(".sidebar").classList.toggle("--close")
  }

  side_btn.addEventListener("click", () => toggleTheBar())

  return side_btn
}
