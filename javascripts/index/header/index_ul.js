const ul = () => {
  const ul = document.createElement("ul")

  ul.appendChild(list("home"))
  ul.appendChild(list("chart"))
  ul.appendChild(list("docs"))
  ul.appendChild(list("contact"))

  return ul
}
