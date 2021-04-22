import React from "react"
import styled from "styled-components"
import InfoItem from "../Molecules/InfoItem"
import ThemeButton from "../Organisms/ThemeButton"

const GridToggle = styled.div`
  margin-bottom: 1rem;
  height: 100px;
  background-color: #ffffff;
`

const CreateChart = styled.div`
  height: 100px;
  background-color: #ffffff;
`

const ChartChart = () => {
  return (
    <div>
      <ThemeButton />
      <InfoItem />
      <GridToggle />
      <CreateChart />
    </div>
  )
}

export default ChartChart
