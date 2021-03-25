"use strict"

const Wrap = () => {
  // root, wrap 컴포넌트 추가
  const root = document.querySelector("div")
  root.id = "root"
  const wrap = document.createElement("div")
  wrap.classList.add("wrap")

  // header 컴포넌트 추가
  const header = document.createElement("header")

  // left_box 컴포넌트 추가
  const left_box = document.createElement("div")
  left_box.classList.add("box-left")

  const side_btn = document.createElement("button")
  side_btn.classList.add("sideBtn")
  side_btn.textContent = "="
  left_box.appendChild(side_btn)

  // nav바 컴포넌트 추가
  const nav_var = document.createElement("nav")
  nav_var.classList.add("navbar")
  const div = document.createElement("div")

  // 로고 컴포넌트 추가
  const logo = document.createElement("div")
  logo.classList.add("logo")
  logo.textContent = "RaonChart"

  // nav_ul 컴포넌트 추가
  const nav_ul = document.createElement("ul")
  nav_ul.classList.add("nav-ul")

  // nav_list 컴포넌트 추가
  const nav_li_home = document.createElement("li")
  nav_li_home.classList.add("nav-list")
  nav_li_home.textContent = "Home"

  const nav_li_chart = document.createElement("li")
  nav_li_chart.classList.add("nav-list")
  nav_li_chart.classList.add("cur_display")
  nav_li_chart.textContent = "Chart"

  const nav_li_docs = document.createElement("li")
  nav_li_docs.classList.add("nav-list")
  nav_li_docs.textContent = "Docs"

  const nav_li_contact = document.createElement("li")
  nav_li_contact.classList.add("nav-list")
  nav_li_contact.textContent = "Contact"

  // nav ul태그에 li자식요소 추가
  nav_ul.appendChild(nav_li_home)
  nav_ul.appendChild(nav_li_chart)
  nav_ul.appendChild(nav_li_docs)
  nav_ul.appendChild(nav_li_contact)

  // div태그에 로고, nav ul 자식요소 추가
  div.appendChild(logo)
  div.appendChild(nav_ul)

  // nav bar에 div 자식요소 추가
  nav_var.appendChild(div)

  // right box 컴포넌트 추가
  const right_box = document.createElement("div")
  right_box.classList.add("box-right")

  const opt_button = document.createElement("button")
  opt_button.classList.add("optBtn")
  opt_button.textContent = "="
  right_box.appendChild(opt_button)

  // header에 상단에 들어갈 자식요소 추가
  header.appendChild(left_box)
  header.appendChild(nav_var)
  header.appendChild(right_box)

  wrap.appendChild(header)
  root.appendChild(wrap)
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
