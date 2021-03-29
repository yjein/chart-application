"use strict"

const chartWrapper = () => {
  const wrap = document.createElement("div")
  wrap.classList.add("wrap")

  wrap.appendChild(header())
  wrap.appendChild(sidebar())
  wrap.appendChild(chartMain())
  wrap.appendChild(chartOption())

  return wrap
}
