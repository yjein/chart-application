"use strict"

const Create_div = (str) => {
  const div = document.createElement("div")
  div.textContent = str
  return div
}

const Create_input = (type, name) => {
  const input = document.createElement("input")
  input.type = type
  input.name = name
  return input
}

const Create_fontbox = () => {
  const Create_fontbox = document.createElement("div")
  Create_fontbox.classList.add("box")

  Create_fontbox.appendChild(Create_div("Font Style"))
  Create_fontbox.appendChild(Create_input("text", "style"))

  Create_fontbox.appendChild(Create_div("Font Size"))
  Create_fontbox.appendChild(Create_input("number", "size"))

  Create_fontbox.appendChild(Create_div("Weight"))
  Create_fontbox.appendChild(Create_input("text", "weight"))

  return Create_fontbox
}

const Create_databox = () => {
  const Create_databox = document.createElement("div")
  Create_databox.classList.add("box")

  Create_databox.appendChild(Create_div("Data 1"))
  Create_databox.appendChild(Create_input("text", "data"))

  Create_databox.appendChild(Create_div("Data 2"))
  Create_databox.appendChild(Create_input("text", "data"))

  Create_databox.appendChild(Create_div("Data 3"))
  Create_databox.appendChild(Create_input("text", "data"))

  Create_databox.appendChild(Create_div("Data 4"))
  Create_databox.appendChild(Create_input("text", "data"))

  return Create_databox
}

const Create_colorbox = () => {
  const Create_colorbox = document.createElement("div")
  Create_colorbox.classList.add("box")

  const chart_color = document.createElement("div")
  chart_color.classList.add("color-chart")
  Create_colorbox.appendChild(chart_color)

  Create_colorbox.appendChild(Create_div("Chart Color 1"))
  Create_colorbox.appendChild(Create_input("text", "data"))

  Create_colorbox.appendChild(Create_div("Chart Color 2"))
  Create_colorbox.appendChild(Create_input("text", "data"))

  Create_colorbox.appendChild(Create_div("Chart Color 3"))
  Create_colorbox.appendChild(Create_input("text", "data"))

  return Create_colorbox
}

const fieldset = (id) => {
  const fieldset = document.createElement("fieldset")

  switch(id){
    case "font": {fieldset.appendChild(Create_fontbox()); break}
    case "data": {fieldset.appendChild(Create_databox()); break}
    case "color": {fieldset.appendChild(Create_colorbox()); break}
    default: {break}
  }
  return fieldset
}

const Create_form = (action, id, method) => {
  const Create_form = document.createElement("form")

  Create_form.action = action
  Create_form.id = id
  Create_form.method = method

  Create_form.appendChild(fieldset(id))
  return Create_form
}

const form = () => {
  const form = document.createElement("form")

  form.appendChild(Create_form("#", "font", "GET"))
  form.appendChild(Create_form("#", "data", "GET"))
  form.appendChild(Create_form("#", "color", "GET"))

  return form
}

const option = () => {
  const option = document.createElement("p")
  option.classList.add("option")
  option.textContent = "Option"

  return option
}

const chartOption = () => {
  const chartOption = document.createElement("div")
  chartOption.classList.add("chartOption")

  chartOption.appendChild(option())
  chartOption.appendChild(form())

  return chartOption
}

const chart_ex = () => {
  const chart_ex = document.createElement("p")
  chart_ex.classList.add("chart-ex")
  chart_ex.textContent = "TEXT~~~~~~"

  return chart_ex
}

const chart_source = () => {
  const chart_source = document.createElement("div")
  chart_source.classList.add("chart-source")
  chart_source.textContent = "Chart"

  return chart_source
}

const chart = () => {
  const chart = document.createElement("div")
  chart.classList.add("chart")
  chart.appendChild(chart_ex())
  chart.appendChild(chart_source())

  return chart
}

const main = () => {
  const main = document.createElement("main")
  main.appendChild(chart())

  return main
}

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

const side_ul = () => {
  const side_ul = document.createElement("ul")
  side_ul.classList.add("side-ul")

  const tempData = []
  for (let i = 1; i <= 30; i++) tempData.push(i)

  tempData.forEach((item) => {
    CreateList(item) ///????
    side_ul.appendChild(CreateList(item))
  })

  return side_ul
}

const sidebar = () => {
  const sidebar = document.createElement("nav")
  sidebar.classList.add("sidebar")
  sidebar.appendChild(side_ul())
  return sidebar
}

const optBtn = () => {
  const opt_button = document.createElement("button")
  opt_button.classList.add("optBtn")
  opt_button.textContent = "="
  return opt_button
}

const right_box = () => {
  const right_box = document.createElement("div")
  right_box.classList.add("box-right")
  right_box.appendChild(optBtn())
  return right_box
}

const nav_li = (title) => {
  const nav_li = document.createElement("li")
  nav_li.classList.add("nav-list")
  nav_li.textContent = title

  nav_li.addEventListener("click", () => {
    history.pushState({}, title, "#")
  })
  nav_li.style.cursor = "pointer"

  return nav_li
}

const nav_ul = () => {
  const nav_ul = document.createElement("ul")
  nav_ul.classList.add("nav-ul")

  nav_ul.appendChild(nav_li("home"))
  nav_ul.appendChild(nav_li("chart"))
  nav_ul.appendChild(nav_li("docs"))
  nav_ul.appendChild(nav_li("contact"))

  return nav_ul
}

const logo = () => {
  const logo = document.createElement("div")
  logo.classList.add("logo")
  logo.textContent = "RaonChart"

  return logo
}

const div = () => {
  const div = document.createElement("div")

  div.appendChild(logo())
  div.appendChild(nav_ul())

  return div
}

const nav_bar = () => {
  const nav_bar = document.createElement("nav")
  nav_bar.classList.add("navbar")

  nav_bar.appendChild(div())

  return nav_bar
}

const side_btn = () => {
  const side_btn = document.createElement("button")
  side_btn.classList.add("sideBtn")
  side_btn.textContent = "="

  return side_btn
}

const left_box = () => {
  const left_box = document.createElement("div")
  left_box.classList.add("box-left")
  left_box.appendChild(side_btn())

  return left_box
}

const header = () => {
  const header = document.createElement("header")

  header.appendChild(left_box())
  header.appendChild(nav_bar())
  header.appendChild(right_box())

  return header
}

const wrap = () => {
  const wrap = document.createElement("div")
  wrap.classList.add("wrap")

  wrap.appendChild(header())
  wrap.appendChild(sidebar())
  wrap.appendChild(main())
  wrap.appendChild(chartOption())

  return wrap
}

const run = () => {
  const root = document.querySelector("#root")
  root.appendChild(wrap())
}

run()
