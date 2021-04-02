"use strict"

const optBtn = () => {
  const opt_button = document.createElement("button")
  opt_button.classList.add("optBtn")
  opt_button.textContent = "="

  opt_button.addEventListener("click", function toggleTheBar() {
    document.querySelector(".chartOption").classList.toggle("--close")
  })

  return opt_button
}
