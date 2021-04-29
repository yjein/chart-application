import styled from "styled-components"
import { Image } from "../Atoms/Img"
import { PageType } from "../../App"
import ChartData from "../../assets/ChartData"
import { ChartDataType } from "../../assets/ChartData"
import React from "react"

interface Prop {
  setChartState: React.Dispatch<React.SetStateAction<ChartDataType>>
  setPageState: React.Dispatch<React.SetStateAction<PageType>>
}

const DashBord = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.5rem;
`

const Div = styled.div`
  &:nth-child(1) {
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
  }
  &:nth-child(2) {
    grid-column: 3 / span 2;
    grid-row: 2 / span 2;
  }
`

export const MainDashBord: React.FC<Prop> = ({
  setChartState,
  setPageState,
}) => {
  const handleOnclick = (key: string) => {
    setChartState(key as ChartDataType)
    setPageState("ChartPage")
  }

  return (
    <DashBord>
      {Object.entries(ChartData).map(([key, value]) => (
        <Div key={key} onClick={() => handleOnclick(key)}>
          <Image url={value.Url} />
        </Div>
      ))}
    </DashBord>
  )
}
