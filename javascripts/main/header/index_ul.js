const ul = () => {
  const ul = document.createElement("ul")
  ul.classList.add("main-ul")

  ul.appendChild(list("home", "main"))
  ul.appendChild(list("chart", "chart"))
  ul.appendChild(list("docs", "docs"))
  ul.appendChild(list("contact", "contact"))

  return ul
}
