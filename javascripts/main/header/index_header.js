const header = () => {
  const header = document.createElement("header")

  header.appendChild(logo_wrap())
  header.appendChild(nav())

  return header
}
