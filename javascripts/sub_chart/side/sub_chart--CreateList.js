"use strict"

const CreateList = (li_num) => {
  const num = li_num || 1 // 보지 않는다

  const chartList = document.createElement("li")
  chartList.classList.add("side-list")
  chartList.textContent = `Chart ${num}`

  chartList.addEventListener("click", () => {
    history.pushState({}, "Chart-Style", "#")
  })
  chartList.style.cursor = "pointer"

  return chartList
}
