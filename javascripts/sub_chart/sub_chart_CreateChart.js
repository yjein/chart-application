"use strict"

const CreateChart = (option) => {
  const create_chart = document.createElement("div")
  create_chart.classList.add("createChart")

  setTimeout(() => {
    const myChart = echarts.init(
      create_chart,
      'vintage',
      {
        renderer: "svg",
      }
    )

    option && myChart.setOption(option)

    const ro = new ResizeObserver((entries) => {
      for (let entry of entries) {
        myChart.resize()
        if (entry.target.handleResize) entry.target.handleResize(entry)
      }
    })
    ro.observe(create_chart)
  }, 0)

  return create_chart
}
