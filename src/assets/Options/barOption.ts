const BarOption = {
  tooltip: {},
  toolbox: {
    show: true,
    feature: {
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  legend: {},
  dataset: {
    source: [
      ["product", "2018", "2019", "2020", "2021"],
      ["제품A", 41, 30, 65, 53],
      ["제품B", 86, 92, 85, 83],
      ["제품C", 24, 67, 79, 86],
    ],
  },
  xAxis: [
    { type: "category", gridIndex: 0 },
    { type: "category", gridIndex: 1 },
  ],
  yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],
  grid: [{ bottom: "55%" }, { top: "55%" }],
  series: [
    // These series are in the first grid.
    { type: "bar", seriesLayoutBy: "row" },
    { type: "bar", seriesLayoutBy: "row" },
    { type: "bar", seriesLayoutBy: "row" },
    // These series are in the second grid.
    { type: "bar", xAxisIndex: 1, yAxisIndex: 1 },
    { type: "bar", xAxisIndex: 1, yAxisIndex: 1 },
    { type: "bar", xAxisIndex: 1, yAxisIndex: 1 },
    { type: "bar", xAxisIndex: 1, yAxisIndex: 1 },
  ],
}

export default BarOption
