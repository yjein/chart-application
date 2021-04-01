const tempData = []

const dashboard = () => {
  const dashboard = document.createElement("div")
  dashboard.classList.add("dashboard")

  Object.keys(options).forEach((item) => dashboard.appendChild(img(item)))

  return dashboard
}
