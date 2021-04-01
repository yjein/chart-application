"use strict"

const chart = () => {
  return chartClass.render()
}

class TempClass {
  constructor() {
    this.chart = document.createElement("div")
    this.chart.classList.add("chart")

    this.con = document.createElement("div")
    this.bo = document.createElement("div")
    this.chart.appendChild(this.con)
    this.chart.appendChild(this.bo)
  }

  setChart(chartName) {
    this.chart.removeChild(this.con)
    this.chart.removeChild(this.bo)

    this.con = chart_ex(options[chartName].contents)
    this.bo = CreateChart(options[chartName].option)

    this.chart.appendChild(this.con)
    this.chart.appendChild(this.bo)
  }

  render() {
    this.setChart("bar")
    return this.chart
  }
}
