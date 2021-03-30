"use strict"

const optBtn = () => {
  const opt_button = document.createElement("button")
  opt_button.classList.add("optBtn")
  opt_button.textContent = "="
	//TODO: 의존성 수정 필요
  const toggleTheBar = () => {
    document.querySelector(".chartOption").classList.toggle("--close")
  }

  opt_button.addEventListener("click", () => toggleTheBar())

  return opt_button
}
