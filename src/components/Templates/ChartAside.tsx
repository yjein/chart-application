import React from "react"
import styled from "styled-components"

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

const ChartAside: React.FC<{}> = (props) => {
  return <StyleChartAside>{props.children}</StyleChartAside>
}

export default ChartAside
