"use strict"

const chart = () => {
  return chartClass.render()
}

class TempClass {
  constructor() {
    this.curState = "bar"
    this.chart = document.createElement("div")
    this.chart.classList.add("chart")

    this.chart_content = document.createElement("div")
    this.chart_body = document.createElement("div")
    this.chart.appendChild(this.chart_content)
    this.chart.appendChild(this.chart_body)
  }

  setChart(chartName) {
    this.curState = chartName
    this.chart.removeChild(this.chart_content)
    this.chart.removeChild(this.chart_body)

    this.chart_content = chart_ex(options[chartName].contents)
    this.chart_body = CreateChart(options[chartName].option)

    this.chart.appendChild(this.chart_content)
    this.chart.appendChild(this.chart_body)
  }

  render() {
    this.setChart(this.curState)
    return this.chart
  }
}
