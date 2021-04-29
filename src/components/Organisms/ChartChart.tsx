import React, { useCallback } from "react"
import styled from "styled-components"
import InfoItem from "../Molecules/InfoItem"
import ThemeButton from "./ThemeButton"
import ReactECharts from "echarts-for-react"
import { AgGridReact } from "ag-grid-react"
import "ag-grid-community/dist/styles/ag-grid.css"
import { ThemeData, ThemeDataType } from "../../assets/ThemeData"

interface Prop {
  chartState: string
  chartOption: Object
  gridOption: Object
  chartExplanation: Object
  themeOption: Object
  themeState: ThemeDataType
  setThemeState: React.Dispatch<React.SetStateAction<ThemeDataType>>
}

const GridToggle = styled.div`
  margin-bottom: 1rem;
  height: 100px;
  background-color: #ffffff;
`

const CreateChart = styled.div<{ themeState: ThemeDataType }>`
  border-radius: 0.25rem;
  background-color: ${({ themeState }) =>
    ThemeData[themeState].backgroundColor};
`

export const ChartChart: React.FC<Prop> = ({
  chartState,
  chartOption,
  gridOption,
  chartExplanation,
  themeOption,
  themeState,
  setThemeState,
}) => {
  const AgGridRender = useCallback(
    () => <AgGridReact gridOptions={gridOption} />,
    [gridOption]
  )

  return (
    <div>
      <ThemeButton setThemeState={setThemeState} />
      <InfoItem name={chartState + " Chart"} explanation={chartExplanation} />
      <GridToggle>
        <AgGridRender />
      </GridToggle>
      <CreateChart themeState={themeState}>
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
