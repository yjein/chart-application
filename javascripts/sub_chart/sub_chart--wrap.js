"use strict"

const wrap = () => {
  const wrap = document.createElement("div")
  wrap.classList.add("wrap")

  wrap.appendChild(header())
  wrap.appendChild(sidebar())
  wrap.appendChild(main())
  wrap.appendChild(chartOption())

  return wrap
}
