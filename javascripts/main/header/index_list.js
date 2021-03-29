const list = (title, menu) => {
  const list = document.createElement("li")
  list.classList.add("list")
  list.textContent = title

  list.addEventListener("click", () => {
    history.pushState({}, title, menu)
    chartProject.setPage(menu)
  })
  list.style.cursor = "pointer"

  return list
}
