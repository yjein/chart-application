"use strict"

const Wrap = () => {
  const root = document.querySelector("div")
  root.id = "root"
  const wrap = document.createElement("div")
  wrap.classList.add("wrap")

  const header = document.createElement("header")
}
Wrap()

const CreateList = (li_num) => {
  const num = li_num || 1 // 보지 않는다

  const chartList = document.createElement("li")
  chartList.classList.add("side-list")
  chartList.textContent = `Chart ${num}`
  chartList.addEventListener("click", () => {
    history.pushState({}, "Chart-Style", "#")
  })
  chartList.style.cursor = "pointer"

  const element = document.querySelector(".side-ul")
  element.appendChild(chartList)
}

const tempData = []
for (let i = 1; i <= 30; i++) tempData.push(i)

const func = (item) => CreateList(item)
tempData.forEach(func)
