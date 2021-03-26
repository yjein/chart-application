"use strict"

const nav_ul = () => {
  const nav_ul = document.createElement("ul")
  nav_ul.classList.add("nav-ul")

  nav_ul.appendChild(nav_li("home"))
  nav_ul.appendChild(nav_li("chart"))
  nav_ul.appendChild(nav_li("docs"))
  nav_ul.appendChild(nav_li("contact"))

  return nav_ul
}
