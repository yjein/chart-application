const Wrap = () => {
  const wrap = document.createElement("div")
  wrap.classList.add("wrap")

  wrap.appendChild(Header())
  wrap.appendChild(Main())

  return Wrap
}
