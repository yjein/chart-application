"use strict"

const chartWrapper = () => {
  const wrap = document.createElement("div")
  wrap.classList.add("wrap")

  wrap.appendChild(chartHeader())
  wrap.appendChild(sidebar())
  wrap.appendChild(main())
  wrap.appendChild(chartOption())

  return wrap
}
