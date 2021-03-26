const Ul = () => {
  const ul = document.createElement("ul")

  ul.appendChild(List("home"))
  ul.appendChild(List("chart"))
  ul.appendChild(List("docs"))
  ul.appendChild(List("contact"))

  return Ul
}
