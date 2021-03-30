"use strict"

const ul = () => {
  const ul = document.createElement("ul")

  switch (chartProject.pageStatus) {
    case "main":
      ul.classList.add("main-ul")
      break
    case "chart":
      ul.classList.add("nav-ul")
      break
    default:
      break
  }

  ul.appendChild(list("home", "main"))
  ul.appendChild(list("chart", "chart"))
  ul.appendChild(list("docs", "docs"))
  ul.appendChild(list("contact", "contact"))

  return ul
}
