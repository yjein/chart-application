"use strict"

const CreateChart = (option) => {
  const create_chart = document.createElement("div")
  create_chart.classList.add("createChart")

  setTimeout(() => {
    const myChart = echarts.init(create_chart)
    option && myChart.setOption(option)
  }, 0)

  return create_chart
}
