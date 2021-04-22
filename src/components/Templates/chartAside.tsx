import React from "react"
import styled from "styled-components"
import ChartList from "../Organisms/chartList"

const StyleChartAside = styled.div`
  position: sticky;
  top: 0;
  width: 200px;
  height: calc(100vh - 40px);
  overflow-x: auto;
  background-color: #c9c9c9;

  &::-webkit-scrollbar {
    display: none;
  }
`

const ChartAside = () => {
  return (
    <StyleChartAside>
      <ChartList />
    </StyleChartAside>
  )
}

export default ChartAside
