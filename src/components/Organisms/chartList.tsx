import React from "react"
import styled from "styled-components"

const ChartList: React.FC<{}> = (props) => {
  const { children } = props
  return (
    <div>
      <Ul>
        <Li>a</Li>
        <Li>b</Li>
        <Li>c</Li>
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
  color: #333333;
  text-align: center;
  font-weight: 700;
  background-color: #ffffff;
`

export default ChartList
