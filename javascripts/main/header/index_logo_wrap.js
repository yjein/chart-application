const logo_wrap = () => {
  const logo_wrap = document.createElement("div")
  logo_wrap.classList.add("logo-wrapper")

  logo_wrap.appendChild(logo())

  return logo_wrap
}