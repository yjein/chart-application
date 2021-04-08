"use strict"

const chart = () => {
  return chartClass.render()
}

class TempClass {
  constructor() {
    this.curState = "bar"
    this.curTheme = "vintage"
    this.chart = document.createElement("div")
    this.chart.classList.add("chart")

    this.chart_content = document.createElement("div")
    this.chart_ag = document.createElement("div")
    this.chart_body = document.createElement("div")
    this.chart.appendChild(this.chart_content)
    this.chart.appendChild(this.chart_ag)
    this.chart.appendChild(this.chart_body)
  }

  setChart(chartName) {
    this.curState = chartName
    this.chart.removeChild(this.chart_content)
    this.chart.removeChild(this.chart_ag)
    this.chart.removeChild(this.chart_body)

    this.chart_content = chart_ex(options[chartName].contents)
    this.chart_ag = chart_grid(options[chartName].gridOption)
    this.chart_body = CreateChart(options[chartName].option, this.curTheme)

    this.chart.appendChild(this.chart_content)
    this.chart.appendChild(this.chart_ag)
    this.chart.appendChild(this.chart_body)
  }

  setTheme(themeName) {
    this.curTheme = themeName
  }

  render() {
    this.setChart(this.curState)
    this.setTheme(this.curTheme)
    return this.chart
  }
}
