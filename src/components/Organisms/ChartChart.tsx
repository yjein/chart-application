import React from "react"
import styled from "styled-components"
import InfoItem from "../Molecules/InfoItem"
import ThemeButton from "../Organisms/ThemeButton"
import ReactECharts from "echarts-for-react"
import ThemeData, { ThemeDataType } from "../../assets/themeData"

interface Prop {
  chartState: string
  chartOption: Object
}

const GridToggle = styled.div`
  margin-bottom: 1rem;
  height: 100px;
  background-color: #ffffff;
`

const CreateChart = styled.div`
  background-color: #ffffff;
`

const ChartChart: React.FC<Prop> = ({ chartState, chartOption }) => {
  return (
    <div>
      <ThemeButton />
      <InfoItem name={chartState} explanation="Chart Explanation" />
      <GridToggle />
      <CreateChart>
        <ReactECharts
          option={chartOption}
          notMerge={true}
          style={{ padding: "10px", height: "60vh" }}
        />
      </CreateChart>
    </div>
  )
}

export default ChartChart
