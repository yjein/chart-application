import React from "react"
import styled from "styled-components"

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

interface Props {
  chartName: string[]
}

const ChartList: React.FC<Props> = ({ chartName }) => {
  // const { children } = props
  return (
    <div>
      <Ul>
        {chartName.map((item) => (
          <Li>{item}</Li>
        ))}
      </Ul>
    </div>
  )
}

export default ChartList
