const mainWrapper = () => {
  const wrap = document.createElement("div")
  wrap.classList.add("wrap")

  wrap.appendChild(mainHeader())
  wrap.appendChild(main())

  return wrap
}
