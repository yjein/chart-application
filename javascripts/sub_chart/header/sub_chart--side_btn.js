"use strict"

const side_btn = () => {
  const side_btn = document.createElement("button")
  side_btn.classList.add("sideBtn")
  side_btn.textContent = "="

  side_btn.addEventListener("click", function toggleTheBar() {
    document.querySelector(".sidebar").classList.toggle("--close")
  })

  return side_btn
}
