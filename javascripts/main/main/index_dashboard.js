const tempData = []

const dashboard = () => {
  const dashboard = document.createElement("div")
  dashboard.classList.add("dashboard")

  Object.keys(options).forEach((item) =>
    dashboard.appendChild(img(item, options[item].image_url))
  )

  return dashboard
}
