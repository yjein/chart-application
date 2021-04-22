import React from "react"
import styled from "styled-components"

const ChartList: React.FC<{}> = (props) => {
  const { children } = props
  return (
    <div>
      <Ul>
        <Li>Bar Chart</Li>
        <Li>Line Chart</Li>
        <Li>Pie Chart</Li>
        <Li>Candiestick Chart</Li>
        <Li>Funnel Chart</Li>
        <Li>Scatter Chart</Li>
        <Li>Gauge Chart</Li>
        <Li>Parallel Chart</Li>
        <Li>Radar Chart</Li>
        <Li>Sankey Chart</Li>
        <Li>Pictorialbar Chart</Li>
        <Li>Sunburst Chart</Li>
      </Ul>
    </div>
  )
}

const Ul = styled.ul`
  margin: 0;
  padding: 0;
`

const Li = styled.li`
  padding: 0.25rem;
  list-style: none;
  border: 2px solid #c9c9c9;
  color: #666666;
  text-align: center;
  font-weight: 700;
  background-color: #ffffff;
  cursor: pointer;
`

export default ChartList
