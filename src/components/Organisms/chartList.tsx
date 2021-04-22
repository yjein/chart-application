import React from "react"
import styled from "styled-components"

const ChartList: React.FC<{}> = (props) => {
  const { children } = props
  return (
    
    <StyleChartList>
      <Ul>
        <Li>a</Li>
        <Li>b</Li>
        <Li>c</Li>
      </Ul>
    </StyleChartList>
  )
}

const StyleChartList = styled.div`
  position: sticky;
  top: 0;
  overflow-x: auto;
  width: 200px;
  height: 100vh;
  background-color: #c9c9c9;

  &::-webkit-scrollbar {
    display: none;
  }
`

const Ul = styled.ul`
  margin: 0;
  padding: 0;
`

const Li = styled.li`
  padding: 0.25rem;
  list-style: none;
  border: 2px solid #c9c9c9;
  color: #333333;
  text-align: center;
  font-weight: 700;
  background-color: #ffffff;
`

export default ChartList
