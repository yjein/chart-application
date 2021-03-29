const header = () => {
  const header = document.createElement("header")
  header.classList.add("mainHeader")

  header.appendChild(logo_wrap())
  header.appendChild(nav())

  return header
}
