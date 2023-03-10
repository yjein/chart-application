import React, { useCallback } from "react"
import styled from "styled-components"
import InfoItem from "../Molecules/InfoItem"
import ThemeButton from "./ThemeButton"
import ReactECharts from "echarts-for-react"
import { AgGridReact } from "ag-grid-react"
import "ag-grid-community/dist/styles/ag-grid.css"
import { ThemeData, ThemeDataType } from "../../assets/ThemeData"
import "ag-grid-community/dist/styles/ag-theme-fresh.css"

interface Prop {
  chartState: string
  chartOption: Object
  gridOption: Object
  chartExplanation: string
  themeState: ThemeDataType
  setThemeState: React.Dispatch<React.SetStateAction<ThemeDataType>>
}

const GridToggle = styled.div`
  margin-bottom: 1rem;
  height: 130px;
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
      <GridToggle className={"ag-theme-fresh"}>
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
          theme={ThemeData[themeState]}
        />
      </CreateChart>
    </div>
  )
}
