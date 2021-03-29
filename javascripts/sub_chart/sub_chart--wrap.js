"use strict"

const chartWrapper = () => {
  const wrap = document.createElement("div")
  wrap.classList.add("chartWrap")

  wrap.appendChild(chartHeader())
  wrap.appendChild(sidebar())
  wrap.appendChild(chartMain())
  wrap.appendChild(chartOption())

  return wrap
}
