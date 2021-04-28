import React from "react"
import styled from "styled-components"
import InfoItem from "../Molecules/InfoItem"
import ThemeButton from "../Organisms/ThemeButton"
import ReactECharts from "echarts-for-react"
import { AgGridReact } from "ag-grid-react"
import "ag-grid-community/dist/styles/ag-grid.css"
import ThemeData, { ThemeDataType } from "../../assets/themeData"

interface Prop {
  chartState: string
  chartOption: Object
  gridOption: Object
  themeOption: Object
  setThemeState: React.Dispatch<React.SetStateAction<ThemeDataType>>
}

const GridToggle = styled.div`
  margin-bottom: 1rem;
  height: 100px;
  background-color: #ffffff;
`

const CreateChart = styled.div`
  border-radius: 0.25rem;
  background-color: #ffffff;
`

const ChartChart: React.FC<Prop> = ({
  chartState,
  chartOption,
  gridOption,
  themeOption,
  setThemeState,
}) => {
  return (
    <div>
      <ThemeButton
        themeName={Object.keys(ThemeData) as ThemeDataType[]}
        setThemeState={setThemeState}
      />
      <InfoItem name={chartState} explanation="Chart Explanation" />
      <GridToggle>
        <AgGridReact gridOptions={gridOption} />
      </GridToggle>
      <CreateChart>
        <ReactECharts
          opts={{ renderer: "svg" }}
          option={chartOption}
          notMerge={true}
          style={{
            padding: "0.5rem",
            height: "60vh",
          }}
          theme={themeOption}
        />
      </CreateChart>
    </div>
  )
}

export default ChartChart
