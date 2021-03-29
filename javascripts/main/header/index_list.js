const list = (title) => {
  const list = document.createElement("li")
  list.classList.add("list")
  list.textContent = title

  list.addEventListener("click", () => {
    history.pushState({}, title, "#")
  })
  list.style.cursor = "pointer"

  return list
}
