import React from "react"
import Chart from "../Atoms/chart"
import ChartEx from "../Atoms/chartEx"
import GridToggle from "../Atoms/gridToggle"
import CreateChart from "../Atoms/createChart"

const ChartItem = () => {
  return (
    <Chart>
      <ChartEx>text</ChartEx>
      <GridToggle></GridToggle>
      <CreateChart></CreateChart>
    </Chart>
  )
}

export default ChartItem
