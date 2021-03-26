const tempData = []
for (let i = 0; i < 15; i++) {
  tempData.push(i + 1)
}

const dashboard = () => {
  const dashboard = document.createElement("div")
  dashboard.classList.add("dashboard")

  tempData.forEach((item) => dashboard.appendChild(img()))

  return dashboard
}
