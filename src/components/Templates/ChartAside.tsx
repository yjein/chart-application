import React from "react"
import styled from "styled-components"

interface Props {
  toggleState: boolean
}

const StyleChartAside = styled.aside<{ toggleState: boolean }>`
  position: sticky;
  top: 0;
  padding-bottom: 2.5rem;
  width: ${({ toggleState }) => (toggleState ? "12.5rem" : 0)};
  height: calc(100vh - 2.5rem);
  overflow-x: auto;
  transition: all 150ms;
  background-color: #c9c9c9;

  &::-webkit-scrollbar {
    display: none;
  }
`

const ChartAside: React.FC<Props> = (props) => {
  const { children, toggleState } = props
  return <StyleChartAside toggleState={toggleState}>{children}</StyleChartAside>
}

export default ChartAside
