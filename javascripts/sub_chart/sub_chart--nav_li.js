"use strict"

const nav_li = (title) => {
  const nav_li = document.createElement("li")
  nav_li.classList.add("nav-list")
  nav_li.textContent = title

  nav_li.addEventListener("click", () => {
    history.pushState({}, title, "#")
  })
  nav_li.style.cursor = "pointer"

  return nav_li
}
