const mainWrapper = () => {
  const wrap = document.createElement("div")
  wrap.classList.add("wrap")

  wrap.appendChild(header())
  wrap.appendChild(indexMain())

  return wrap
}
