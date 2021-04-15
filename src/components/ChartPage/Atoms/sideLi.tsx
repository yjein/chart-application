import React from "react"
import styled from "styled-components"

const SideLi: React.FC<{}> = (props) => {
  const { children } = props
  return <StyleSideLi>{children}</StyleSideLi>
}

const StyleSideLi = styled.li`
  padding: 0.25rem;
  list-style: none;
  border: 2px solid #c9c9c9;
  color: #333333;
  text-align: center;
  font-weight: 700;
  background-color: #ffffff;
`

export default SideLi
