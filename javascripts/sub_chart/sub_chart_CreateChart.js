"use strict"

const CreateChart = (option, themeName) => {
  const create_chart = document.createElement("div")
  create_chart.classList.add("createChart")

  setTimeout(() => {
    Object.keys(themeOption).forEach((v) => {
      echarts.registerTheme(v, themeOption[v])
    })

    const myChart = echarts.init(create_chart, themeName, {
      renderer: "svg",
    })

    option && myChart.setOption(option)

    const ro = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.target.handleResize) entry.target.handleResize(entry)
      }
    })
    ro.observe(create_chart)
  }, 0)

  return create_chart
}
