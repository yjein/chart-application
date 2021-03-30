"use strict"

const list = (title, menu) => {
  const list = document.createElement("li")

  switch (chartProject.pageStatus) {
    case "main":
      list.classList.add("list")
      break
    case "chart":
      list.classList.add("nav-list")
      break
    default:
      break
  }
  list.textContent = title

  list.addEventListener("click", () => {
    // history.pushState({}, title, menu)
    chartProject.setPage(menu)
  })
  list.style.cursor = "pointer"

  return list
}
