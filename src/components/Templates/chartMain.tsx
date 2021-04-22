import React from "react"
import styled from "styled-components"
import Chart from "./chartChart"

const ChartMain: React.FC<{}> = (props) => {
  // const { children } = props
  return (
    <Main>
      <Chart />
    </Main>
  )
}

const Main = styled.main`
  padding: 2.25rem;
  background-color: #999999;
`

export default ChartMain
