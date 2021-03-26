const Root = () => {
  const root = document.querySelector(".root")
  const header = document.createElement("header")
  root.appendChild(header)
  const logo_wrap = document.createElement("div")
  logo_wrap.classList.add("logo-wrapper")
  header.appendChild(logo_wrap)
}
Root()
