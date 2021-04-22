import React from "react"
import styled from "styled-components"
import InfoItem from "../Molecules/infoItem"
import ThemeButton from "../Organisms/themeButton"

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

const GridToggle = styled.div`
  margin-bottom: 1rem;
  height: 100px;
  background-color: #ffffff;
`

const CreateChart = styled.div`
  height: 100px;
  background-color: #ffffff;
`

export default ChartChart
