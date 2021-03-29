const mainNav = () => {
  const nav = document.createElement("nav")
  nav.classList.add("mainNav")

  nav.appendChild(ul())

  return nav
}
